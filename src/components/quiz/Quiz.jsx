import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import {
  preguntasFigma,
  preguntasHtml,
  preguntasJs,
  preguntasUx,
} from "../quiz/quizData";
import { preguntasCss } from "../quiz/quizData";
import { UserContext } from "../../hooks/UserContext";

import { Flex } from "../../styles/Flex";
import { QuizStyled } from "../../styles/QuizStyled";
import { RespuestaIncorrectaStyled } from "../../styles/RespuestaIncorrectaStyled";
import { RespuestaCorrectaStyled } from "../../styles/RespuestaCorrectaStyled";
import { BotonRespuestas } from "../../styles/BotonRespuestas";
import { BotonValidar } from "../../styles/BotonValidar";
import axios from "axios";
import { url } from "../../helpers/url";
const emptyCircle =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645422545/circleQuestion_xkknmk.png";
const fullCircle =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645422561/correctAnswer_gavmxd.png";
const wrongCircle =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645620785/wrongAnswer_ziffe5.png";
const closeIcon =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632535/sprint2/design/icons/close_cmdv3d.png";
const vidasIcon =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632538/sprint2/design/icons/vidas_lzf9oh.png";

const Quiz = () => {
  const location = useLocation();
  let { from, dataIndividual, dataGeneral } = location.state;
  let {
    tiempo: {
      segundos,
      minutos,
    } /*, correctAnswers, incorrectAnswers, porcentaje */,
  } = dataIndividual;

  let {
    tiempoDedicado: { segundosGenerales, minutosGenerales },
    preguntasContestadas,
    totalCorrectas,
    totalIncorrectas,
  } = dataGeneral;

  //use reducer
  const { dataGame, setDataGame, localId, user } = useContext(UserContext);
  const [vidas, setVidas] = useState(4);
  const [segundosState, setSegundosState] = useState(segundos);
  const [minutosState, setMinutosState] = useState(minutos);
  const [progreso, setProgreso] = useState(0);
  const [pregunta, setPregunta] = useState(1);
  let preguntas;
  let quiz;

  switch (from) {
    case "HTML":
      preguntas = preguntasHtml;
      quiz = "HTML";
      break;
    case "CSS":
      preguntas = preguntasCss;
      quiz = "CSS";
      break;
    case "FIGMA":
      preguntas = preguntasFigma;
      quiz = "FIGMA";
      break;
    case "JS":
      preguntas = preguntasJs;
      quiz = "JS";
      break;
    case "UX":
      preguntas = preguntasUx;
      quiz = "UX";
      break;
    default:
      console.log("Error");
      break;
  }
  const [numeroPreguntas, setNumeroPreguntas] = useState(
    Object.keys(preguntas).length - 1
  );
  const navigate = useNavigate();
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [validateAnswer, setValidateAnswer] = useState(undefined);
  const [correctAnswersTotal, setCorrectAnswersTotal] = useState(0);
  const [incorrectAnswersTotal, setIncorrectAnswersTotal] = useState(0);

  const handleAnswers = () => {
    const respuesta = preguntas[pregunta].respuesta;
    setProgreso((e) => e + 20);
    if (currentAnswer.length === 0) {
      return console.log("Select an answer");
    }
    if (currentAnswer.length > 0) {
      if (currentAnswer === respuesta) {
        setCorrectAnswersTotal((e) => e + 1);
      } else {
        let respuestas = document.getElementsByClassName("respuesta");

        for (let i = 0; i < respuestas.length; i++) {
          if (respuestas[i].classList.contains("selected")) {
            respuestas[i].lastChild.src = wrongCircle;
            respuestas[i].classList.remove("selected");
            respuestas[i].classList += " wrong";
          }
        }
        setIncorrectAnswersTotal((e) => e + 1);
      }
    }
    setValidateAnswer(currentAnswer === respuesta);
  };
  const addNewData = () => {
    console.log("segundosGenerales", segundosGenerales);
    let newSeconds = segundos + segundosState;
    let newMinutos = minutos + minutosState;
    let newCorrectAnswers = correctAnswersTotal;
    let newIncorrectAnswers = incorrectAnswersTotal;
    let newPorcentage = progreso;
    let newSegundosGenerales = segundosGenerales + segundosState;
    let newMinutosGenerales = minutosGenerales + minutosState;
    let newPreguntasContestadas = preguntasContestadas + pregunta ;
    let newTotalCorrectas = totalCorrectas + newCorrectAnswers;
    let newTotalIncorrectas = totalIncorrectas + newIncorrectAnswers;

    let newData = {
      tiempo: {
        segundos: newSeconds,
        minutos: newMinutos,
      },
      correctAnswers: newCorrectAnswers,
      incorrectAnswers: newIncorrectAnswers,
      porcentaje:newPorcentage,
    };
    let newDataGeneral = {
      tiempoDedicado: {
        segundosGenerales: newSegundosGenerales,
        minutosGenerales: newMinutosGenerales,
      },
      preguntasContestadas: newPreguntasContestadas,
      totalCorrectas: newTotalCorrectas,
      totalIncorrectas: newTotalIncorrectas,
    };

    setDataGame((prev) => ({
      general: newDataGeneral,
      individuales: {
        ...prev.individuales,
        [quiz]: { ...newData },
      },
    }));
    let obj = { user: user, dataDailyBits: dataGame };
    console.log("localId", localId);
    axios
      .put(url + localId, { ...obj })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    console.log("USUARIO ACTUALIZADO");
    return navigate("/sprint2copy/home");
  };
  const gameManager = () => {
    
    setNumeroPreguntas((e) => e - 1);

    setPregunta((e) => e + 1);
    
    if (numeroPreguntas === 0) {
      if (validateAnswer) {
        setCurrentAnswer("");
        setValidateAnswer(undefined);

        clearSelection();
      } else {
        setVidas((e) => e - 1);

        setCurrentAnswer("");
        setValidateAnswer(undefined);

        clearSelection();
      }

      addNewData();
    }

    if (!validateAnswer) {
      setVidas((e) => e - 1);
    }
      setCurrentAnswer("");
      setValidateAnswer(undefined);
      clearSelection();
    
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
      if (arrayRespuesta[i].classList.contains("wrong")) {
        arrayRespuesta[i].classList.remove("wrong");
        arrayRespuesta[i].lastChild.src = emptyCircle;
      }
    }
  };
  const handleSelection = ({ target }) => {
    let boton = document.getElementById("boton");
    clearSelection();

    let value = target.getAttribute("value");
    if (target.classList.contains("respuesta")) {
      target.className += " selected";
      target.lastChild.src = fullCircle;
    }

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
      <h3>{preguntas[pregunta].respuesta}</h3>
      <div className="boton" onClick={gameManager}>
        <p>Continuar</p>
      </div>
    </RespuestaIncorrectaStyled>
  );

  useEffect(() => {
    // console.log(segundosState);
    let intervalCounterID = setInterval(
      () => setSegundosState((e) => e + 1),
      1000
    );
    if (segundosState >= 60) {
      setMinutosState((e) => (e += 1));
      setSegundosState((e) => (e = 0));
    }
    return () => clearInterval(intervalCounterID);
  }, [segundosState]);

  return (
    <Flex>
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
          <img className="heart" src={vidasIcon} alt="iconoDeVidas" />
          <p>{vidas}</p>
        </div>
        <div className="pregunta">
          <img src={preguntas[pregunta].imgUrl} alt="greenCharacter" />
          <p>{preguntas[pregunta].pregunta}</p>
        </div>
        <div className="respuestas">

          {preguntas[pregunta].opciones.map((opcion, index) => {
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
    </Flex>
  );
};

export default Quiz;
