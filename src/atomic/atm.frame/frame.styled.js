import styled from 'styled-components';
import { Color, Radius, Spacing, Transition } from '../../components/constants';

const frameColor = {
  primary: Color.Primary + '34',
  gray100: Color.Gray100,
  gray700: Color.Gray700,
  white: Color.White,
};

const frameCursor = {
  pointer: 'pointer',
  text: 'text',
  default: 'default',
};

export const FrameStyled = styled.div`
  width: 100%;

  padding: ${props => Spacing[props.paddingSize] || Spacing.Medium};

  background-color: ${props => frameColor[props.type] || frameColor.gray100};
  cursor: ${props => frameCursor[props.cursor] || frameCursor.default};
  border-radius: ${Radius.Medium};

  box-sizing: border-box;
  transition-duration: ${Transition.Normal};
  ${props => (props.toggle ? '&:hover { opacity: 0.7; }' : '')}
  ${props =>
    props.toggle ? '&:hover {box-shadow: 0 6px 6px -4px Black;  }' : ''}
    ${props =>
    props.toggle ? '&:hover { border: 2px solid transparent;}' : ''}
  transition-duration: ${Transition.Fast};
  ${props => (props.toggle ? '&:active { opacity: 0.9; }' : '')}
`;
