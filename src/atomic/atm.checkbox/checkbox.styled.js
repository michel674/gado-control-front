import styled from 'styled-components';
import {
  Color,
  FontSize,
  FontFamily,
  FontWeight,
} from '../../components/constants';

export const CheckboxContainer = styled.div`
  width: 120px;
  height: 35px;
  padding-left: 5px;
  margin: 0px 4px;
  border-radius: 5px;

  background-color: ${props => (props.checked ? '#0f6a3f' : '#E4EEE9')};

  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;

export const Text = styled.label`
  color: ${props => (props.checked ? '#FFF' : '#555')};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XXSmall};
  font-weight: ${FontWeight.SemiBold};
`;

export const StyledCheckbox = styled.label`
  width: 23px;
  height: 23px;
  margin-right: 6px;
  border-radius: 50%;
  background: ${Color.Gray200};
  display: flex;
  justify-content: center;
  align-items: center;
  .IconStyled {
    display: ${props => (props.checked ? 'flex' : 'none')};
    filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg)
      brightness(105%) contrast(68%);
  }
`;

export const IconStyled = styled.div`
  display: ${props => (props.checked ? 'flex' : 'none')};
  color: ${Color.PrimaryDark};
  font-size: ${FontSize.Medium};
`;
