import React, { useState } from 'react';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
  IconStyled,
} from './checkbox.styled';
import { faIcon } from '../atm.font-awesome';

export const Checkbox = ({ children, ...props }) => {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
      <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
      <StyledCheckbox>
        <IconStyled checked={checked}>{faIcon.check}</IconStyled>
      </StyledCheckbox>
      <Text checked={checked}>{children}</Text>
    </CheckboxContainer>
  );
};
