import React from 'react';
import { Separator } from '../atm.separator/separator.styled';

import {
  SelectStyled,
  LabelStyled,
  SelectWrapperStyled,
  StyledOption,
} from './select.styled';

export const Select = ({ options, name, expand, label, id }) => {
  return (
    <SelectWrapperStyled expand={expand}>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <Separator type="XNano" />

      <SelectStyled name={name} id={id}>
        {options?.map(item => {
          return (
            <>
              <StyledOption key={item.value} value={item.value}>
                {item.title}
              </StyledOption>
            </>
          );
        })}
        <Separator type="Large" />
      </SelectStyled>
    </SelectWrapperStyled>
  );
};
