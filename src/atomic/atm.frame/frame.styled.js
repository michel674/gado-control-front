import styled from 'styled-components';
import { Color, Radius, Spacing, Transition } from '../../components/constants';

const frameColor = {
  primary: Color.Primary + '34',
  secondary: Color.Error + '34',
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

  border: none;

  ${props =>
    props.clickable &&
    `
    cursor:pointer;
  &:hover {
      background-color:${frameColor.primary};

    }
    &:active { opacity: 0.9; }
  `}

  ${props => props.color && `background-color: ${props.color};`};

  transition-duration: ${Transition.Fast};
`;
