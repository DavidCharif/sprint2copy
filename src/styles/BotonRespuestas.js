import styled from "styled-components";
import { _neutral, _white, _body1_regular } from "./style";

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
