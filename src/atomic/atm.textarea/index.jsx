import React from 'react';
import { StyledTextArea } from './textarea.styled';

export const TextArea = props => {
  let { name, placeholder, value, onChange } = props;
  return (
    <div>
      <StyledTextArea
        placeholder={placeholder}
        id={name}
        name={name}
        rows={6}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
