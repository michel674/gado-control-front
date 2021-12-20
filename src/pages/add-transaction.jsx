import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { H2, H3, H5 } from '../components/typography';
import { Input } from '../atomic/atm.input';
import { Select } from '../atomic/atm.select';
import { Button } from '../atomic/atm.button';
import { TextArea } from '../atomic/atm.textarea';
import ReactSelect from 'react-select';
import { useRequest } from '../hooks/useRequest.hook';

export const AddTransactionPage = () => {
  const selectOptions = [
    { title: '-------', value: '1' },
    { title: 'Compra', value: '2' },
    { title: 'Venda', value: '3' },
  ];

  const [isPurchase, setIsPurchase] = useState(true);

  const { data: cattleData, request: getCabecas } = useRequest({
    route: '/cabecas/get',
  });

  const { request: addTransaction } = useRequest({
    route: '/transacao/add',
    method: 'POST',
  });

  useEffect(() => {
    getCabecas({ params: null, withCredentials: true });
  }, [getCabecas]);

  const cattleOption = cattleData?.cabecas?.map(cattle => {
    return { label: `${cattle?.tipo} - ${cattle?.tag}`, value: cattle?.id };
  });

  const [tagsValue, setTagsValue] = useState();

  const onSubmit = e => {
    e.preventDefault();
    const tags = document?.querySelector('#tags')?.value;
    const person = document?.querySelector('#person')?.value;
    const transactionDate = document?.querySelector('#transactionDate')?.value;
    const value = document?.querySelector('#value')?.value;
    const type = document?.querySelector('#type')?.value;
    const newCattles = document?.querySelector('#newCattles')?.value;

    const idList = tagsValue?.map(item => item.value);

    const bodyData = {
      valor: value,
      data: transactionDate,
      tipo: type === '2' ? 'Compra' : 'Venda',
      envolvido: person,
      id_list: idList,
      novas_cabecas: newCattles,
    };

    addTransaction({
      bodyData: bodyData,
      withCredentials: true,
    });
  };

  const handleChangeType = value => {
    setIsPurchase(value == '2');
  };
  return (
    <div>
      <Grid>
        <form onSubmit={onSubmit}>
          <Separator type="Medium" />
          <H2>Registrar Transação</H2>
          <Separator type="XNano" />

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
              <Select
                id="type"
                name="type"
                options={selectOptions}
                expand
                onChange={value => handleChangeType(value)}
              />
            </Col>

            <Col xs={12}>
              {isPurchase ? (
                <>
                  <H5 color={'gray700'}>Gados novos</H5>
                  <Separator type="XNano" />
                  <TextArea
                    name="newCattles"
                    id="newCattles"
                    label="Gados novos"
                    expand
                  />
                </>
              ) : (
                <>
                  {' '}
                  <H5 color={'gray700'}>Tags</H5>
                  <Separator type="XNano" />
                  <ReactSelect
                    id="tags"
                    name="tags"
                    options={cattleOption}
                    isMulti
                    onChange={selectedOptions => setTagsValue(selectedOptions)}
                    value={tagsValue}
                  />
                </>
              )}
            </Col>
          </Row>

          <Separator type="Medium" />
          <Button type="primary">Registrar</Button>
        </form>
      </Grid>
    </div>
  );
};
