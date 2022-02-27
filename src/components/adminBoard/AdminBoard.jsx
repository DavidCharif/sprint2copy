import React, { useState } from "react";
import { AdminBoardStyled } from "../../styles/AdminBoardStyled";
import useFetch from "react-fetch-hook";
import { url } from "../../helpers/url";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
const clockIcon =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632535/sprint2/design/icons/clock_rca2wr.png";
const messageIcon =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632536/sprint2/design/icons/message_pbense.png";

const AdminBoard = () => {
  const { data, isLoading } = useFetch(url);
  const [currentUser, setCurrentUser] = useState({
    dataUser: "",
    infoUser: "",
  });
  const [active, setActive] = useState('General');

  if (isLoading) {
    return <Loading />;
  }
  const handleUser = (id) => {
    let dataUser = data[id].dataDailyBits;
    let infoUser = data[id].user;
    setCurrentUser({
      dataUser: dataUser,
      infoUser: infoUser,
    });
   console.log(currentUser.dataUser);
  };

  const Stats = () => {
    return (
      <>
        <div className="bloque">
          <img src={clockIcon} alt="clock" />
          <p>Tiempo de estudio (minutos)</p>
          <p>{currentUser.dataUser.general.tiempoDedicado.minutosGenerales}</p>
        </div>
        <div className="bloque">
          <img src={messageIcon} alt="Message" />
          <p>Respuestas contestadas</p>
          <p>{currentUser.dataUser.general.preguntasContestadas}</p>
        </div>
        <div className="bloque">
          <img src={messageIcon} alt="Message" />
          <p>Respuestas correctas</p>
          <p className="correctas">
            {currentUser.dataUser.general.totalCorrectas}
          </p>
        </div>
        <div className="bloque">
          <img src={messageIcon} alt="Message" />
          <p>Respuestas incorrectas</p>
          <p className="incorrectas">
            {currentUser.dataUser.general.totalIncorrectas}
          </p>
        </div>
      </>
    );
  };
  const StatsIndividual = () => {
    return (
      <>
        <div className="bloque">
          <img src={messageIcon} alt="Message" />
          <p>Respuestas correctas</p>
          <p className="correctas">
            {currentUser.dataUser.individuales[active].correctAnswers}
          </p>
        </div>
        <div className="bloque">
          <img src={messageIcon} alt="Message" />
          <p>Respuestas incorrectas</p>
          <p className="incorrectas">
          {currentUser.dataUser.individuales[active].incorrectAnswers}
          </p>
        </div>
        <div className="bloque">
          <img src={messageIcon} alt="Message" />
          <p>Porcentaje</p>
          <p className="incorrectas">
          {currentUser.dataUser.individuales[active].porcentaje}
          </p>
        </div>
        <div className="bloque">
        <img src={clockIcon} alt="clock" />
          <p>Tiempo dedicado</p>
          <div>
            <div>
              <p>Segundos </p>
              <p> {currentUser.dataUser.individuales[active].tiempo.segundos}</p>
            </div>
            <div>
              <p>Minutos </p>
              <p> {currentUser.dataUser.individuales[active].tiempo.minutos}</p>
            </div>
          </div>
          
          
        </div>
      </>
    );
  };
  const Botones = () => {
    console.log(currentUser);
    const { individuales } = currentUser.dataUser;
    let lista = ["General"];
    for (const [key] of Object.entries(individuales)) lista.push(key);
    return lista.map((each, index) => {
      return (
        <button
          key={index}
          name={each}
          className={each === active ? 'active' : ''}
          type="button"
          onClick={handleClickUser}
        >
          {each}
        </button>
      );
    });
  };
  const handleClickUser = (e) => {
    let name = e.target.name;
     setActive(name);
     let botones = document.getElementsByClassName('boton')
     
     for (let i = 0; i < botones.length; i++) {
      if (botones[i].classList.contains("active", "notActive")) {
        botones[i].classList.remove("active", "notActive" );       
      }
    }
      e.target.classList += ' active'
     return console.log(active);
  };

  return (
    <>
    <AdminBoardStyled>
      <h3>AdminBoard</h3>
      <h4>Usuarios</h4>
      <div className="bloqueContenedor">
        <div className="perfilContainer">
          {data.map((user, index) => (
            <div
              className="profiles"
              key={index}
              onClick={() => handleUser(index)}
            >
              <img src={user.user.urlImage} alt="profilePic"></img>
              <p className="nombre">
                {user.user.Nombre} {user.user.Apellido}
              </p>
              <p className="correo">{user.user.Correo}</p>
            </div>
          ))}
        </div>

        
          <div className="stats">
            <h3>
              {Object.keys(currentUser.dataUser).length !== 0 ? currentUser.infoUser.Nombre +
                " " +
                currentUser.infoUser.Apellido: "Seleccione un usuario para ver detalle"}
            </h3>
            <div className="botones">
              {Object.keys(currentUser.dataUser).length !== 0 && <Botones />}
            </div>
            {Object.keys(currentUser.dataUser).length !== 0 && (    
            <div className="generalStats">
              <h3>Data {active}</h3>
              {active === "General" ? <Stats /> : <StatsIndividual/>}
            </div>
          
        )}
        </div>
      </div>
      <NavBar/>
    </AdminBoardStyled>
    
  </>
  );
};

export default AdminBoard;
