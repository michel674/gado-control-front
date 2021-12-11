import styled from "styled-components";
import { Color,Transition } from './constants';

export const Button = styled.button`
  background-color: ${Color.Primary};
;
  color: white;

  padding: 5px 10px;

  border: none;
  border-radius: 3px;

  transition-duration: ${Transition.Normal};
  &:hover{
  box-shadow: 0 6px 6px -4px ${Color.Gray300};}

  cursor: pointer;
;

`
