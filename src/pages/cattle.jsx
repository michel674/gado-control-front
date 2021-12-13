import { Grid, Row, Col } from 'react-flexbox-grid';
import { GlobalStyled } from '../components/reset.styled';

import Navbar from '../Navbar';
import Header from '../Header';
import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { GraphImageStyled } from '../components/graph.styled';

import { H1, H2, H3, H4, H5 } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';

export const Cattle = () => {
  const CATTLE = [
    {
      type: 'Compra',
      cattle: 'matrizes',
      amount: 9,
      value: '-R$9.576',
      date: '13 de Setembro',
    },

    {
      type: 'Compra',
      cattle: 'matrizes',
      amount: 9,
      value: '-R$9.576',
      date: '13 de Setembro',
    },

    {
      type: 'Compra',
      cattle: 'matrizes',
      amount: 9,
      value: '-R$9.576',
      date: '13 de Setembro',
    },
  ];

  return (
    <>
      <GlobalStyled />
      <Header />

      <Separator type="Small" />
      <Grid>
        
        <Separator type="Small" />

        <Row>
          <Col xs={12}>
            <Hbox>
              <Hbox.Item vAlign="center">
                <H2>Cabeça de Gado</H2>
              </Hbox.Item>
              <Hbox.Item vAlign="center" hAlign="flex-end"> 
                <H4>39 Cabeças</H4>
              </Hbox.Item>
            </Hbox>
          </Col>
        </Row>

        <Separator type="Medium" />

        <Row>
          <Col xs={12}>
            <Hbox>
                <H2>Atividade nos últimos 3 meses</H2>
            </Hbox>
          </Col>
          
          
          <Separator type="Large" />

          {CATTLE.map(({ type, amount, cattle, date, value }, index) => {
            return (
              <>
                <Col xs={12} key={index}>
                  <Frame>
                    <Hbox>
                      <Hbox.Item vAlign="center" noGrow>
                        <Frame type="primary">Caixa</Frame>
                      </Hbox.Item>
                      <Hbox.Separator />
                      <Hbox.Item vAlign="center">
                        <H3>
                          {type} de {amount} {cattle}
                        </H3>
                        <Separator type="XNano" />
                        <H5>{date}</H5>
                      </Hbox.Item>
                      <Hbox.Item vAlign="center" noGrow>
                        <H4>{value}</H4>
                      </Hbox.Item>
                    </Hbox>
                  </Frame>
                </Col>
                <Separator type="XNano" />
              </>
            );
          })}
        </Row>
      </Grid>
      <Separator type="Large" />
      <Navbar />
    </>
  );
};
