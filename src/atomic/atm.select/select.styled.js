import styled from 'styled-components';
import { Color, FontSize, Radius, Spacing } from '../../components/constants';

export const LabelStyled = styled.label`
  font-size: ${FontSize.Small};
  padding: ${Spacing.XNano} ${Spacing.Nano};
  background-color: ${Color.Gray200};
  border-radius: ${Radius.Small};
  color: ${Color.Gray600};
  border: 0;
`;

export const SelectStyled = styled.select`
  appearance: none;
  font-size: ${FontSize.Small};
  padding: ${Spacing.XNano} ${Spacing.Nano};
  background-color: ${Color.Gray200};
  border-radius: ${Radius.Small};
  color: ${Color.Gray600};
  border: 0;

  outline: none;
`;
