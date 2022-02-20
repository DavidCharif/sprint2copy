import React, { useContext, useState } from "react";
import { LoginStyled } from "../../styles/style";
import logoPurple from "../../guideApp/images/logoContainerPurple.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import validator from "validator";
import useFetch from "react-fetch-hook";
import { url } from "../../helpers/url";
import { UserContext } from "../../hooks/UserContext";

const Login = () => {
  const { data } = useFetch(url);
  const { user, setUser } = useContext(UserContext);
  const [correo, setCorreo] = useState("");
  const navigate = useNavigate();
  console.log(user.loggedIn);

  const handleChange = ({ target }) => {
    const emailValue = target.value;
    const isValid = validarEmail(emailValue);
    if (isValid) {
      setCorreo((c) => (c = emailValue));

      UserEmailExist(emailValue);
    } else {
      setCorreo((c) => (c = emailValue));
      console.log("NO valido");
    }
  };
  const UserEmailExist = (email) => {
    console.log("Entramos a validar");
    
    // if(data.Correo)
    for (let i = 0; i < data.length; i++) {
      if (data[i].Correo === email) {
        console.log("Usuario existe");

        setUser({ dataUser: data[i], loggedIn: true });
        navigate("/home")
        break;
      }
    }
   
  };
  const validarEmail = (email) => {
    if (validator.isEmail(email)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <LoginStyled>
      <img src={logoPurple} alt="logo"></img>
      <h1>Iniciar sesión</h1>
      <div className="button">
        {" "}
        <AiOutlineGoogle className="iconGoogleLogin" />{" "}
        <p> Continuar con Google</p>
      </div>
      <div className="correoElectronico">
        <p>Correo electrónico</p>
      </div>
      <input
        className="inputText"
        value={correo}
        onChange={handleChange}
        type="text"
        placeholder="Ingrese su correo electrónico"
      ></input>
      <div className="forgottenPassword">
        <a href={<Navigate to={"/"} />}>¿Se te olvidó tu contraseña?</a>
      </div>
      <div className="createAccount">
        <p>¿Aún no tienes cuenta?</p>
        <a href={<Navigate to={"/"} />}>Inscribirse</a>
      </div>
    </LoginStyled>
  );
};

export default Login;
