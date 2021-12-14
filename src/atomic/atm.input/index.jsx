import React from 'react';
import { InputStyled, InputWrapperStyled, LabelStyled } from './input.styled';
import { Separator } from '../atm.separator/separator.styled';

export const Input = ({ name, label, expand, type }) => {
  return (
    <>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <Separator type="XNano" />
      <InputWrapperStyled expand={expand}>
        <InputStyled name={name} type={type} />
      </InputWrapperStyled>
    </>
  );
};
