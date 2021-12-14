import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { H2, H3 } from '../components/typography';
import { Input } from '../atomic/atm.input';
import { Select } from '../atomic/atm.select';
import { Button } from '../atomic/atm.button';

export const AddTransactionPage = () => {
  const cattleOptions = [
    { title: 'Matriz', value: '1' },
    { title: 'Bezerro', value: '2' },
    { title: 'Boi', value: '3' },
  ];
  return (
    <div>
      <Grid>
        <Separator type="Medium" />
        <H2>Registrar Transação</H2>
        <Separator type="XNano" />
        <Row>
          <Col xs={12}>
            <Input name="idTag" label="Lista de Tags" expand />
          </Col>
        </Row>

        <Separator type="Medium" />

        <H3>Envolvido</H3>
        <Row>
          <Col xs={12}>
            <Input name="idTag" expand />
          </Col>
        </Row>
        <Separator type="Nano" />

        <Row>

          <Col xs={6}>
            <Input name="transactiondate" label="Data" type="date" expand />
          </Col>

          <Col xs={6}>
            <Input
              name="value"
              label="Valor da Transação"
              type="number"
              expand
            />
            <Separator type="Small" />
          </Col>

        </Row>

        <Separator type="Medium" />

        <Button type="primary">Registrar</Button>
      </Grid>
    </div>
  );
};
