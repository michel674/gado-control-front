import styled from 'styled-components'
import { FontFamily, FontSize, FontWeight, LineHeight, Color } from './constants'

export const H1 = styled.h1`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.Large};

  line-height: ${LineHeight.Large};

  color: ${Color.Gray700};
`;

export const H2 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.Medium};

  line-height: ${LineHeight.Medium};

  color: ${Color.Gray700};
`;

export const H3 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.Small};

  line-height: ${LineHeight.Small};

  color: ${Color.Gray700};
`;

