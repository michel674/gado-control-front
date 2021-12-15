import styledComponents from 'styled-components';
import { Color } from './constants';

const fontSize = {
  XSmall: '1rem',
  Small: '1.2rem',
  Medium: '1.6rem',
  Large: '2rem',
};

export const IconStyled = styledComponents.span`
  font-size: ${props => fontSize[props.size] || fontSize.small};

  color: ${Color.Primary};

`;
