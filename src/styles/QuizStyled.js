import styled from "styled-components";
import {
  _black,
  _green,
  _red,
  _white,
  _body1_bold,
  _headline_headline2,
  _purple,
} from "./style";

export const QuizStyled = styled.div`
  @keyframes heartbeat {
    0% {
      transform: scale(0.75);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.75);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(0.75);
    }
  }
  background-color: ${_black};
  display: flex;

  flex-direction: column;
  height: 100vh;

  width: 100%;
  .selected {
    border: 2px solid ${_green};
  }
 

  .respuestas {
    display: flex;
    flex-direction: column;
    align-items: center;
    .wrong {
      border: 2px solid ${_red};
    }}
  .respuestas2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    
     justify-content: center;
    .wrong {
      border: 2px solid ${_red};
    }
  }

  .barraDeVida {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    #myProgress {
      position: relative;
      width: 75%;
      height: 12px;
      background-color: ${_white};

      border-radius: 20px;
    }

    .heart {
      width: 24px;
      height: 24px;
      margin-right: 5px;
      margin-left: 5px;
      animation: heartbeat 2s infinite;
    }

    p {
      font: ${_body1_bold};
      color: white;
    }
    #myBar {
      position: absolute;
      width: var(--fill);
      height: 100%;
      background-color: ${_green};
      border-radius: 20px;
    }
  }
  .pregunta {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
p{
    font: ${_headline_headline2};
    width: 70%;
    color: ${_white};
    
  }
    img {
      width: 75px;
      height: 160px;
    }
    @media (min-width: 700px) {
      p{
      font-size: 40px;
      margin: 0%;
    }
    }
  }
  .boton {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
    @media (min-width: 700px) {
      margin-top: 155px;
    }
  }
  .isSelected {
    background-color: ${_purple};
  }
  .canva{
    display: none;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: flex-start;
  }
`;
