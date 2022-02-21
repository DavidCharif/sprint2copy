import React, { useContext } from "react";
import { HomeStyled } from "../../styles/style";
import NavBar from "../NavBar/NavBar";
import html from "../../guideApp/languages/html.png";
import css from "../../guideApp/languages/css.png";
import figma from "../../guideApp/languages/figma.png";

import js from "../../guideApp/languages/js.png";
import ux from "../../guideApp/languages/ux.png";



import { UserContext } from "../../hooks/UserContext";
import { Link } from "react-router-dom";
const Home = () => {
  

  
const { user  } = (useContext(UserContext))

  return (
    <HomeStyled>
      <h3>Practica tus conocimientos en la categoría que prefieras</h3>
      <div className="opciones">
        <div className="row1">
        
          <div className="item">
            
            <div className="fill"  role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'--value':user.dataUser.data.individuales.HTML.porcentaje}}>
            <div className="progressRound">
            <Link to="/sprint2copy/quiz">
            <img src={html} alt="logo"></img>
            </Link>
            </div>
            
              
              
            </div>
       
            <p>HTML</p>
          </div>
        </div>
        <div className="row2">
          <div className="item">
          <div className="fill"  role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'--value':user.dataUser.data.individuales.CSS.porcentaje}}>
          <div className="progressRound">
            <img src={css} alt="logo"></img>
            </div>
            </div>
            <p>CSS</p>
          </div>
          
          <div className="item">
          <div className="fill"  role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'--value':user.dataUser.data.individuales.FIGMA.porcentaje}}>
          <div className="progressRound">
            <img src={figma} alt="logo"></img>
            </div>
            </div>
            <p>FIGMA</p>
          </div>
        </div>
        <div className="row3">
          <div className="item">
          <div className="fill"  role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'--value':user.dataUser.data.individuales.JS.porcentaje}}>
          <div className="progressRound">
            <img src={js} alt="logo"></img>
            </div>
            </div>
            <p>JS</p>
          </div>
          <div className="item">
          <div className="fill"  role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{'--value':user.dataUser.data.individuales.UX.porcentaje}}>
          <div className="progressRound">
            <img src={ux} alt="logo"></img>
            </div>
            </div>
            <p>UX</p>
          </div>
        </div>
      </div>
      
      <NavBar></NavBar>
    </HomeStyled>
  );
};

export default Home;
