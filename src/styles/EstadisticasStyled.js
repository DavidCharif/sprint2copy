import styled from "styled-components";
import { _black, _white, _headline_headline2, _body1_regular, _body1_bold, _green, _red } from "./style";

export const EstadisticasStyled = styled.div`
  background-color: ${_black};
 width: 100%;
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
  .bloquePerfil{
   margin:0;
        min-width: 350px;
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
  @media (min-width : 700px  ) {
    display: flex;
    align-items: center;
      .bloquePerfil{
   margin:0;
        width: 600px;
      }
    }
`;
