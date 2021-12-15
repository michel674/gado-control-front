import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  ConfirmButtonStyled,
  OuterButtonStyled,
  PopupWraperStyled,
  PopupButtonStyled,
} from './confirmbutton';
import { H2, Body } from '../../components/typography';
import { Hbox } from '../atm.box/hbox.styled';
import { Separator } from '../atm.separator/separator.styled';
import { Tag } from '../atm.tag';

export const ConfirmButton = ({ children, tag }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ConfirmButtonStyled onClick={() => setOpen(!open)}>
        {children}
      </ConfirmButtonStyled>

      {open && (
        <>
          <OuterButtonStyled onClick={() => setOpen(!open)} />
          <PopupWraperStyled>
            <Grid>
              <Separator type="Small" />
              <Row>
                <Col xs={12}>
                  <Hbox>
                    <Hbox.Item hAlign="center">
                      <H2>Confirmar Baixa</H2>
                    </Hbox.Item>
                  </Hbox>
                </Col>
              </Row>
              <Separator type="Medium" />
              <Row>
                <Col xs={12}>
                  <Hbox>
                    <Hbox.Separator />
                    <Hbox.Item hAlign="center" noGrow>
                      <Body>Deseja mesmo dar baixa ao Tag:</Body>
                    </Hbox.Item>
                    <Hbox.Separator />
                    <Hbox.Item noGrow>
                      <Tag>{tag}</Tag>
                    </Hbox.Item>
                  </Hbox>
                </Col>
              </Row>
              <Separator type="Large" />

              <Hbox>
                <Hbox.Item hAlign="center">
                  <Row>
                    <Col xs={12} md={5}>
                      <Hbox>
                        <Hbox.Item hAlign="center">
                          <PopupButtonStyled>Confirmar</PopupButtonStyled>
                        </Hbox.Item>
                      </Hbox>
                    </Col>
                    <Col xs={12} md={2}>
                      <Separator />
                    </Col>
                    <Col xs={12} md={5}>
                      <Hbox>
                        <Hbox.Item hAlign="center">
                          <PopupButtonStyled
                            color="secondary"
                            onClick={() => setOpen(!open)}
                          >
                            Cancelar
                          </PopupButtonStyled>
                        </Hbox.Item>
                      </Hbox>
                    </Col>
                  </Row>
                </Hbox.Item>
              </Hbox>
            </Grid>
          </PopupWraperStyled>
        </>
      )}
    </>
  );
};
