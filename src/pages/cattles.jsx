import { Grid, Row, Col } from 'react-flexbox-grid';
import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { H2, H3, H5 } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { Button } from '../atomic/atm.button';
import { Select } from '../atomic/atm.select';
import { Checkbox } from '../atomic/atm.checkbox';

import { RoundButton } from '../atomic/atm.roundbutton';
import { faIcon } from '../atomic/atm.font-awesome';
import { IconStyled } from '../components/icon.styled';

export const Cattles = () => {
  const selectOptions = [
    { title: 'Todos', value: '1' },
    { title: 'Bois', value: '2' },
    { title: 'Bezerros', value: '3' },
    { title: 'Matrizes', value: '4' },
  ];
  const selectCores = [
    { title: 'Vermelho', value: '1' },
    { title: 'Verde', value: '2' },
    { title: 'Amarelo', value: '3' },
    { title: 'Azul', value: '4' },
  ];
  const selectEstado = [
    { title: 'Ativos', value: '1' },
    { title: 'Vendido', value: '2' },
    { title: 'Mortos', value: '3' },
  ];

  const selectOrdena = [
    { title: 'Mais novo', value: '1' },
    { title: 'Mais velho', value: '2' },
    { title: 'Maior', value: '3' },
  ];

  return (
    <>
      <Grid>
        <Separator type="Small" />

        <Row>
          <Col xs={12}></Col>
        </Row>
        <Hbox>
          <Hbox.Item noGrow vAlign="center">
            <H2>Cabeças de gado</H2>
          </Hbox.Item>

          <Hbox.Item hAlign="flex-end" vAlign="center">
            <H5>39 cabeças</H5>
          </Hbox.Item>
        </Hbox>
        <Row>
          <Checkbox>Bois</Checkbox>
          <Checkbox>Vacas</Checkbox>
          <Checkbox>Bezerros</Checkbox>
        </Row>

        <Separator type="Small" />

        <Row>
          <Col xs={12}>
            <Hbox>
              <Hbox.Item noGrow>
                <H5>Estado</H5>
                <Select options={selectEstado} />
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item noGrow>
                <H5>Cor da Tag</H5>
                <Select options={selectCores} />
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item noGrow>
                <H5>Ordem</H5>
                <Select options={selectOrdena} />
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item hAlign="flex-end">
                <Button>Adicionar +</Button>
              </Hbox.Item>
            </Hbox>
          </Col>
        </Row>

        <Separator type="Medium" />

        <Row>
          {[1, 2, 3, 4, 5, 6].map(item => {
            return (
              <Col xs={12} key={item}>
                <Frame paddingSize="Small" toggle="true">
                  <Hbox>
                    <Hbox.Item vAlign="center" noGrow>
                      <Frame paddingSize="Small" type="primary">
                        <IconStyled size="Large">{faIcon.cowBody}</IconStyled>
                      </Frame>
                    </Hbox.Item>

                    <Hbox.Separator />

                    <Hbox.Item noGrow>
                      <Hbox hAlign="center">
                        <H3>#342</H3> <Separator type="Nano" /> <H5>Matriz</H5>
                      </Hbox>

                      <H5>Vacinado &bull; 430 kg &bull; 3 anos</H5>
                    </Hbox.Item>
                  </Hbox>
                </Frame>
                <Separator type="XNano" />
              </Col>
            );
          })}
        </Row>
        <RoundButton>+</RoundButton>
      </Grid>
    </>
  );
};
