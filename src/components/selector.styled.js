import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Frame } from '../atomic/atm.frame/frame';
import { FaAngleDown } from 'react-icons/fa';
import { Color, Transition, Spacing, Radius } from './constants';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { useState } from 'react';

export const ArrowStyled = styled(FaAngleDown)``;

export const SelectBoxStyled = styled.div`
  width: 100%;
`;

export const SelectedStyled = styled.div`
  max-height: 100px;
  max-width: 100%;
  background-color: ${Color.Gray200};
  color: ${Color.Gray600};
  border-radius: ${Radius.Medium};
  padding: 12px 24px;
  cursor: pointer;
`;
export const OptionContainerStyled = styled.div`
  max-width: 100%;
  max-height: 540px;
  background-color: ${Color.Gray200};
  color: ${Color.Gray600};
  border-radius: ${Radius.Medium};
  transition: all ${Transition.Normal};
  overflow: hidden;
   {
    props=()= > {
    }
  }
`;
export const OptionStyled = styled.div`
  padding: 12px 24px;
  cursor: pointer;
  &:hover {
    background-color: ${Color.Gray300};
    border-radius: ${Radius.Medium};
  }
  &.radio {
    display: none;
  }
`;

export const LabelNumberStyled = styled.label`
  cursor: pointer;
`;
export const LabelStyled = styled.label`
  cursor: pointer;
`;

export const Container = styled.div`
  margin-top: 100px;
  padding: 32px;
`;
export const InputStyled = styled.input`
  display: none;
`;

export const SelectorStyled = () => {
  const GADO = [
    {
      caddle: 'Matriz',
      number: '30',
    },

    {
      caddle: 'Boi',
      number: '27',
    },

    {
      caddle: 'Bezerro',
      number: '15',
    },
  ];

  const [switchToggle, setSwitchToggle] = useState(false);

  const ToggleSwitch = () => {
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true);
    console.log(switchToggle);
  };
  return (
    <Container>
      <SelectedStyled onClick={ToggleSwitch}>
        <Hbox>
          <Hbox.Item vAlign="Center" hAlign="flex-start">
            Escolha o Gado
          </Hbox.Item>
          <Hbox.Item vAlign="Center" hAlign="flex-end" no-grow>
            <ArrowStyled />
          </Hbox.Item>
        </Hbox>
      </SelectedStyled>
      <Separator type="XNano" />
      <SelectBoxStyled>
        <OptionContainerStyled toggle={switchToggle}>
          {GADO.map(({ caddle, number }, index) => {
            return (
              <>
                <div key={index}>
                  <OptionStyled>
                    <Hbox>
                      <InputStyled
                        type="radio"
                        nameClass="radio"
                        id={caddle}
                        name="category"
                      />
                      <Hbox.Item vAlign="center" hAlign="flex-start">
                        <LabelStyled>{caddle}</LabelStyled>
                      </Hbox.Item>
                      <Hbox.Item vAlign="center" hAlign="flex-end">
                        <LabelNumberStyled>{number}</LabelNumberStyled>
                      </Hbox.Item>
                    </Hbox>
                  </OptionStyled>
                </div>
                <Separator type="XNano" />
              </>
            );
          })}
        </OptionContainerStyled>
      </SelectBoxStyled>
    </Container>
  );
};
