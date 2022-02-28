import styled from "styled-components";
import { _neutral, _white, _body1_regular, _black } from "./style";

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
 
    font: ${_body1_regular};
    color: ${_white};
    padding: 5px;
  

  @media (min-width: 700px) {
    width: 700px;

    
      font-size: 30px;
    
  }
`;
export const BotonRespuestas2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${_neutral};
  flex-wrap: wrap;
  border: 2px solid ${_white};
  border-radius: 9px;
  padding: 1px 10px;
  margin: 5px;
  cursor: pointer;
 
 
    font: ${_body1_regular};
    color: ${_white};
    margin: 0%;
    

  @media (min-width: 700px) {
    width: 700px;

    
      font-size: 30px;
    
  }
  &.onList{
    background-color: grey;
   
      font-size: 30px;
      color:grey;
   
  }
`;
export const BotonRespuestas3 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 150px;
  min-width: 104px;
  justify-content: center;
  background-color: ${_black};
  
  border: 2px solid ${_white};
  border-radius: 9px;
  
  
  cursor: pointer;
 
 
    font: ${_body1_regular};
    color: ${_white};
    margin: 0%;
    
  img {
    height: 120px;
    width: 120px;
  }
  @media (min-width: 700px) {
    width: 700px;

    
      font-size: 30px;
    
  }

`;
