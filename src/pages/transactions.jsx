import { Grid, Row, Col } from 'react-flexbox-grid';

import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { H2, H3, H4, H5 } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { Button } from '../atomic/atm.button';
import { Select } from '../atomic/atm.select';

export const Transactions = () => {
  return (
    <>
      <Grid>
        <Separator type="Small" />

        <Row>
          <Col xs={12}></Col>
        </Row>
        <Hbox>
          <Hbox.Item noGrow vAlign="center">
            <H2>Transações</H2>
          </Hbox.Item>

          <Hbox.Item hAlign="flex-end" vAlign="center">
            <H5>39 Transações</H5>
          </Hbox.Item>
        </Hbox>

        <Row>
          <Col xs={12}>
            <Hbox>
              <Hbox.Item noGrow>
                <Select></Select>
              </Hbox.Item>

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
                    <Hbox.Item noGrow>
                      <Frame paddingSize="Small" type="primary">
                        Cart
                      </Frame>
                    </Hbox.Item>

                    <Hbox.Separator />

                    <Hbox.Item noGrow>
                      <Hbox>
                        <H3>Compra de 9 Matrizes</H3>
                      </Hbox>
                      <H5>01 de Janeiro de 2000</H5>
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item vAlign="center" hAlign="flex-end">
                      <H4>-R$9.540</H4>
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
