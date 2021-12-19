import React, { useEffect } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { Body, H2, H5, H3 } from '../components/typography';
import { Tag } from '../atomic/atm.tag';
import { BoxStyled } from '../atomic/atm.box/box.styled';
import { MoreButton } from '../atomic/atm.more-button';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { UlStyled, LiStyled } from '../atomic/atm.list/list.styled';
import { useRequest } from '../hooks/useRequest.hook';
import { VaccinesBoxStyled } from '../components/vaccine-display.styled';
import { VaccineDisplay } from '../components/vaccine-display';
import { formatDayAndMonthToHuman } from '../utils/format-date';
import { ColorTagStyled } from '../atomic/atm.colortag/colortag.styled';
import { useParams } from 'react-router-dom';

export const Cattle = () => {
  const params = useParams();

  const { data, request: getCattle } = useRequest({
    route: `cabeca/${params?.id}/view`,
  });

  useEffect(() => {
    getCattle({ params: {} });
  }, [getCattle]);

  const gestationTime = Math.floor(data?.tempo_crias / 30.4);

  return (
    <Grid>
      <Separator type="Small" />
      <Row>
        <Hbox>
          <Hbox.Item>
            <BoxStyled vAlign="center">
              <H2>#{data?.n_etiqueta}</H2> <Separator type="XNano" />
              <Tag>{data?.tipo}</Tag>
              <Separator type="XNano" />
              <ColorTagStyled
                color={data?.brinco?.cor_HEX}
                width="50px"
                height="25px"
              />
            </BoxStyled>
            <Separator type="XNano" />
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
        <LiStyled>
          Data de nascimento: {formatDayAndMonthToHuman(data?.nascimento)}
        </LiStyled>
        <LiStyled>Estado: {data?.esta_vivo ? 'vivo' : 'morto'} </LiStyled>
        <LiStyled>Sexo: {data?.sexo}</LiStyled>
        <LiStyled>Peso: {data?.ultimo_peso} arrobas</LiStyled>
        <LiStyled>Vendido: {data?.vendido ? 'sim' : 'não'}</LiStyled>
      </UlStyled>

      <Separator type="XNano" />

      <Body bold>
        O intervalo médio entre gestações é de {gestationTime}{' '}
        {gestationTime === 1 ? 'mês' : 'meses'}
      </Body>

      <Separator type="Medium" />

      <H3>Observações</H3>
      <Separator type="XNano" />
      <Body bold>{data?.observacoes} </Body>

      <Separator type="Medium" />
      <H3>Vacinas</H3>
      <Separator type="XNano" />
      <VaccinesBoxStyled>
        <VaccineDisplay checked={data?.febre_aftosa} title={'Febre Aftosa'} />
        <Separator type="XNano" />

        <VaccineDisplay checked={data?.brucelose} title={'Brucelose'} />
        <Separator type="XNano" />

        <VaccineDisplay checked={data?.clostridioses} title={'Clostridioses'} />
        <Separator type="XNano" />

        <VaccineDisplay checked={data?.botulismo} title={'Botulismo'} />
        <Separator type="XNano" />

        <VaccineDisplay checked={data?.leptospirose} title={'Leptospirose'} />
        <Separator type="XNano" />

        <VaccineDisplay checked={data?.raiva} title={'Raiva'} />
        <Separator type="XNano" />

        <VaccineDisplay checked={data?.ibr_bvd} title={'IBR-BVD'} />
        <Separator type="XNano" />
      </VaccinesBoxStyled>
    </Grid>
  );
};
