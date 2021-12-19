import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { H2, H3, H5 } from '../components/typography';
import { Input } from '../atomic/atm.input';
import { Select } from '../atomic/atm.select';
import { Button } from '../atomic/atm.button';
import { TextArea } from '../atomic/atm.textarea';
import { Hbox } from '../atomic/atm.box/hbox.styled';

export const EditTransactionPage = () => {
  const selectOptions = [
    { title: '-------', value: '1' },
    { title: 'Compra', value: '2' },
    { title: 'Venda', value: '3' },
  ];

  const onSubmit = () => {
    const idTag = document?.querySelector('#idTag')?.value;
  };
  return (
    <div>
      <Grid>
        <form onSubmit={onSubmit}>
          <Separator type="Medium" />
          <H2>Editar Transação</H2>
          <Separator type="XNano" />
          <Row>
            <Col xs={12}>
              <Input name="idTags" id="idTags" label="Lista de Tags" expand />
            </Col>
          </Row>

          <Separator type="Small" />

          <Row>
            <Col xs={7}>
              <Input name="person" id="person" label="Envolvido" expand />
            </Col>
            <Col xs={5}>
              <Input
                name="transactionDate"
                id="transactionDate"
                label="Data"
                type="date"
                expand
              />
            </Col>
          </Row>

          <Separator type="Small" />

          <Row>
            <Col xs={7}>
              <Input
                name="value"
                id="value"
                label="Valor da Transação"
                type="number"
                expand
              />
              <Separator type="Small" />
            </Col>
            <Col xs={5}>
              <H5 color="gray700">Compra</H5>
              <Select id="type" options={selectOptions} />
            </Col>
          </Row>
          <Separator type="Small" />
          <Row>
            <Col xs={12}>
              <H3>Observações</H3>

              <TextArea name="observations" id="observations" />
            </Col>
          </Row>
          <Separator type="Medium" />

          <Button type="primary">Salvar</Button>
        </form>
      </Grid>
    </div>
  );
};
