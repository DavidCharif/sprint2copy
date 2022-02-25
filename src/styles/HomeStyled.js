import styled from "styled-components";
import { _black, _subtitle_subtitle1, _white, _green, _body1_bold } from "./style";

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
