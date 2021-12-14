import styled from 'styled-components';
import {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Color,
} from './constants';

export const Title = styled.title`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  font-size: ${FontSize.XLarge};

  line-height: ${LineHeight.Large};

  color: ${Color.Grey100};
`;

export const H1 = styled.h1`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
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

export const H4 = styled.h4`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.Small};

  color: ${Color.Gray400};
`;

export const H5 = styled.h5`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.XSmall};

  color: ${Color.Gray400};
`;

export const H5Green = styled.h5`
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.XSmall};
  cursor: pointer;
  color: ${Color.Primary};
`;
