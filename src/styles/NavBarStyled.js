import styled from "styled-components";
import { _neutral, _white, _green } from "./style";

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
      width: 24px;
      height: 24px;
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
