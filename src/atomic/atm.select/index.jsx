import React from 'react';
import { faIcon } from '../atm.font-awesome';
import { Separator } from '../atm.separator/separator.styled';

import {
  SelectStyled,
  LabelStyled,
  SelectWrapperStyled,
} from './select.styled';

export const Select = ({ options, name, expand, label }) => {
  console.log(options);
  return (
    <SelectWrapperStyled expand={expand}>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <Separator type="XNano" />

      <SelectStyled>
        {options.map(item => {
          return (
            <>
              <option key={item.value} value={item.value}>
                {item.title}
              </option>
            </>
          );
        })}
        <Separator type="Large" />
      </SelectStyled>
    </SelectWrapperStyled>
  );
};
