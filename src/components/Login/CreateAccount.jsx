import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fileUpload } from "../../helpers/fileUpload";
import { url } from "../../helpers/url";

import { SignInStyled } from "../../styles/style";
export const dataPre = {
  individuales: {
    HTML: {
      tiempo: 0,
      correctAwswers: 0,
      incorrectAnswers: 0,
      porcentaje: 0,
    },
    CSS: {
      tiempo: 0,
      correctAwswers: 0,
      incorrectAnswers: 0,
      porcentaje: 0,
    },
    FIGMA: {
      tiempo: 0,
      correctAwswers: 0,
      incorrectAnswers: 0,
      porcentaje: 0,
    },
    JS: {
      tiempo: 0,
      correctAwswers: 0,
      incorrectAnswers: 0,
      porcentaje: 0,
    },
    UX: {
      tiempo: 0,
      correctAwswers: 0,
      incorrectAnswers: 0,
      porcentaje: 0,
    },
  },
  general: {
    totalCorrectas: 0,
    totalIncorrectas: 0,
    tiempoDedicado: 0,
    preguntasContestadas: 0,
  }}
const CreateAccount = () => {
  const navigate = useNavigate();
  const dataPre = {
    individuales: {
      HTML: {
        tiempo: 0,
        correctAwswers: 0,
        incorrectAnswers: 0,
        porcentaje: 0,
      },
      CSS: {
        tiempo: 0,
        correctAwswers: 0,
        incorrectAnswers: 0,
        porcentaje: 0,
      },
      FIGMA: {
        tiempo: 0,
        correctAwswers: 0,
        incorrectAnswers: 0,
        porcentaje: 0,
      },
      JS: {
        tiempo: 0,
        correctAwswers: 0,
        incorrectAnswers: 0,
        porcentaje: 0,
      },
      UX: {
        tiempo: 0,
        correctAwswers: 0,
        incorrectAnswers: 0,
        porcentaje: 0,
      },
    },
    general: {
      totalCorrectas: 0,
      totalIncorrectas: 0,
      tiempoDedicado: 0,
      preguntasContestadas: 0,
    },
  };
  const initialState = {
    "user":{Nombre: "",
    Apellido: "",
    Correo: "",
    Password: "",
    urlImage: ""}
  ,
    data: dataPre,
  };
  const [values, setValue] = useState(initialState);

  const handleInputChange = ({ target }) => {
    console.log(target.value);
    setValue({
      ...values,
      [target.name]: target.value,
    });
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
        values.urlImage = res;
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <SignInStyled>
      <h3>Crea tu cuenta</h3>
      <div>
        <label>Nombre</label>
        <input
          className="inputText"
          name="Nombre"
          value={values.Nombre}
          onChange={handleInputChange}
          type="text"
        />
        <label>Apellido</label>
        <input
          className="inputText"
          name="Apellido"
          value={values.Apellido}
          onChange={handleInputChange}
          type="text"
        />
        <label>Correo</label>
        <input
          className="inputText"
          name="Correo"
          value={values.Correo}
          onChange={handleInputChange}
          type="text"
        />
        <label>Contraseña</label>
        <input
          className="inputText"
          name="Password"
          value={values.Password}
          onChange={handleInputChange}
          type="text"
        />
        <label> Confirma Contraseña</label>
        <input
          className="inputText"
          name="Password"
          value={values.Nombre}
          onChange={handleInputChange}
          type="text"
        />
        <label>Imagen</label>
        <input
          id="botonImagen"
          type="file"
          name="imagen"
          value={values.urlImage}
          onChange={handleFileChange}
        />
      </div>
      <button type="button" onClick={postData}>
        Enviar
      </button>
    </SignInStyled>
  );
};

export default CreateAccount;
