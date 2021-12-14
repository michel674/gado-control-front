import React from 'react';
import { faIcon } from '../atm.font-awesome';
import { MoreButtonWrapperStyled } from './more-button.styled';

export const MoreButton = () => {
  return (
    <MoreButtonWrapperStyled>
      <h1>{faIcon.ellipsisV}</h1>
    </MoreButtonWrapperStyled>
  );
};
