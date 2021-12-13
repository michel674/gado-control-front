import styled from 'styled-components';
import { Color, Radius, Spacing } from '../../components/constants';

const frameType = {
  primary: Color.Primary + '34',
  secondary: Color.Gray100,
};

const frameCursor = {
  pointer: 'pointer',
  text: 'text',
  default: 'default',
};

export const FrameStyled = styled.div`
  width: 100%;

  padding: ${props => Spacing[props.paddingSize] || Spacing.Medium};

  background-color: ${props => frameType[props.type] || frameType.secondary};
  cursor: ${props => frameCursor[props.cursor] || frameCursor.default};
  border-radius: ${Radius.Medium};

  box-sizing: border-box;
`;
