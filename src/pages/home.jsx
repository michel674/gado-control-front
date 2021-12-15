import { Grid, Row, Col } from 'react-flexbox-grid';

import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { H1, H2, H3, H4, H5 } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';

import { Line } from 'react-chartjs-2';

import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import { Color } from '../components/constants';
import { IconStyled } from '../components/icon.styled';
import { faIcon } from '../atomic/atm.font-awesome';

export const Home = () => {
  const TRANSACTIONS = [
    {
      type: 'Compra',
      cattle: 'matrizes',
      amount: 9,
      value: '-R$9.576',
      date: '13 de Setembro',
      vendor: 'Nathan',
    },

    {
      type: 'Compra',
      cattle: 'matrizes',
      amount: 9,
      value: '-R$9.576',
      date: '13 de Setembro',
      vendor: 'Nathan',
    },

    {
      type: 'Compra',
      cattle: 'matrizes',
      amount: 9,
      value: '-R$9.576',
      date: '13 de Setembro',
      vendor: 'Nathan',
    },
  ];

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: Color.Primary + '33',
        borderColor: Color.Primary,
      },
      {
        label: 'Second dataset',
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: Color.Gray700,
      },
    ],
  };

  return (
    <>
      <Separator type="Small" />
      <Grid>
        <Row>
          <Col xs={4}>
            <Frame toggle="true">
              <Hbox>
                <Hbox.Item hAlign="center">
                  <H4>Matrizes</H4>
                  <Separator type="Small" />
                  <H1>12</H1>
                </Hbox.Item>
              </Hbox>
            </Frame>
          </Col>

          <Col xs={4}>
            <Frame toggle="true">
              <Hbox>
                <Hbox.Item hAlign="center">
                  <H4>Bois</H4>
                  <Separator type="Small" />
                  <H1>18</H1>
                </Hbox.Item>
              </Hbox>
            </Frame>
          </Col>

          <Col xs={4}>
            <Frame toggle="true">
              <Hbox>
                <Hbox.Item hAlign="center">
                  <H4>Bezerros</H4>
                  <Separator type="Small" />
                  <H1>67</H1>
                </Hbox.Item>
              </Hbox>
            </Frame>
          </Col>
        </Row>

        <Separator type="Small" />

        <Row>
          <Col xs={12}>
            <Frame>
              <H3>Projeção de crescimento do gado</H3>
              <Line data={data} />
            </Frame>
          </Col>
        </Row>

        <Separator type="Medium" />

        <Row>
          <H2>Atividade nos últimos 3 meses</H2>
          <Separator type="Large" />

          {TRANSACTIONS.map(
            ({ type, amount, cattle, date, value, vendor }, index) => {
              return (
                <>
                  <Col xs={12} key={index}>
                    <Frame toggle="true">
                      <Hbox>
                        <Hbox.Item vAlign="center" noGrow>
                          <Frame type="primary">
                            <IconStyled size="Medium">
                              {faIcon.shoppingCart}
                            </IconStyled>
                          </Frame>
                        </Hbox.Item>
                        <Hbox.Separator />
                        <Hbox.Item vAlign="center">
                          <H3>
                            {type} de {amount} {cattle} de {vendor}
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
            },
          )}
        </Row>
      </Grid>
    </>
  );
};
