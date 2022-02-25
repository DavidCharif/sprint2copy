import styled from "styled-components";
import { _button_button } from "./style";

export const BotonValidar = styled.div`
  background-color: #d4caf3;
  padding: 15px;
  border-radius: 12px;
  width: 80%;
  bottom: 0px;

  font: ${_button_button};
  color: white;
  cursor: pointer;
  margin-bottom: 15px;
  @media (min-width: 700px) {
    width: 700px;
    padding: 30px;
  }
`;
