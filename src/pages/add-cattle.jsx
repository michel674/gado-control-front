import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { H2, H3 } from '../components/typography';
import { Input } from '../atomic/atm.input';
import { Select } from '../atomic/atm.select';
import { Button } from '../atomic/atm.button';

export const AddCattlePage = () => {
  const cattleOptions = [
    { title: 'Matriz', value: '1' },
    { title: 'Bezerro', value: '2' },
    { title: 'Boi', value: '3' },
  ];
  return (
    <div>
      <Grid>
        <Separator type="Medium" />
        <H2>Registrar cabeça de gado</H2>
        <Separator type="XNano" />
        <Row>
          <Col xs={6}>
            <Input name="idTag" label="Tag de identificação" expand />
          </Col>

          <Col xs={6}>
            <Select
              name="cattleType"
              label="Matriz ou bezerro"
              options={cattleOptions}
              expand
            />
          </Col>
        </Row>

        <Separator type="Medium" />

        <H3>Ficha médica</H3>
        <Separator type="Nano" />

        <Row>
          <Col xs={6}>
            <Input name="weight" label="Peso em Kg" expand />
            <Separator type="Small" />
          </Col>

          <Col xs={6}>
            <Input
              name="vaccination
"
              label="vacinação"
              expand
            />
            <Separator type="Small" />
          </Col>

          <Col xs={6}>
            <Input name="born" label="Nascimento" type="date" expand />
          </Col>

          <Col xs={6}>
            <Input
              name="gestation"
              label="Número de gestações"
              type="number"
              expand
            />
            <Separator type="Small" />
          </Col>

          <Col xs={9}>
            <Input
              name="gestationInterval"
              label="Intervalo médio entre gestações (meses)"
              type="number"
              expand
            />
          </Col>
        </Row>

        <Separator type="Medium" />

        <Button type="primary">Registrar</Button>
      </Grid>
    </div>
  );
};
