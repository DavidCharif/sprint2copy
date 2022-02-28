import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { _headline_headline2, _red } from "../../styles/style";

import { BotonRespuestas } from "../../styles/BotonRespuestas";
import { EstadisticasStyled } from "../../styles/EstadisticasStyled";

const clockIcon =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632535/sprint2/design/icons/clock_rca2wr.png";
const messageIcon =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632536/sprint2/design/icons/message_pbense.png";

const GameStyled = styled.h3`
font: ${_headline_headline2};
color : #ef4565;  
  
  `
const WinStyled = styled.h3`
font: ${_headline_headline2};
color : #2cb67d;  
  
  `

const EstadisticasGame = () => {
  const navigate = useNavigate();
  const state = useLocation();
  let datos = state.state.data;
  let gameOver = state.state.gameOver;
  console.log("datos", datos);
  const {
    tiempo: { segundos, minutos },
    correctAnswers,
    incorrectAnswers,
    porcentaje,
  } = datos;

  return (
    <>
      <EstadisticasStyled>
      {gameOver ? <GameStyled>Game Over</GameStyled>: <WinStyled>Felicidades</WinStyled>}
        <div className="bloque">
          <img src={messageIcon} alt="Message" />
          <p>Respuestas correctas</p>
          <p className="correctas">{correctAnswers}</p>
        </div>
        <div className="bloque">
          <img src={messageIcon} alt="Message" />
          <p>Respuestas incorrectas</p>
          <p className="incorrectas">{incorrectAnswers}</p>
        </div>
        <div className="bloque">
          <img src={messageIcon} alt="Message" />
          <p>Porcentaje</p>
          <p className="incorrectas">{porcentaje}</p>
        </div>
        <div className="bloque">
          <img src={clockIcon} alt="clock" />
          <p>Tiempo dedicado</p>
          <div>
            <div>
              <p>Segundos </p>
              <p> {segundos}</p>
            </div>
            <div>
              <p>Minutos </p>
              <p> {minutos}</p>
            </div>
          </div>
        </div>

        <BotonRespuestas
          onClick={() => {
            return navigate("/sprint2copy/home");
          }}
        >
          Volver a inicio
        </BotonRespuestas>
      </EstadisticasStyled>
    </>
  );
};

export default EstadisticasGame;
