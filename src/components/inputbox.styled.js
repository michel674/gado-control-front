import styled from "styled-components";
import { Color,Transition } from './constants';

export const InputBox = styled.input`
  
  background-color: ${Color.Gray200};
  color :black;
  padding: 5px 10px;

  border: none;
  border-radius: 3px;

  transition-duration: ${Transition.Normal};

  &:hover{
  background-color: ${Color.Gray300};}

  &:focus {
        outline: none;
        box-shadow: 0px 0px 2px ${Color.Gray700};
    }

  cursor: text;
;

`