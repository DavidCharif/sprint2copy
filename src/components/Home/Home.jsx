import React, { useContext } from "react";
import { HomeStyled } from "../../styles/HomeStyled";
import NavBar from "../NavBar/NavBar";
import { UserContext } from "../../hooks/UserContext";
import { Link } from "react-router-dom";
const html =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632536/sprint2/design/languages/htmlHQ_touwhd.png";
const css =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632536/sprint2/design/languages/cssHQ_fcizmg.png";
const figma =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632536/sprint2/design/languages/figmaHQ_gc4tun.png";
const js =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632537/sprint2/design/languages/jsHQ_bqtvhb.png";
const ux =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632537/sprint2/design/languages/ux_p7raq9.png";
const Home = () => {
  const {  dataGame } = useContext(UserContext);
  // console.log(user);
  // console.log(dataGame, 'data');
  const {general, individuales: {HTML, FIGMA, CSS, JS, UX}} = dataGame
 
  // HTML = {
  //   correctAnswers: 5,
  //   incorrectAnswers: 5,
  //   porcentaje: 100,
  //   tiempo: 10
  // }
  // console.log(HTML, 'despues');
  // setUser(prevState => ({  ...prevState,
  //     dataGameUser:{dataGame:{individuales:{HTML}}}
  //
  // }))
  return (
    <HomeStyled>
      <h3>Practica tus conocimientos en la categoría que prefieras</h3>
      <div className="opciones">
        <div className="row1">
          <div className="item">
            <div
              className="fill"
              role="progressbar"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": dataGame.individuales.HTML.porcentaje }}
            >
              <div className="progressRound">
                <Link to="/sprint2copy/quiz" state={{ from: "HTML", dataIndividual :HTML, dataGeneral : general }}>
                  <img src={html} alt="logo"></img>
                </Link>
              </div>
            </div>

            <p>HTML</p>
          </div>
        </div>
        <div className="row2">
          <div className="item">
            <div
              className="fill"
              role="progressbar"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": dataGame.individuales.CSS.porcentaje }}
            >
              <div className="progressRound">
              <Link to="/sprint2copy/quiz"  state={{ from: "CSS", dataIndividual :CSS, dataGeneral : general }}>
                <img src={css} alt="logo"></img>
                </Link>
              </div>
            </div>
            <p>CSS</p>
          </div>

          <div className="item">
            <div
              className="fill"
              role="progressbar"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value":dataGame.individuales.FIGMA.porcentaje }}
            >
              <div className="progressRound">
              <Link to="/sprint2copy/quiz"  state={{ from: "FIGMA", dataIndividual :FIGMA, dataGeneral : general }}>
                <img src={figma} alt="logo"></img>
                </Link>
              </div>
            </div>
            <p>FIGMA</p>
          </div>
        </div>
        <div className="row3">
          <div className="item">
            <div
              className="fill"
              role="progressbar"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": dataGame.individuales.JS.porcentaje }}
            >
              <div className="progressRound">
              <Link to="/sprint2copy/quiz"  state={{ from: "JS", dataIndividual :JS, dataGeneral : general }}>
                <img src={js} alt="logo"></img>
                </Link>
              </div>
            </div>
            <p>JS</p>
          </div>
          <div className="item">
            <div
              className="fill"
              role="progressbar"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ "--value": dataGame.individuales.UX.porcentaje }}
            >
              <div className="progressRound">
              <Link to="/sprint2copy/quiz"  state={{ from: "UX", dataIndividual :UX, dataGeneral : general }}>
                <img src={ux} alt="logo"></img>
                </Link>
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
