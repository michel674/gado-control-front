import { Grid, Row, Col } from 'react-flexbox-grid';
import { GlobalStyled } from '../components/reset.styled';
import { BrowserRouter as Router } from 'react-router-dom';
import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { useState } from 'react';

import { Hbox } from '../atomic/atm.box/hbox.styled';
import { Background } from '../components/background.styled';
import { ButtonLoginStyled } from '../atomic/atm.button/button.styled';
import { LogoStyled, LogoDarkStyled } from '../components/logo.styled';
import { InputBox } from '../components/inputbox.styled';

import { H1, H2, H3, H4, H5, H5Green } from '../components/typography';

export const Login = () => {
  return (
    <Background color="primary">
      <GlobalStyled />
      <Grid>
        <Separator type="Large" />
        <Row>
          <Col xs={1} md={2} lg={3} xl={3} />
          <Col xs={10} md={8} lg={6} xl={5}>
            <Frame type="white">
              <Row>
                <Col xs={12}>
                  <LogoDarkStyled>Easy Farm</LogoDarkStyled>
                </Col>
              </Row>
              <Separator type="Medium" />
              <Row>
                <Hbox>
                  <Hbox.Separator />

                  <Hbox.Item>
                    <H4>Email</H4>
                  </Hbox.Item>
                </Hbox>
              </Row>
              <Separator type="Nano" />
              <Row>
                <Hbox>
                  <Hbox.Separator />

                  <Hbox.Item>
                    <InputBox
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@email.com"
                    ></InputBox>
                  </Hbox.Item>
                </Hbox>
              </Row>
              <Separator type="Medium" />
              <Row>
                <Hbox>
                  <Hbox.Separator />

                  <Hbox.Item>
                    <H4>Senha</H4>
                  </Hbox.Item>
                </Hbox>
              </Row>
              <Separator type="Nano" />
              <Row>
                <Hbox>
                  <Hbox.Separator />

                  <Hbox.Item>
                    <InputBox
                      type="password"
                      id="pass"
                      name="password"
                      placeholder="***********"
                      minlength="8"
                      required
                    ></InputBox>
                  </Hbox.Item>
                </Hbox>
              </Row>
              <Separator type="Medium" />
              <Separator type="Small" />
              <Separator type="Nano" />
              <Row>
                <Hbox>
                  <Hbox.Separator />

                  <Hbox.Item hAlign="center">
                    <ButtonLoginStyled type="submit">Entrar</ButtonLoginStyled>
                  </Hbox.Item>
                </Hbox>
              </Row>
              <Separator type="Medium" />
              <Row>
                <Hbox>
                  <Hbox.Separator />

                  <Hbox.Item noGrow>
                    <H5>Não tem conta?</H5>
                  </Hbox.Item>
                  <Hbox.Separator />
                  <Hbox.Item>
                    <H5Green>Faça um Cadastro</H5Green>
                  </Hbox.Item>
                </Hbox>
              </Row>
            </Frame>
          </Col>
        </Row>
      </Grid>
    </Background>
  );
};
