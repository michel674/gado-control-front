import React, { useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { Body, H2, H5, H3, H4 } from '../components/typography';
import { Tag } from '../atomic/atm.tag';
import { BoxStyled } from '../atomic/atm.box/box.styled';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { Frame } from '../atomic/atm.frame/frame';

import { faIcon } from '../atomic/atm.font-awesome';

import { RoundButtonStyled } from '../atomic/atm.roundbutton/roundbutton.styled';
import { TagStyled } from '../atomic/atm.tag/tag.styled';
import { LinkStyled } from '../atomic/atm.link/link.styled';
import { useRequest } from '../hooks/useRequest.hook';
import { useParams } from 'react-router-dom';
import { formatDayAndMonthToHuman } from '../utils/format-date';

export const Transaction = () => {
  const params = useParams();
  const { data, request: getTransaction } = useRequest({
    route: `/transacao/${params?.id}/view`,
  });

  useEffect(() => {
    getTransaction({ params: {}, withCredentials: true });
  }, [getTransaction]);

  return (
    <Grid>
      <Separator type="Small" />
      <Row>
        <Hbox>
          <Hbox.Separator />
          <Hbox.Item>
            <BoxStyled vAlign="center">
              <H2>{data?.descricao}</H2>
              <Separator type="XNano" />
              <Tag>{data?.tipo}</Tag>
            </BoxStyled>
            <Separator type="XNano" />
            <H5>{formatDayAndMonthToHuman(data?.data)}</H5>
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
        {data?.cabecas?.map(cabeca => {
          return (
            <Col key={cabeca}>
              <Hbox>
                <Hbox.Separator />
                <LinkStyled to={`/cattles/${cabeca?.id}`}>
                  <Frame
                    paddingSize="Small"
                    type="gray700"
                    toggle="true"
                    clickable
                  >
                    <Hbox.Item hAlign="center">
                      <H3 color="gray100">#{cabeca?.tag}</H3>
                      <Separator type="XNano" />
                      <H5 color="gray100">{cabeca?.tipo}</H5>
                      <Separator type="Nano" />
                    </Hbox.Item>

                    <TagStyled hex={cabeca?.brinco?.cor_hex} expand />
                  </Frame>
                </LinkStyled>
              </Hbox>
              <Separator type="Nano" />
            </Col>
          );
        })}
      </Row>

      <Separator type="Medium" />

      <H3>Valor da Transação</H3>
      <Separator type="Small" />
      <Hbox>
        <Hbox.Item hAlign="center" noGrow>
          <Frame>
            <H4>
              {' '}
              {data?.tipo === 'Compra' ? '-' : ''} R$ {data?.valor?.toFixed(2)}
            </H4>
          </Frame>
        </Hbox.Item>
      </Hbox>

      <Separator type="Large" />

      <LinkStyled to="edit">
        <RoundButtonStyled size="Small">{faIcon.edit}</RoundButtonStyled>
      </LinkStyled>
    </Grid>
  );
};
