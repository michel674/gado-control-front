import { Grid, Row, Col } from 'react-flexbox-grid';

import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { H1, H2, H3, H4, H5 } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';

import { Line, Bar } from 'react-chartjs-2';

import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import { Color } from '../components/constants';
import { IconStyled } from '../components/icon.styled';
import { faIcon } from '../atomic/atm.font-awesome';
import { useEffect } from 'react';
import { useRequest } from '../hooks/useRequest.hook';
import { LinkStyled } from '../atomic/atm.link/link.styled';

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

  const { data, request } = useRequest({ route: '/home' });

  useEffect(() => {
    request();
  }, [request]);

  console.log(data);

  const cows = data?.n_matrizes;

  const bulls = data?.n_bois;

  const calfMale = data?.n_bezerros_male;

  const calfFemale = data?.n_bezerros_female;

  const graph = data?.graph;

  console.log(graph?.female_y_series);

  const barData = {
    labels: graph?.x_series,
    datasets: [
      {
        label: 'Bezerros',
        backgroundColor: Color.Primary + '33',
        borderColor: Color.Primary,
        borderWidth: 2,
        data: graph?.male_y_series,
      },
      {
        label: 'Bezerras',
        backgroundColor: Color.Gray500 + '33',
        borderColor: Color.Gray500,
        borderWidth: 2,
        data: graph?.female_y_series,
      },
    ],
  };

  return (
    <>
      <Separator type="Small" />
      <Grid>
        <Row>
          <Col xs={3}>
            <LinkStyled to="/cattles">
              <Frame clickable>
                <Hbox>
                  <Hbox.Item hAlign="center">
                    <H4>Vacas</H4>
                    <Separator type="Small" />
                    <H1>{cows}</H1>
                  </Hbox.Item>
                </Hbox>
              </Frame>
            </LinkStyled>
          </Col>

          <Col xs={3}>
            <LinkStyled to="/cattles">
              <Frame clickable>
                <Hbox>
                  <Hbox.Item hAlign="center">
                    <H4>Touros</H4>
                    <Separator type="Small" />
                    <H1>{bulls}</H1>
                  </Hbox.Item>
                </Hbox>
              </Frame>
            </LinkStyled>
          </Col>

          <Col xs={3}>
            <LinkStyled to="/cattles">
              <Frame clickable>
                <Hbox>
                  <Hbox.Item hAlign="center">
                    <H4>Bezerros</H4>
                    <Separator type="Small" />
                    <H1>{calfMale}</H1>
                  </Hbox.Item>
                </Hbox>
              </Frame>
            </LinkStyled>
          </Col>

          <Col xs={3}>
            <LinkStyled to="/cattles">
              <Frame clickable>
                <Hbox>
                  <Hbox.Item hAlign="center">
                    <H4>Bezerras</H4>
                    <Separator type="Small" />
                    <H1>{calfFemale}</H1>
                  </Hbox.Item>
                </Hbox>
              </Frame>
            </LinkStyled>
          </Col>
        </Row>

        <Separator type="Small" />

        <Row>
          <Col xs={12}>
            <Frame>
              <H3>{graph?.title}</H3>
              <Bar data={barData} />
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
