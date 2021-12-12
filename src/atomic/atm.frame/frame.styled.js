import styled from 'styled-components';
import { Color, Radius, Spacing } from '../../components/constants';

const frameType = {
  primary: Color.Primary + '34',
  secondary: Color.Gray100,
};

export const FrameStyled = styled.div`
  width: 100%;

  padding: ${Spacing.Medium};

  background-color: ${props => frameType[props.type] || frameType.secondary};
  border-radius: ${Radius.Medium};

  box-sizing: border-box;
`;
