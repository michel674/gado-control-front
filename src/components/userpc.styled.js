import styled from 'styled-components';
import { Color, FontFamily, FontSize, Transition } from './constants';

export const UserAvatarStyled = styled.div`
  height: 50px; //Height = Width
  width: 50px;

  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};

  color: ${Color.Gray200};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Color.Gray700};

  border-radius: 50%;
  border: 4px solid ${Color.Gray100};

  transition-duration: ${Transition.Normal};
  &:hover {
    box-shadow: 0 -6px 6px -4px ${Color.Gray300};
    background-color: ${Color.Gray500};
  }
  cursor: default;
`;
