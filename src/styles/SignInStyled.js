import styled from "styled-components";
import { _black, _white, _headline_headline2, _red, _green, _lightred, _lightgreen } from "./style";

export const SignInStyled = styled.div`
  background-color: ${_black};
  height: 100vh;
  display: flex;
  color: ${_white};
  flex-direction: column;
  justify-content: center;
    align-items: center;
  h3 {
    font: ${_headline_headline2};

    margin-left: 15px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inputText {
    margin: auto;
    min-width: 350px;
    height: 40px;
    border-radius: 8px;
    box-sizing: border-box;
    padding-left: 10px;
    margin-top: 15px;
    border: 2px solid none;
  }
  .invalid{
    border: 2px solid ${_red};
    background-color: ${_lightred};
  }
  .valid{
    border: 2px solid ${_green};
    background-color: ${_lightgreen};
  }
  button{
    min-width: 350px;
    padding: 10px 50px;
    border-radius: 15px;
    background-color: ${_red};
    border: 1px solid ${_red};
  }
`;
