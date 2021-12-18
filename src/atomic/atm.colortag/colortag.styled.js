import styled from 'styled-components';
import { Radius, FontFamily, FontSize } from '../../components/constants';

export const ColorTagStyled = styled.div`
  height: 0%;
  width: 100%;
  padding-bottom: 100%;
  border-radius: ${Radius.Medium};
  background: ${props => props.color};
`;

export const ColorTagLabel = styled.label`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  display: flex;
  justify-content: center;
`;

export const ColorTagSpacing = styled.div`
  height: 4px;
`;
