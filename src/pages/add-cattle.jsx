import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { H2, H3 } from '../components/typography';
import { Input } from '../atomic/atm.input';
import { Select } from '../atomic/atm.select';
import { Button } from '../atomic/atm.button';
import { Checkbox } from '../atomic/atm.checkbox';
import { TextArea } from '../atomic/atm.textarea';

export const AddCattlePage = () => {
  const cattleOptions = [
    { title: 'Matriz', value: '1' },
    { title: 'Bezerro', value: '2' },
    { title: 'Boi', value: '3' },
  ];
  const tagColor = [
    { title: 'Vermelho', value: '1' },
    { title: 'Amarelo', value: '2' },
    { title: 'Azul', value: '3' },
  ];
  const CATTLEVACINES = [
    { title: 'Febre aftosa', value: '1' },
    { title: 'Brucelose', value: '2' },
    { title: 'Clostridioses', value: '3' },
    { title: 'Botulismo', value: '4' },
    { title: 'Leptospirose', value: '5' },
    { title: 'Raiva', value: '6' },
    { title: 'Ibr bvd', value: '7' },
  ];

  return (
    <div>
      <Grid>
        <Separator type="Medium" />
        <H2>Registrar cabeça de gado</H2>
        <Separator type="XNano" />
        <Row>
          <Col xs={6}>
            <Select
              name="cattleType"
              label="Matriz ou bezerro"
              options={cattleOptions}
              expand
            />
          </Col>
          <Col xs={6}>
            <Input name="idTag" label="Tag de identificação" expand />
          </Col>

          <Col xs={6}>
            <Separator />
            <Select
              name="color Tag"
              label="Cor da Tag"
              options={tagColor}
              expand
            />
          </Col>
        </Row>

        <Separator type="Medium" />

        <H3>Vacinas</H3>
        <Separator type="Nano" />

        <Row>
          {CATTLEVACINES.map(({ title, value }, index) => {
            return (
              <>
                <Col>
                  <Checkbox>{title}</Checkbox>
                  <Separator />
                </Col>
              </>
            );
          })}
        </Row>
        <Separator />
        <Row>
          <Col xs={6}>
            <Input name="born" label="Nascimento" type="date" expand />
          </Col>

          <Col xs={6}>
            <Input name="Weight" label="Peso" type="number" expand />
            <Separator type="Small" />
          </Col>
        </Row>
        <Separator />
        <Row>
          <Col xs={12}>
            <H3>Observações</H3>

            <TextArea />
          </Col>
        </Row>

        <Separator type="Medium" />

        <Button type="primary">Registrar</Button>
      </Grid>
    </div>
  );
};
