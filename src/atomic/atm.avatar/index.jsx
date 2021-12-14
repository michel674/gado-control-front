import React, { useState } from 'react';
import { Separator } from '../atm.separator/separator.styled';
import {
  UserAvatarStyled,
  AvatarWrapperStyled,
  AvatarPopUpStyled,
  PopUpItemStyled,
} from './avatar.styled';

export const Avatar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AvatarWrapperStyled>
      <UserAvatarStyled onClick={() => setOpen(!open)}>TB</UserAvatarStyled>
      {open && (
        <>
          <AvatarPopUpStyled>
            <PopUpItemStyled>Editar perfil</PopUpItemStyled>
            <PopUpItemStyled>Sair</PopUpItemStyled>
          </AvatarPopUpStyled>
        </>
      )}
    </AvatarWrapperStyled>
  );
};
