import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Frame } from '../atomic/atm.frame/frame';
import { FaAngleDown } from 'react-icons/fa';
import { Color, Transition, Spacing, Radius } from './constants';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { Separator } from '../atomic/atm.separator/separator.styled';
import { useState } from 'react';

export const ArrowStyled = styled(FaAngleDown)`
  position: absolute;
  display: block;
  top: 35%;
  right: 0;
  height: 30%;
  width: 3rem;
  pointer-events: none;

  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectStyled = styled.select`
  font-size: 1.5rem;
  padding: 1em 6em 1em 1.5em;
  background-color: ${Color.Gray200};
  border-radius: 8px;
  color: ${Color.Gray600};
  border: 0;

  appearance: none;
`;

export const SelectBoxStyled = () => {
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
      <SelectContainer>
        <SelectStyled name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </SelectStyled>
        <ArrowStyled />
      </SelectContainer>
    </Container>
  );
};
