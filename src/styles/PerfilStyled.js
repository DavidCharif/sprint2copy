import styled from "styled-components";
import {
  _black,
  _white,
  _headline_headline2,
  _body1_bold,
  _body1_regular,
  _red,
  _button_button,
  _headline_headline1,
} from "./style";

export const PerfilStyled = styled.div`
  background-color: ${_black};
  height: 100vh;
  display: flex;
  color: ${_white};
  flex-direction: column;
  h3 {
    font: ${_headline_headline2};

    margin-left: 15px;
  }
  .perfilContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    .nombre {
      font: ${_body1_bold};
      margin-bottom: 0px;
    }
    .correo {
      margin-top: 2px;
      font: ${_body1_regular};
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }}
    .cerrarSesion {
      color: ${_red};
      background-color: ${_black};
      font: ${_button_button};
      border: 0;
      margin-top: 20px;
    }
  @media (min-width : 700px  ) {
 
    h3 {
    font: ${_headline_headline2};

    margin-left: 15px;
  }
  .perfilContainer {
    img {
      width: 360px;
      height: 360px;
      border-radius: 50%;
    }
    .nombre {
      font: ${_headline_headline1};
      margin-bottom: 0px;
    }
    .correo {
      margin-top: 2px;
      font: ${_body1_bold};
    }
  }
  .cerrarSesion {
      color: ${_black};
      background-color: ${_red};
      font: ${_button_button};
      border: 1px solid ${_black};
      margin-top: 20px;
      padding: 20px 50px;
      border-radius:20px ;
    }
  }
`;
