import styled from "styled-components";
import { _black, _white, _headline_headline2, _body1_bold, _body1_regular, _red, _button_button } from "./style";

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
    }
    .cerrarSesion {
      color: ${_red};
      background-color: ${_black};
      font: ${_button_button};
      border: 0;
      margin-top: 20px;
    }
  }
`;
