import { useEffect } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { H2, H3, H4, H5 } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';

import { faIcon } from '../atomic/atm.font-awesome';
import { IconStyled } from '../components/icon.styled';
import { LinkStyled } from '../atomic/atm.link/link.styled';
import { useRequest } from '../hooks/useRequest.hook';

import { RoundButton } from '../atomic/atm.roundbutton';
import { formatDayAndMonthToHuman } from '../utils/format-date';
import { LoadingState } from '../components/loading-state';

export const Transactions = () => {
  const {
    data,
    loading,
    request: getTransactions,
    errorCode,
  } = useRequest({
    route: '/transacao/list',
  });

  useEffect(() => {
    getTransactions({ params: {}, withCredentials: true });
  }, [getTransactions]);

  const transactions = data?.transacoes;

  console.log(errorCode);

  return (
    <LoadingState
      data={data}
      errorCode={errorCode}
      loading={loading}
      shimmer={'carregando'}
    >
      {' '}
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
              <H5>
                {transactions?.length}{' '}
                {transactions?.length === 1 ? 'transação' : 'transações'}
              </H5>
            </Hbox.Item>
          </Hbox>

          <Separator type="Medium" />

          <Row>
            {transactions?.map(item => {
              return (
                <Col xs={12} key={item}>
                  <LinkStyled to={`/transactions/${item?.id}`}>
                    <Frame paddingSize="Small" toggle="true" clickable>
                      <Hbox>
                        <Hbox.Item noGrow>
                          <Frame
                            paddingSize="Small"
                            type={
                              item?.tipo === 'Compra' ? 'primary' : 'secondary'
                            }
                          >
                            <IconStyled
                              type={
                                item?.tipo === 'Compra'
                                  ? 'primary'
                                  : 'secondary'
                              }
                            >
                              {faIcon.shoppingCart}
                            </IconStyled>
                          </Frame>
                        </Hbox.Item>

                        <Hbox.Separator />

                        <Hbox.Item noGrow>
                          <Hbox>
                            <H3>{item?.descricao}</H3>
                          </Hbox>
                          <H5>{formatDayAndMonthToHuman(item?.data)}</H5>
                        </Hbox.Item>
                        <Hbox.Separator />
                        <Hbox.Item vAlign="center" hAlign="flex-end">
                          <H4>
                            {`${item.tipo === 'Compra' ? '-' : ''}R$ ` +
                              item?.valor.toFixed(2)}
                          </H4>
                        </Hbox.Item>
                      </Hbox>
                    </Frame>
                  </LinkStyled>
                  <Separator type="XNano" />
                </Col>
              );
            })}
          </Row>
        </Grid>
        <LinkStyled to="/add-transaction">
          <RoundButton>+</RoundButton>
        </LinkStyled>
      </>
    </LoadingState>
  );
};
