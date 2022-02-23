import styled from "styled-components";

const _white = "#fffffe";
const _black = "#16161a";
const _primary = "#7f5af0";
// const _secondary = "#a786df";
// const _tertiary = "#72757e";
const _green = "#2cb67d";
const _lightgreen = "#ACFFCF";
// const _grey = "#94a1b2";
const _purple = "#6b47dc";
const _neutral = "#232e35";
const _red = "#ef4565";
const _lightred = "#F9CFD7";
// const _subtitle2 = "600 0.75rem/normal Nunito;";
const _headline_headline1 = "800 2rem/normal Nunito;";
const _headline_headline2 = "700 1.375rem/normal Nunito;";
const _subtitle_subtitle1 = "600 1.125rem/normal Nunito;";
const _body1_regular = "400 1rem/1.5rem Nunito;";
const _body1_bold = "700 1rem/1.5rem Nunito;";
// const _body2_regular = "400 0.875rem/normal Nunito;";
// const _body2_bold = "700 0.875rem/normal Nunito;";
const _button_button = "600 1rem/normal Nunito;";
// const _caption_caption = "400 0.6875rem/normal Nunito";

export const LoadingStyled = styled.div`
  background-color: ${_primary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Flex = styled.div`
  background-color: ${_black};
  height: 100vh;
  display: flex;
`;

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
export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${_black};
  height: 100vh;
  h3 {
    font: ${_subtitle_subtitle1};
    color: ${_white};
    text-align: center;
    margin: 12px 30px;
  }
  .opciones {
    width: 100%;
    margin-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    cursor: pointer;
    .row1 {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .row2 {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }
    .row3 {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }
    .item {
      display: flex;
      margin: 5px;
      flex-direction: column;
      align-items: center;
      min-width: 96px;
      min-height: 128px;
      img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        margin: 5px;
        @media (min-width: 650px) {
          height: 128px;
          width: 128px;
          border-radius: 104px;
        }
      }
      .progressRound {
        border-radius: 100%;
        height: 74px;
        width: 74px;
        margin: 10px;
        background-color: ${_black};
        @media (min-width: 650px) {
          height: 138px;
          width: 138px;
          border-radius: 100px;
        }
      }
      .fill {
        --fg: ${_green};
        --bg: #dddddd;
        --pgPercentage: var(--value);

        border-radius: 50%;

        background: radial-gradient(
            closest-side,
            white 0%,
            transparent 0 99.9%,
            white 0
          ),
          conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
      }
      p {
        color: ${_white};
        font: ${_body1_bold};
        margin-top: 7px;
        margin-bottom: 0px;
      }
    }
  }
`;
export const NavBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  position: sticky;
  background-color: ${_neutral};
  height: fit-content;

  .navBarIcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${_white};
    img {
      min-width: 24px;
      min-height: 24px;
      filter: invert(78%) sepia(94%) saturate(22%) hue-rotate(307deg)
        brightness(107%) contrast(106%);
      margin-top: 5px;
    }

    :hover {
      color: ${_green};
      filter: invert(52%) sepia(95%) saturate(331%) hue-rotate(103deg)
        brightness(95%) contrast(88%);
    }
    :active {
      color: ${_green};
      filter: invert(52%) sepia(95%) saturate(331%) hue-rotate(103deg)
        brightness(95%) contrast(88%);
    }
    margin: 5px 1px 0px 0px;
  }
`;
export const EstadisticasStyled = styled.div`
  background-color: ${_black};
  height: 100vh;
  display: flex;
  color: ${_white};
  flex-direction: column;
  h3 {
    font: ${_headline_headline2};

    margin-left: 15px;
  }
  h4 {
    font: ${_body1_regular};
    margin-left: 15px;
  }
  .bloque {
    display: flex;
    flex-direction: row;
    border: 1px solid white;
    border-radius: 8px;
    min-width: 50%;
    margin: 15px;

    font: ${_body1_bold};
    align-items: center;
    justify-content: space-around;
    img {
      width: 24px;
      height: 24px;
    }
    .correctas {
      color: ${_green};
    }
    .incorrectas {
      color: ${_red};
    }
  }
`;
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
export const QuizStyled = styled.div`
  background-color: ${_black};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  min-height: 700px;
  width: 100%;
  .selected {
    border: 2px solid ${_green};
  }

  .respuestas {
    display: flex;
    flex-direction: column;
    align-items: center;
    .wrong {
      border: 2px solid ${_red};
    }
  }

  .barraDeVida {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    #myProgress {
      position: relative;
      width: 75%;
      height: 12px;
      background-color: ${_white};

      border-radius: 20px;
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 5px;
      margin-left: 5px;
    }
    p {
      font: ${_body1_bold};
      color: white;
    }
    #myBar {
      position: absolute;
      width: var(--fill);
      height: 100%;
      background-color: ${_green};
      border-radius: 20px;
    }
  }
  .pregunta {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    p {
      font: ${_headline_headline2};
      width: 70%;
      color: ${_white};
    }
    img {
      width: 75px;
      height: 160px;
    }
    @media (min-width: 700px) {
      p {
        font-size: 40px;
        margin: 0%;
      }
    }
  }
  .boton {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
    @media (min-width: 700px) {
      margin-top: 155px;
    }
  }
  .isSelected {
    background-color: ${_purple};
  }
`;
export const BotonRespuestas = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px;
  min-width: 328px;
  background-color: ${_neutral};
  margin: 5px;
  border: 2px solid ${_white};
  border-radius: 9px;

  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    margin-right: 30px;
  }
  p {
    font: ${_body1_regular};
    color: ${_white};
    margin-left: 30px;
  }

  @media (min-width: 700px) {
    width: 700px;

    p {
      font-size: 30px;
    }
  }
`;
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
export const RespuestaIncorrectaStyled = styled.div`
  display: flex;
  bottom: 0;
  position: fixed;
  color: ${_black};
  background-color: ${_lightred};
  width: 100%;
  height: 154px;
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
