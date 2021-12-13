import styled from 'styled-components';
import { Color } from './constants';

const BackgroundColor = {
  primary: Color.Primary,
  default: Color.White,
};

export const Background = styled.div`
  background-color: ${props =>
    BackgroundColor[props.color] || BackgroundColor.default};
  width: 100hv;
  height: 100px;
`;
