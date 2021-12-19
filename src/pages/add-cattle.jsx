import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { H2, H3 } from '../components/typography';
import { Input } from '../atomic/atm.input';
import { Select } from '../atomic/atm.select';
import { Button } from '../atomic/atm.button';
import { Checkbox } from '../atomic/atm.checkbox';
import { TextArea } from '../atomic/atm.textarea';
import { useRequest } from '../hooks/useRequest.hook';
import { BoxStyled } from '../atomic/atm.box/box.styled';

export const AddCattlePage = () => {
  const cattleOptions = [
    { title: 'Boi', value: '1' },
    { title: 'Matriz', value: '2' },
    { title: 'Bezerro', value: '3' },
  ];

  const calfGender = [
    { title: 'Macho', value: '1' },
    { title: 'Fêmea', value: '2' },
  ];

  const { data: tagColors, request: getTagColors } = useRequest({
    route: '/brincos/get',
  });

  const { data, request: addNewCattle } = useRequest({
    method: 'POST',

    route: '/cabeca/add',
  });

  const { data: mothers, request: getCattleMother } = useRequest({
    route: '/cabeca/add',
  });

  const [cattleSelect, setCattleSelect] = useState(null);

  useEffect(() => {
    getTagColors({ params: null });
  }, [getTagColors]);

  useEffect(() => {
    getCattleMother({ params: null });
  }, [getCattleMother]);


  const selectColors = tagColors?.map(item => {
    return { title: item?.fields?.cor_nome, value: item?.pk };
  });

  const selectMothers = mothers?.matrizes?.map(item => {
    return {
      title: item?.identificacao,
      value: item?.id,
    };
  });

  const onChangeCattleType = value => {
    setCattleSelect(value.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const cattleType = document?.querySelector('#cattleType')?.value;

    const idTag = document?.querySelector('#idTag')?.value;
    const born = document?.querySelector('#born')?.value;

    const color = document?.querySelector('#color')?.value;
    const cow = document?.querySelector('#cow')?.value;
    const gender = document?.querySelector('#gender')?.value;

    const febre_aftosa = document?.querySelector('#febre_aftosa')?.value;
    const brucelose = document?.querySelector('#brucelose')?.value;
    const clostridioses = document?.querySelector('#clostridioses')?.value;
    const botulismo = document?.querySelector('#botulismo')?.value;
    const leptospirose = document?.querySelector('#leptospirose')?.value;
    const raiva = document?.querySelector('#raiva')?.value;
    const ibr_bvd = document?.querySelector('#ibr_bvd')?.value;

    const observations = document?.querySelector('#observations')?.value;
    const params = {
      tipo: cattleType,
      n_etiqueta: idTag,
      brinco: color,
      nascimento: born,
      sexo: gender,
      matriz: cow,
      febre_aftosa,
      brucelose,
      clostridioses,
      botulismo,
      leptospirose,
      raiva,
      ibr_bvd,
      observacoes: observations,
    };

    addNewCattle({
      params: null,
      bodyData: params,
      withCredentials: true,
    });
  };

  return (
    <div>
      <Grid>
        <form onSubmit={onSubmit}>
          <Separator type="Medium" />
          <H2>Registrar cabeça de gado</H2>
          <Separator type="XNano" />
          <Row>
            <Col xs={6}>
              <Select
                name="cattleType"
                id={'cattleType'}
                label="Matriz ou bezerro"
                options={cattleOptions}
                expand
                value={cattleSelect}
                onChange={value => onChangeCattleType(value)}
              />
            </Col>
            <Col xs={6}>
              <Input
                name="idTag"
                id="idTag"
                label="Número da etiqueta"
                expand
              />
            </Col>

            <Col xs={6}>
              <Separator />
              <Select
                expand
                options={selectColors}
                label="Cor da etiqueta"
                name="color"
                id="color"
              />
            </Col>

            {cattleSelect === '3' && (
              <>
                <Col xs={6}>
                  <Separator />
                  <Select
                    expand
                    options={calfGender}
                    label="Sexo do bezerro"
                    name="gender"
                    id="gender"
                  />
                </Col>

                <Col xs={6}>
                  <Separator />
                  <Select
                    options={selectMothers}
                    label="Matriz"
                    name="cow"
                    id="cow"
                  />
                </Col>
              </>
            )}
          </Row>

          <Separator type="Medium" />

          <H3>Vacinas</H3>
          <Separator type="Nano" />

          <Row>
            <Col>
              <Checkbox id="febre_aftosa" name="febre_aftosa">
                Febre aftosa
              </Checkbox>
              <Separator />
            </Col>

            <Col>
              <Checkbox id="brucelose" name="brucelose">
                Brucelose
              </Checkbox>
              <Separator />
            </Col>

            <Col>
              <Checkbox id="clostridioses" name="clostridioses">
                Clostridioses
              </Checkbox>
              <Separator />
            </Col>

            <Col>
              <Checkbox id="botulismo" name="botulismo">
                Botulismo
              </Checkbox>
              <Separator />
            </Col>

            <Col>
              <Checkbox id="leptospirose" name="leptospirose">
                Leptospirose
              </Checkbox>
              <Separator />
            </Col>

            <Col>
              <Checkbox id="raiva" name="raiva">
                Raiva
              </Checkbox>
              <Separator />
            </Col>

            <Col>
              <Checkbox id="ibr_bvd" name="ibr_bvd">
                IBR-BVD
              </Checkbox>
              <Separator />
            </Col>
          </Row>
          <Separator />
          <Row>
            <Col xs={6}>
              <Input
                name="born"
                id="born"
                label="Nascimento"
                type="date"
                expand
              />
            </Col>
            <Col xs={6}>
              <H3>Observações</H3>

              <TextArea id="observations" name="observations" />
            </Col>
          </Row>

          <BoxStyled hAlign="flex-end">
            <Button type="primary">Registrar</Button>
          </BoxStyled>
        </form>
        <Separator type="Medium" />
      </Grid>
    </div>
  );
};
