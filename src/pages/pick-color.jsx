import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Separator } from '../atomic/atm.separator/separator.styled';
import ColorPicker from 'react-pick-color';
import { Button } from '../atomic/atm.button';
import { Color, Radius, Spacing } from '../components/constants';
import { H2, H3, Body } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { ColorTag } from '../atomic/atm.colortag';

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
        <Row>
          <Col xs={12}>
            <H2>Adicionar uma nova tag</H2>
          </Col>
          <Col xs={12}>
            <Body>
              Escolha uma nova cor de brinco para identificar o gado da fazenda
            </Body>
          </Col>
        </Row>
        <Separator type="Medium" />
        <Row>
          <Col xs={12}>
            <Hbox>
              <Hbox.Item>
                <div>
                  <Col xs={12} sm={4}>
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
                  </Col>

                  <Separator type="Medium" />
                  <div onClick={onClickButton}>
                    <Button>Adicionar</Button>
                  </div>
                </div>
              </Hbox.Item>
            </Hbox>
          </Col>
        </Row>
        <Separator type="Medium" />
        <Row>
          <Col xs={12}>
            <H3>Tags atuais</H3>
          </Col>
        </Row>
        <Separator type="Medium" />
        <Row>
          {Colors?.map(item => {
            return (
              <Col xs={2} md={2} lg={1} key={item}>
                <ColorTag color={item?.color}>{item?.colorName}</ColorTag>
                <Separator type="Nano" />
              </Col>
            );
          })}
        </Row>
      </Grid>
    </div>
  );
};
