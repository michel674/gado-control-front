import styled from 'styled-components';
import {
  Color,
  FontFamily,
  FontSize,
  Radius,
  Spacing,
} from '../../components/constants';

export const TagStyled = styled.div`
  padding: ${Spacing.XNano} ${Spacing.Nano};
  background-color: ${Color.Primary};
  border-radius: ${Radius.Medium};
  cursor: default;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  color: ${Color.White};

  height: fit-content;

  box-sizing: border-box;
`;
