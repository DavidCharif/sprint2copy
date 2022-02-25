import styled from "styled-components";
import { _black, _lightgreen, _green, _button_button, _body1_bold } from "./style";

export const RespuestaCorrectaStyled = styled.div`
  display: flex;
  bottom: 0;
  position: fixed;
  color: ${_black};
  background-color: ${_lightgreen};
  width: 100%;
  height: 130px;
  flex-direction: column;
  .boton {
    cursor: pointer;
    background-color: ${_green};

    border-radius: 12px;
    width: 80%;
    height: 48px;
    font: ${_button_button};
    color: white;
    margin: auto;
  }
  h2 {
    font: ${_body1_bold};
    margin-left: 15px;
  }
`;
