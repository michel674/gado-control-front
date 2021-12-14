import styled from 'styled-components';
import {
  Color,
  FontFamily,
  FontSize,
  Spacing,
  Transition,
  Radius,
} from '../../components/constants';

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
    cursor: pointer;
    box-shadow: 0 -6px 6px -4px ${Color.Gray300};
    background-color: ${Color.Gray500};
  }
  cursor: default;
`;

export const PopUpItemStyled = styled.div`
  padding: ${Spacing.XNano};

  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  color: ${Color.Gray700};

  border-radius: ${Radius.Small};

  cursor: pointer;

  &:hover {
    background-color: ${Color.Gray100};
  }
`;

export const AvatarWrapperStyled = styled.div`
  position: relative;
`;

export const AvatarPopUpStyled = styled.div`
  position: absolute;
  top: calc(100%);
  right: calc(100% - 50px);
  padding: ${Spacing.Nano};
  background-color: ${Color.White};
  width: 200px;

  border-radius: ${Radius.Small};
`;
