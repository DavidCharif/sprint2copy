import React, { useContext, useState } from "react";
import { LoginStyled } from "../../styles/style";
import logoPurple from "../../guideApp/images/logoContainerPurple.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link,  useNavigate } from "react-router-dom";
import validator from "validator";
import useFetch from "react-fetch-hook";
import { url } from "../../helpers/url";
import { UserContext } from "../../hooks/UserContext";

const Login = () => {
  const { data } = useFetch(url);
  const { user, setUser } = useContext(UserContext);
  const [correo, setCorreo] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  
 console.log(isUser, 'coreo');
 console.log(user.dataUser.Password, 'coreo');

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
  const handleChangePass = ({ target }) => {
    const passValue = target.value;

    setPassword((c) => (c = passValue));
    validatePassword(passValue)
  };
  const validatePassword = (value) => {
    if(user.dataUser.Password === value){
      setUser(prev => {
        return {...prev , loggedIn : true}})
      navigate('/sprint2copy/home')
    } else {
      console.log("Contraseña incorrecta")
    }
  }
  
  const AskEmail = (
    <>
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
    </>
  );

  const AskPassword = (
    <>
      <div className="correoElectronico">
        <p>Contraseña</p>
      </div>
      <input
        className="inputText"
        value={password}
        onChange={handleChangePass}
        type="password"
        placeholder="Ingrese su contrasaeña"
      ></input>
    </>
  );

  const UserEmailExist = (email) => {
    console.log("Entramos a validar");

    // if(data.Correo)
    for (let i = 0; i < data.length; i++) {
      if (data[i].Correo === email) {
        console.log("Usuario existe");
       
        setUser({ dataUser: data[i] });
        setIsUser(true)
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

      {isUser ?  AskPassword : AskEmail}
      <div className="forgottenPassword">
        <Link to={"/sprint2copy/"} >¿Se te olvidó tu contraseña?</Link>
      </div>
      <div className="createAccount">
        <p>¿Aún no tienes cuenta?</p>
        <Link to={"/sprint2copy/signin"}> Inscribirse</Link>
      </div>
    </LoginStyled>
  );
};

export default Login;
