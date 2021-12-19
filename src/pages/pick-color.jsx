import React, { useState } from 'react';
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

export const PickColorPage = () => {
  const Colors = [
    { color: 'red', colorName: 'Vermelho' },
    { color: 'yellow', colorName: 'Amarelo' },
    { color: 'green', colorName: 'Verde' },
    { color: 'blue', colorName: 'Azul' },
    { color: 'purple', colorName: 'Roxo' },
  ];

  const [color, setColor] = useState('#fff');

  const onClickButton = e => {
    console.log('color: ', color);
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
          <Col xs={12} md={4}>
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
            <Separator type="Medium" />
            <div onClick={onClickButton}>
              <Button>Adicionar</Button>
            </div>
          </Col>

          <Col xs={12} md={8}>
            <H3>Tags atuais</H3>
            <Separator type="Small" />
            <BoxStyled>
              {Colors?.map((item, index) => {
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
