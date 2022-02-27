import styled from "styled-components";
import {
  _black,
  _body1_bold,
  _body1_regular,
  _green,
  _lightgreen,
  _lightred,
  _red,
  _white,
} from "./style";

export const AdminBoardStyled = styled.div`
  background-color: ${_black};
  width: 100%;
  height: 100vh;

  display: flex;
  color: ${_white};
  flex-direction: column;

  .botones {
    display: flex;
    justify-content: center;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    button {
      padding: 10px 20px;
      border-radius: 10px;
      background-color: ${_lightred};
      margin: 5px;
      border: 1px solid ${_red};
      cursor: pointer;

      font: ${_body1_bold};

      &:hover {
        background-color: ${_red};
      }
    }
    .active {
      background-color: ${_lightgreen};
      border: 1px solid ${_green};
      &:hover {
        background-color: ${_green};
      }
    }
  }
  .stats {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .generalStats {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    .bloque {
      border: 1px solid yellow;
      display: flex;
      align-items: center;
      padding: 5px;
      width: fit-content;
      justify-content: space-around;
      margin: 5px;
      min-width: 250px;
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      p {
        margin-right: 10px;
      }
    }
  }
  .perfilContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .profiles {
      align-items: center;
      border: 1px solid yellow;
      
      display: flex;
      margin: 25px;
      flex-direction: column;
      min-width: 80px;
      min-height: 120px;

      p {
        font: ${_body1_bold};
        padding: 0px;
        margin: 0px;
      }
      cursor: pointer;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
      }
    }
  }
`;
