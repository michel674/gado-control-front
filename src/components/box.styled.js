import styled from "styled-components";
import { Color } from './constants';
import Matriz from '../assets/images/Matriz.png'

export const BoxStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  
  background-color: ${Color.Gray200};
`;

export const Spacing = styled.div`
  padding: 10px;
`;

export const HeaderSpacing = styled.div`
  padding: 40px;
`;

export const GadoBoxStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:space-evenly;
  background-color: ${Color.Gray200};
  
  & > div {
    height: 18px;
    width: 28px;
    margin-left: 20px;
    margin-right: 20px;
    background-image: url(${Matriz});
  }

  & > p {
    flex-grow:1;
    margin-right: 20px;
  }

  & > h1 {
    margin-top:0;
    margin-bottom:10px;
    flex-grow:1;
    display:flex;
    justify-content:center;
  }
`;

export const GraphBoxStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin-top:24px;
  display:flex;
  flex-direction:column;
  justiy-content:center;
  background-color: ${Color.Gray200};

  & > div {
    margin:24px;
    margin-top:0;
    Width:90%;
    padding-bottom:60%;
    background-color: Red;
  }

  & > h2 {
    justify-content:center;
    margin:24px;
  }
`;