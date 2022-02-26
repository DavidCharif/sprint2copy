import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fileUpload } from "../../helpers/fileUpload";
import { url } from "../../helpers/url";
import { SignInStyled } from "../../styles/SignInStyled";
import validator from "validator";

export const dataPre = {
  individuales: {
    HTML: {
      tiempo: {
        segundos: 0,
        minutos: 0,
      },
      correctAnswers: 0,
      incorrectAnswers: 0,
      porcentaje: 0,
    },
    CSS: {
      tiempo: {
        segundos: 0,
        minutos: 0,
      },
      correctAnswers: 0,
      incorrectAnswers: 0,
      porcentaje: 0,
    },
    FIGMA: {
      tiempo: {
        segundos: 0,
        minutos: 0,
      },
      correctAnswers: 0,
      incorrectAnswers: 0,
      porcentaje: 0,
    },
    JS: {
      tiempo: {
        segundos: 0,
        minutos: 0,
      },
      correctAnswers: 0,
      incorrectAnswers: 0,
      porcentaje: 0,
    },
    UX: {
      tiempo: {
        segundos: 0,
        minutos: 0,
      },
      correctAnswers: 0,
      incorrectAnswers: 0,
      porcentaje: 0,
    },
  },
  general: {
    totalCorrectas: 0,
    totalIncorrectas: 0,
    tiempoDedicado: {
      segundos: 0,
      minutos: 0,
      horas: 0,
    },
    preguntasContestadas: 0,
  },
};
const CreateAccount = () => {
  const navigate = useNavigate();
  
  const initialState = {
    user: { Nombre: "", Apellido: "", Correo: "", Password: "", urlImage: "" },
    dataDailyBits: dataPre,
  };
  const [values, setValue] = useState(initialState);

  const handleInputChange = (e) => {
     switch(e.target.name){
      case "Nombre":
      case "Apellido":
        if(e.target.value.length < 3){
         e.target.classList += " invalid"
         e.target.classList.remove("valid")
         return console.log("Nombre no valido");
        } else {
          e.target.classList.remove("invalid")
          e.target.classList += " valid"
        }
        break
      case "Correo": 
        if(!validator.isEmail(e.target.value)){
          e.target.classList += " invalid"
          e.target.classList.remove("valid")
          return console.log("Correo no valido");
         } else {
           e.target.classList.remove("invalid")
           e.target.classList += " valid"
        }
        break
      case "pass1":
        break
      default:
        console.log("Accion no permitida");
    }
    // setValue({
    //   ...values,
    //   [target.name]: target.value,
    // });
    setValue(prev => ({
      ...prev,user : {
          ...prev.user,[e.target.name]: e.target.value.toLowerCase()
        }
      
    }));
  };

  const postData = () => {
    axios
      .post(url, values)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    resetForm();
    navigate("/sprint2copy/");
  };
  const resetForm = () => {
    setValue(initialState);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((res) => {
        setValue(prev => ({
          ...prev,user : {
            ...prev.user,urlImage: res
          }
        }))
        
      })
      .catch((error) => console.log(error.message));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <SignInStyled>
      <h3>Crea tu cuenta</h3>
     
        <form onSubmit={handleSubmit}>
        <div>
        <div>
        <label>Nombre</label>
        <input
          className="inputText"
          name="Nombre"
          value={values.Nombre}
          onChange={handleInputChange}
          type="text"
        />
        </div>
        <div>
        <label>Apellido</label>
        <input
          className="inputText"
          name="Apellido"
          value={values.Apellido}
          onChange={handleInputChange}
          type="text"
        />
        </div>
        <div>
        <label>Correo</label>
        <input
          className="inputText"
          name="Correo"
          value={values.Correo}
          onChange={handleInputChange}
          type="email"
        />
        </div>
        <div>
        <label>Contraseña</label>
        <input
          className="inputText"
          name="Password"
          value={values.Password}
          onChange={handleInputChange}
          type="password"
        />
        </div>
     
        <div>
        <label>Imagen</label>
        <input
          id="botonImagen"
          type="file"
          name="imagen"
          value={values.urlImage}
          onChange={handleFileChange}
        />
        </div>
      <br />
      <button type="button" onClick={postData}>
        Enviar
      </button>
      </div>
      </form>
      
    </SignInStyled>
  );
};

export default CreateAccount;
