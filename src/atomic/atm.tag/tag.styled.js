import styled from 'styled-components';
import {
  Color,
  FontFamily,
  FontSize,
  Radius,
  Spacing,
} from '../../components/constants';

const tagColor = {
  primary: Color.Primary,
  red: 'Red',
  yellow: 'yellow',
  green: 'green',
  blue: 'blue',
};

export const TagStyled = styled.div`
  padding: ${Spacing.XNano} ${Spacing.Nano};
  background-color: ${props => tagColor[props.color] || tagColor.primary};
  border-radius: ${Radius.Medium};
  cursor: default;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  color: ${Color.White};

  height: fit-content;

  box-sizing: border-box;

  ${props =>
    props.cattleTag &&
    `
    background-color: ${props.cattleTag};
  `}
`;
