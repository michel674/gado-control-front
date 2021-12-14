import React, { useState } from 'react';

import {
  Container,
  SelectContainer,
  SelectStyled,
  ArrowStyled,
} from './select.styled';

export const Select = ({ children }) => {
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
          {children}
        </SelectStyled>
        <ArrowStyled />
      </SelectContainer>
    </Container>
  );
};
