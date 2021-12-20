import React, { useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { H2, Body } from '../components/typography';
import { Input } from '../atomic/atm.input';
import { ConfirmButton } from '../atomic/atm.confirmbutton';
import { useRequest } from '../hooks/useRequest.hook';
import { useParams } from 'react-router-dom';
import { Button } from '../atomic/atm.button';
export const LooseCattlePage = () => {
  const cattleOptions = [
    { title: 'Matriz', value: '1' },
    { title: 'Bezerro', value: '2' },
    { title: 'Boi', value: '3' },
  ];

  const params = useParams();

  const { data, request: getCattle } = useRequest({
    route: `cabeca/${params?.id}/view`,
  });

  const { request: killCattle } = useRequest({
    route: `cabeca/${params?.id}/death`,
    method: 'POST',
  });

  useEffect(() => {
    getCattle({ params: null, withCredentials: true });
  }, [getCattle]);

  const onSubmit = e => {
    e?.preventDefault();

    const deathDate = document?.querySelector('#deathDate')?.value;
    const deathCause = document?.querySelector('#deathCause')?.value;

    killCattle({
      withCredentials: true,
      params: null,
      bodyData: {
        causa_mortis: deathCause,
        data_morte: deathDate,
      },
    });
  };

  return (
    <div>
      <Grid>
        <form onSubmit={onSubmit}>
          <Separator type="Medium" />
          <H2>Dar baixa na cabeça em #{data?.identificacao}</H2>
          <Body>
            Ao dar baixa na cabeça de gado ela não podera ser retornada sem a
            ajuda de um admin.
          </Body>
          <Separator type="Medium" />

          <Row>
            <Col xs={6}>
              <Input
                name="deathDate"
                id="deathDate"
                type="date"
                expand
                label="Data do Falecimento"
              />
            </Col>

            <Col xs={6}>
              <Input
                name="deathCause"
                id="deathCause"
                expand
                label="Causa da morte"
                placeholder="Febre aftosa"
              />
            </Col>
          </Row>

          <Separator type="Small" />

          <Button>Confirmar</Button>

          {/* <ConfirmButton
            type="primary"
            tag="#0001"
            description="Deseja mesmo dar baixa ao Tag:"
            title="Confirmar Baixa"
          >
            Confirmar
          </ConfirmButton> */}
        </form>
      </Grid>
    </div>
  );
};
