import styled from "styled-components";
import { _black, _white, _headline_headline2 } from "./style";

export const SignInStyled = styled.div`
  background-color: ${_black};
  height: 100vh;
  display: flex;
  color: ${_white};
  flex-direction: column;

  h3 {
    font: ${_headline_headline2};

    margin-left: 15px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  .inputText {
    margin: auto;
    width: 90%;
    height: 40px;
    border-radius: 8px;
    box-sizing: border-box;
    padding-left: 10px;
    margin-top: 15px;
  }
`;
