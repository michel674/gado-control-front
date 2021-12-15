import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { H2, H3, Body } from '../components/typography';
import { Input } from '../atomic/atm.input';
import { Select } from '../atomic/atm.select';
import { Button } from '../atomic/atm.button';
/*import { TextArea } from '../atomic/atm.textarea';*/
import { ConfirmButton } from '../atomic/atm.confirmbutton';
export const LooseCattlePage = () => {
  const cattleOptions = [
    { title: 'Matriz', value: '1' },
    { title: 'Bezerro', value: '2' },
    { title: 'Boi', value: '3' },
  ];

  return (
    <div>
      <Grid>
        <Separator type="Medium" />
        <H2>Dar baixa na cabeça de gado</H2>
        <Body>
          Ao dar baixa na cabeça de gado ela não podera ser retornada sem a
          ajuda de um admin.
        </Body>
        <Separator type="Medium" />
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

        <H3>Data do Falecimento</H3>
        <Separator type="Nano" />

        <Row>
          <Col xs={6}>
            <Input name="born" label="" type="date" expand />
          </Col>
        </Row>
        <Separator type="Medium" />
        <Row>
          <Col xs={12}>
            <H3>Observações</H3>
          </Col>
        </Row>

        <Separator type="Medium" />

        <ConfirmButton
          type="primary"
          tag="#0001"
          description="Deseja mesmo dar baixa ao Tag:"
          title="Confirmar Baixa"
        >
          Confirmar
        </ConfirmButton>
      </Grid>
    </div>
  );
};
