import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { Body, H2, H5, H3, H4 } from '../components/typography';
import { Tag } from '../atomic/atm.tag';
import { BoxStyled } from '../atomic/atm.box/box.styled';
import { MoreButton } from '../atomic/atm.more-button';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { UlStyled, LiStyled } from '../atomic/atm.list/list.styled';
import { Frame } from '../atomic/atm.frame/frame';

import { faIcon } from '../atomic/atm.font-awesome';

import { RoundButton } from '../atomic/atm.roundbutton';
import { RoundButtonStyled } from '../atomic/atm.roundbutton/roundbutton.styled';

export const Transaction = () => {
  return (
    <Grid>
      <Separator type="Small" />
      <Row>
        <Hbox>
          <Hbox.Separator />
          <Hbox.Item>
            <BoxStyled vAlign="center">
              <H2>Venda de 9 Matrizes</H2> <Separator type="XNano" />
              <Tag>Venda</Tag>
              <Separator type="XNano" />
              <Tag>Matriz</Tag>
            </BoxStyled>
            <Separator type="XNano" />
            <H5>01 de Janeiro de 2000</H5>
          </Hbox.Item>
        </Hbox>
      </Row>

      <Separator type="Medium" />
      <Hbox>
        <Hbox.Separator />
        <H3>Cabeças de Gado</H3>
      </Hbox>

      <Separator type="XNano" />
      <Row>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => {
          return (
            <Col key={item}>
              <Hbox>
                <Hbox.Separator />
                <Frame paddingSize="Small" type="gray700" toggle="true">
                  <H3 color="gray100">#001</H3>
                </Frame>
              </Hbox>
              <Separator type="Nano" />
            </Col>
          );
        })}
      </Row>

      <Separator type="Medium" />

      <H3>Valor da Transação</H3>
      <Separator type="Large" />
      <Hbox>
        <Hbox.Item hAlign="center">
          <H4>R$ 9.500</H4>
        </Hbox.Item>
      </Hbox>

      <Separator type="Large" />

      <H3>Observações</H3>
      <Separator type="XNano" />
      <Body bold>As duas primeiras gestações foram em outra fazenda. </Body>
      <RoundButtonStyled>{faIcon.edit}</RoundButtonStyled>
    </Grid>
  );
};
