import styled from 'styled-components';
import { Color, Transition } from './constants';

export const ButtonStyled = styled.button`
  background-color: ${Color.Primary};
  color: ${Color.White};

  padding: 0.8rem 2rem;

  border: none;
  border-radius: 3px;

  transition-duration: ${Transition.Normal};
  &:hover {
    box-shadow: 0 6px 6px -4px ${Color.Gray300};
    background-color: ${Color.PrimaryLight};
  }
  &:active {
    transition-duration: ${Transition.Fast};
    color: ${Color.Gray200};
    background-color: ${Color.PrimaryDark};
  }

  cursor: pointer; ;
`;

export const ButtonLoginStyled = styled.button`
  background-color: ${Color.Primary};
  color: ${Color.White};

  padding: 0.8rem 2rem;

  border: none;
  border-radius: 3px;

  transition-duration: ${Transition.Normal};
  &:hover {
    box-shadow: 0 6px 6px -4px ${Color.Gray300};
    background-color: ${Color.PrimaryLight};
  }
  &:active {
    transition-duration: ${Transition.Fast};
    color: ${Color.Gray200};
    background-color: ${Color.PrimaryDark};
  }

  cursor: pointer; ;
`;
