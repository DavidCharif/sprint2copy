import React, { useContext, useState } from "react";
import { Flex, LoginStyled } from "../../styles/style";
import logoPurple from "../../guideApp/images/logoContainerPurple.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link,  useNavigate } from "react-router-dom";
import validator from "validator";
import useFetch from "react-fetch-hook";
import { url } from "../../helpers/url";
import { UserContext } from "../../hooks/UserContext";
import Loading from "../Loading/Loading";

const Login = () => {
  const { data, isLoading } = useFetch(url);
  const { user, setUser } = useContext(UserContext);
  const [correo, setCorreo] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  ;
 console.log(isUser, 'isUser');
 
if(isLoading){
  return <Loading/>
}
  const handleChange = ({ target }) => {
    const emailValue = target.value;
    const isValid = validarEmail(emailValue);
    if (isValid) {
      setCorreo((c) => (c = emailValue));

      UserEmailExist(emailValue);
    } else {
      setCorreo((c) => (c = emailValue));
      console.log("No valido");
    }
  };
  const handleChangePass = ({ target }) => {
    const passValue = target.value;

    setPassword((c) => (c = passValue));
    validatePassword(passValue)
  };
  const validatePassword = (value) => {
    if(user.user.Password === value){
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
        placeholder="Ingrese su contraseña"
      ></input>
    </>
  );

  const UserEmailExist = (email) => {
    console.log("Entramos a validar");

    // if(data.Correo)
    for (let i = 0; i < data.length; i++) {
      if (data[i].user.Correo === email) {
        console.log("Usuario existe");
       
        setUser({ ...data[i] });
        console.log(user, 'line 90');
        setIsUser(true)
        break;
      }
    }
  };
  const validarEmail = (email) => validator.isEmail(email);

  return (
    <Flex>
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
    </Flex>
  );
};

export default Login;
