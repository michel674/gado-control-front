import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { Body, H2, H5, H3 } from '../components/typography';
import { Tag } from '../atomic/atm.tag';
import { BoxStyled } from '../atomic/atm.box/box.styled';
import { MoreButton } from '../atomic/atm.more-button';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { UlStyled, LiStyled } from '../atomic/atm.list/list.styled';

export const Cattle = () => {
  return (
    <Grid>
      <Separator type="Small" />
      <Row>
        <Hbox>
          <Hbox.Item>
            <BoxStyled vAlign="center">
              <H2>#93084</H2> <Separator type="XNano" />
              <Tag>Matriz</Tag>
            </BoxStyled>
            <Separator type="XNano" />
            <H5>Vacinado &bull; 430 kg &bull; 3 anos</H5>
          </Hbox.Item>

          <Hbox.Item>
            <BoxStyled hAlign="flex-end" vAlign="flex-end">
              <MoreButton />
            </BoxStyled>
          </Hbox.Item>
        </Hbox>
      </Row>

      <Separator type="Medium" />

      <H3>Informações</H3>
      <Separator type="XNano" />

      <UlStyled>
        <LiStyled>Vacinação completa</LiStyled>
        <LiStyled>Vacinação completa</LiStyled>
        <LiStyled>Vacinação completa</LiStyled>
      </UlStyled>

      <Separator type="XNano" />

      <Body bold>O intervalo médio entre gestações é de 14 meses </Body>

      <Separator type="Medium" />

      <H3>Observações</H3>
      <Separator type="XNano" />
      <Body bold>As duas primeiras gestações foram em outra fazenda. </Body>
    </Grid>
  );
};
