import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import ColorPicker from 'react-pick-color';
import { Button } from '../atomic/atm.button';
import { Color, Radius, Spacing } from '../components/constants';
import { H2, H3, Body } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { ColorTag } from '../atomic/atm.colortag';
import { ColorPickerWrapperStyled } from '../components/color-picker.styled';
import { BoxStyled } from '../atomic/atm.box/box.styled';
import { Input } from '../atomic/atm.input';
import { useRequest } from '../hooks/useRequest.hook';

export const PickColorPage = () => {
  const Colors = [
    { color: 'red', colorName: 'Vermelho' },
    { color: 'yellow', colorName: 'Amarelo' },
    { color: 'green', colorName: 'Verde' },
    { color: 'blue', colorName: 'Azul' },
    { color: 'purple', colorName: 'Roxo' },
  ];

  const { data: tagsData, request: getTags } = useRequest({
    route: '/brincos/get',
  });

  const { request: addTag } = useRequest({
    route: '/brinco/add',
    method: 'POST',
  });

  useEffect(() => {
    getTags({ params: null });
  }, [getTags]);

  const currentTags = tagsData?.map(tag => {
    return { color: tag?.fields.cor, colorName: tag?.fields.cor_nome };
  });

  const [color, setColor] = useState('#fff');

  const onSubmit = e => {
    const colorName = document?.querySelector('#colorName')?.value;

    e.preventDefault();

    const bodyData = {
      cor_hex: color,
      cor_nome: colorName,
    };

    const onSuccess = data => {
      getTags({ params: null });
    };

    addTag({ params: null, bodyData: bodyData, onSuccess });
  };

  return (
    <div>
      <Grid>
        <Separator type="Medium" />
        <H2>Adicionar uma nova tag</H2>
        <Body>
          Escolha uma nova cor de brinco para identificar o gado da fazenda
        </Body>
        <Separator type="Medium" />
        <Row>
          <Col xsOffset={1} xs={10} md={6}>
            <ColorPickerWrapperStyled>
              <ColorPicker
                theme={{
                  background: Color.Gray100,
                  inputBackground: Color.Gray100,
                  borderColor: Color.Gray300,
                  borderRadius: Radius.Small,
                  color: 'black',
                  width: '100%',
                }}
                color={color}
                onChange={color => setColor(color.hex)}
                hideAlpha
                hideInputs
              />
            </ColorPickerWrapperStyled>
            <Separator type="Small" />
            <form onSubmit={onSubmit}>
              <Input
                id="colorName"
                name="colorName"
                label="Nome da cor"
                placeholder="Digite o nome da cor"
              />
              <Separator type="Nano" />
              <Button>Adicionar</Button>
            </form>
            <Separator type="Medium" />
          </Col>

          <Col xsOffset={1} xs={10} md={6}>
            <H3>Tags atuais</H3>
            <Separator type="Small" />
            <BoxStyled>
              {currentTags?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <ColorTag color={item?.color}>{item?.colorName}</ColorTag>
                    <Separator type="Nano" />
                  </React.Fragment>
                );
              })}
            </BoxStyled>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
