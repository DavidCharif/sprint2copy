import styled from "styled-components";
import { _headline_headline1, _white, _red, _button_button, _green } from "./style";


export const LoginStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  h1 {
    font: ${_headline_headline1};
    color: ${_white};
  }
  img {
    width: 80px;
    height: 80px;
  }
  .button {
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${_red};
    width: 90%;
    border-radius: 8px;
    text-align: center;

    p {
      font: ${_button_button};
      color: white;
    }
    .iconGoogleLogin {
      height: 2em;
      margin-right: 5px;
      filter: invert(78%) sepia(94%) saturate(22%) hue-rotate(307deg)
        brightness(107%) contrast(106%);
    }
  }
  .correoElectronico {
    max-width: 600px;
    margin-top: 20px;
    width: 90%;
    border-top: 1px solid white;
    color: white;
    p {
      margin-left: 10px;
    }
  }
  .inputText {
    width: 90%;
    height: 40px;
    border-radius: 8px;
    box-sizing: border-box;
    padding-left: 10px;
    max-width: 600px;
  }
  .forgottenPassword {
    margin-top: 25px;
    a {
      color: ${_green};
    }
  }
  .createAccount {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${_white};
    margin-top: 15px;
    a {
      color: ${_green};
      text-decoration: none;
      margin-left: 5px;
    }
  }
`;
