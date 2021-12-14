import { Grid, Row, Col } from 'react-flexbox-grid';

import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { H2, H3, H5 } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { Button } from '../atomic/atm.button';
import { Select } from '../atomic/atm.select';

export const Cattles = () => {
  const selectOptions = [
    { title: 'Todos', value: '1' },
    { title: 'Bois', value: '2' },
    { title: 'Bezerros', value: '3' },
    { title: 'Matrizes', value: '4' },
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
          <Col xs={12}>
            <Hbox>
              <Hbox.Item noGrow>
                <Select options={selectOptions} />
              </Hbox.Item>

              <Hbox.Item hAlign="flex-end">
                <Button>Adicionar+</Button>
              </Hbox.Item>
            </Hbox>
          </Col>
        </Row>

        <Separator type="Medium" />

        <Row>
          {[1, 2, 3, 4, 5, 6].map(item => {
            return (
              <Col xs={12} key={item}>
                <Frame paddingSize="Small">
                  <Hbox>
                    <Hbox.Item noGrow>
                      <Frame paddingSize="Small" type="primary">
                        Boi
                      </Frame>
                    </Hbox.Item>

                    <Hbox.Separator />

                    <Hbox.Item noGrow>
                      <Hbox>
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
      </Grid>
    </>
  );
};
