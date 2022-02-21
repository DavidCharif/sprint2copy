import React, { useState } from "react";
import { QuizStyled } from "../../styles/style";
import closeIcon from "../../guideApp/icons/close.png";
import vidasIcon from "../../guideApp/icons/vidas.png"
import greenCaracterIcon from "../../guideApp/icons/greenCaracter.png"
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const [dataGame, setDataGame] = useState({
    vidas:4,
    progreso:'0%',
    pregunta:1
  })
  const navigate = useNavigate()
  return (
    <QuizStyled>
      <div className="barraDeVida">
        <img src={closeIcon} alt="close icon" onClick={()=>{
          navigate(-1)
        }}></img>
        <div id="myProgress">
          <div id="myBar" style={{'--fill':dataGame.progreso}}></div>
        </div>
        <img src={vidasIcon} alt="iconoDeVidas"/>
        <p>{dataGame.vidas}</p>
        </div> 
        <div className="pregunta">
            <img src={greenCaracterIcon} alt="greenCharacter"/>
            <p>¿Qué etiqueta es semánticamente correcta para el contenido principal?</p>
        </div>
      
    </QuizStyled>
  );
};

export default Quiz;
