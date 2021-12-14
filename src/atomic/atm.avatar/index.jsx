import { Grid, Row, Col } from 'react-flexbox-grid';
import React, { useState } from 'react';
import { Hbox } from '../atm.box/hbox.styled';
import { Separator } from '../atm.separator/separator.styled';
import { H3, H5 } from '../../components/typography';
import {
  UserAvatarStyled,
  AvatarWrapperStyled,
  AvatarPopUpStyled,
  PopUpItemStyled,
  PopupBackground,
} from './avatar.styled';

export const Avatar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <>
          <PopupBackground onClick={() => setOpen(!open)} />
        </>
      )}
      <AvatarWrapperStyled>
        <UserAvatarStyled onClick={() => setOpen(!open)}>TB</UserAvatarStyled>
        {open && (
          <>
            <AvatarPopUpStyled>
              <Grid>
                <Hbox>
                  <Hbox.Item noGrow>
                    <UserAvatarStyled displayOnly>TB</UserAvatarStyled>
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item>
                    <Hbox>
                      <Hbox.Item vAlign="center">
                        <H3>Thiago Lam Brawerman</H3>
                        <H5>Admin</H5>
                        <PopUpItemStyled>Editar perfil</PopUpItemStyled>
                        <PopUpItemStyled>Sair</PopUpItemStyled>
                      </Hbox.Item>
                    </Hbox>
                  </Hbox.Item>
                </Hbox>
              </Grid>
            </AvatarPopUpStyled>
          </>
        )}
      </AvatarWrapperStyled>
    </>
  );
};
