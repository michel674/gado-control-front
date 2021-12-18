import React from 'react';
import {
  ColorTagStyled,
  ColorTagLabel,
  ColorTagSpacing,
} from './colortag.styled';

export const ColorTag = ({ children, color }) => {
  return (
    <div>
      <ColorTagStyled color={color} />
      <ColorTagSpacing />
      <ColorTagSpacing />
      <ColorTagLabel>{children}</ColorTagLabel>
    </div>
  );
};
