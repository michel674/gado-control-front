import React from 'react';
import { faIcon } from '../atm.font-awesome';
import { Separator } from '../atm.separator/separator.styled';

import { SelectStyled, ArrowStyled, LabelStyled } from './select.styled';

export const Select = ({ options }) => {
  console.log(options);
  return (
    <>
      <LabelStyled>
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
        {faIcon.angleDown}
      </LabelStyled>
    </>
  );
};
