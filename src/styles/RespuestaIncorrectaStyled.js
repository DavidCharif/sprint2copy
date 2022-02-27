import styled from "styled-components";
import { _black, _lightred, _red, _button_button, _body1_bold, _body1_regular } from "./style";

export const RespuestaIncorrectaStyled = styled.div`
  display: flex;
  bottom: 0;
  position: fixed;
  color: ${_black};
  background-color: ${_lightred};
  width: 100%;
  
  flex-direction: column;
  .boton {
    cursor: pointer;
    background-color: ${_red};
    border-radius: 12px;
    width: 80%;
    height: 48px;
    font: ${_button_button};
    color: white;
    margin: auto;
    margin-bottom: 10px;
  }
  h2 {
    font: ${_body1_bold};
    margin-left: 15px;
    margin-bottom: 5px;
  }
  h3 {
    margin-top: 0%;
    font: ${_body1_regular};
    margin-left: 15px;
  }
`;
