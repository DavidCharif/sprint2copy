import React, { useState } from "react";
import {
  BotonRespuestas,
  BotonValidar,
  QuizStyled,
  RespuestaCorrectaStyled,
  RespuestaIncorrectaStyled,
} from "../../styles/style";
import closeIcon from "../../guideApp/icons/close.png";
import vidasIcon from "../../guideApp/icons/vidas.png";

import { useNavigate } from "react-router-dom";
import { preguntasHtml } from "../quiz/quizData";

const emptyCircle =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645422545/circleQuestion_xkknmk.png";
const fullCircle =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645422561/correctAnswer_gavmxd.png";

const Quiz = () => {
 
  const [vidas, setVidas] = useState(4);
  const [progreso, setProgreso] = useState(0);
  const [pregunta, setPregunta] = useState(1);

  const navigate = useNavigate();
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [validateAnswer, setValidateAnswer] = useState(undefined);

  const handleAnswers = () => {
    const respuesta = preguntasHtml[pregunta].respuesta;

    console.log(currentAnswer === respuesta, "aloha");
    if (currentAnswer.length === 0) {
      return "Select an answer";
    }
    if (currentAnswer.length > 0) {
      setValidateAnswer(currentAnswer === respuesta);
    }
  };
  const gameManager = () => {
    if (validateAnswer) {
      setVidas((e) => e);
      setProgreso((e) => (e += 20));
      setPregunta((e) => (e += 1));
      setCurrentAnswer("");
      setValidateAnswer(undefined);
      clearSelection();
    } else {
      setVidas((e) => e - 1);
      setProgreso((e) => (e += 20));
      setPregunta((e) => (e += 1));
      setCurrentAnswer("");
      setValidateAnswer(undefined);
      clearSelection();
    }
  };
  const clearSelection = () => {
    let arrayRespuesta = document.getElementsByClassName("respuesta");
    for (let i = 0; i < arrayRespuesta.length; i++) {
      if (arrayRespuesta[i].classList.contains("selected")) {
        arrayRespuesta[i].classList.remove("selected");
        arrayRespuesta[i].lastChild.src = emptyCircle;
      }
    }
  };
  const handleSelection = ({ target }) => {
    const respuesta = preguntasHtml[pregunta].respuesta;
    console.log('respuesta', respuesta)
    let boton = document.getElementById("boton");
    clearSelection();
    let value = target.getAttribute("value");
    target.className += " selected";
    target.lastChild.src = fullCircle;
    if (target.classList.contains("selected")) {
      boton.classList += " isSelected";
    }
    setCurrentAnswer(value);
    console.log(currentAnswer === respuesta, "aloha");
  };
  const RespuestaCorrecta = (
    <RespuestaCorrectaStyled>
      <h2>Buen trabajo!</h2>
      <div className="boton" onClick={gameManager}>
        <p>Continuar</p>
      </div>
    </RespuestaCorrectaStyled>
  );
  const RespuestaIncorrecta = (
    <RespuestaIncorrectaStyled>
      <h2>La respuesta correcta es:</h2>
      <h3>{preguntasHtml[pregunta].respuesta}</h3>
      <div className="boton" onClick={gameManager}>
        <p>Continuar</p>
      </div>
    </RespuestaIncorrectaStyled>
  );

  return (
    <QuizStyled>
      <div className="barraDeVida">
        <img
          src={closeIcon}
          alt="close icon"
          onClick={() => {
            navigate(-1);
          }}
        ></img>
        <div id="myProgress">
          <div id="myBar" style={{ "--fill": `${progreso}%` }}></div>
        </div>
        <img src={vidasIcon} alt="iconoDeVidas" />
        <p>{vidas}</p>
      </div>
      <div className="pregunta">
        <img src={preguntasHtml[pregunta].imgUrl} alt="greenCharacter" />
        <p>{preguntasHtml[pregunta].pregunta}</p>
      </div>
      <div className="respuestas">
        {preguntasHtml[pregunta].opciones.map((opcion, index) => {
          return (
            <BotonRespuestas
              className="respuesta"
              key={index}
              value={opcion}
              onClick={handleSelection}
            >
              <p>{opcion}</p>
              <img src={emptyCircle} alt="circle"></img>
            </BotonRespuestas>
          );
        })}
      </div>
      <div className="boton">
        <BotonValidar id="boton" onClick={handleAnswers}>
          COMPROBAR
        </BotonValidar>
      </div>
      {validateAnswer !== undefined
        ? validateAnswer === true
          ? RespuestaCorrecta
          : RespuestaIncorrecta
        : ""}
    </QuizStyled>
  );
};

export default Quiz;
