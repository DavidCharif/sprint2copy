import React, { useContext, useState } from "react";
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
import { UserContext } from "../../hooks/UserContext";
import { dataPre } from "../Login/CreateAccount";
const emptyCircle =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645422545/circleQuestion_xkknmk.png";
const fullCircle =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645422561/correctAnswer_gavmxd.png";

const Quiz = () => {
  const { setUser } = useContext(UserContext);
  const [vidas, setVidas] = useState(4);
  const [progreso, setProgreso] = useState(0);
  const [pregunta, setPregunta] = useState(1);
  const [numeroPreguntas, setNumeroPreguntas] = useState(
    Object.keys(preguntasHtml).length - 1
  );
  const navigate = useNavigate();
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [validateAnswer, setValidateAnswer] = useState(undefined);
  const [correctAnswersTotal, setCorrectAnswersTotal] = useState(0);
  const [incorrectAnswersTotal, setIncorrectAnswersTotal] = useState(0);

  const handleAnswers = () => {
  

    const respuesta = preguntasHtml[pregunta].respuesta;

    if (currentAnswer.length === 0) {
      return "Select an answer";
    }
    if (currentAnswer.length > 0) {
      if(currentAnswer === respuesta){
        setCorrectAnswersTotal((e) => e + 1);
      } else {
        setIncorrectAnswersTotal((e) => e + 1);
      };
   
    }
    setValidateAnswer(currentAnswer === respuesta)
 
   
  };
  const gameManager = () => {
    
    
    if (numeroPreguntas === 0) {
      if(validateAnswer) {
      setVidas((e) => e);
      setProgreso((e) => (e += 20));
      setCurrentAnswer("");
      setValidateAnswer(undefined);
      clearSelection();
      setCorrectAnswersTotal((e) => e + 1);
      } else {
        setVidas((e) => e - 1);
        setProgreso((e) => (e += 20));
        setCurrentAnswer("");
        setValidateAnswer(undefined);
        setIncorrectAnswersTotal((e) => e + 1);
        clearSelection();
      }
    
      let HTML = {
        correctAnswers: correctAnswersTotal,
        incorrectAnswers: incorrectAnswersTotal,
        porcentaje: 100,
        tiempo: 10,
      };
      let general = {
        totalCorrectas: correctAnswersTotal,
        totalIncorrectas: incorrectAnswersTotal,
        tiempoDedicado: 10,
        preguntasContestadas: 5,
      };
      dataPre.individuales.HTML = HTML;
      dataPre.general = general;
      
      setUser((prev) => ({
        ...prev,
        data: { ...dataPre },
      }));
      return navigate(-1)
    }

    if (validateAnswer) {
      
      setProgreso((e) => (e + 20));
      setNumeroPreguntas((e) => (e - 1));
      setPregunta((e) => (e + 1));
      
      setCurrentAnswer("");
      setValidateAnswer(undefined);
     
      
      clearSelection();
    } else {
     
      setVidas((e) => e - 1);
      setNumeroPreguntas((e) => (e - 1));
      setProgreso((e) => (e + 20));
      setPregunta((e) => (e + 1));
      setCurrentAnswer("");
      setValidateAnswer(undefined);
      clearSelection();
    }


    console.log('correctAnswersTotal', correctAnswersTotal)
    console.log('IncorrectAnswersTotal', incorrectAnswersTotal)
    ;
  };
  const clearSelection = () => {
    let arrayRespuesta = document.getElementsByClassName("respuesta");
    let boton = document.getElementById("boton");
    boton.classList.remove("isSelected");
    for (let i = 0; i < arrayRespuesta.length; i++) {
      if (arrayRespuesta[i].classList.contains("selected")) {
        arrayRespuesta[i].classList.remove("selected");
        arrayRespuesta[i].lastChild.src = emptyCircle;
      }
    }
  };
  const handleSelection = ({ target }) => {
    let boton = document.getElementById("boton");
    clearSelection();
    let value = target.getAttribute("value");
    target.className += " selected";
    target.lastChild.src = fullCircle;
    if (target.classList.contains("selected")) {
      boton.classList += " isSelected";
    }
    setCurrentAnswer(value);
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
