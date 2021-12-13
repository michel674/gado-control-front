import { Grid, Row, Col } from 'react-flexbox-grid';
import { GlobalStyled } from '../components/reset.styled';

import { Background } from '../components/background.styled';

import { SelectBoxStyled } from '../components/selector.styled';

export const Test = () => {
  return (
    <Background>
      <GlobalStyled />
      <SelectBoxStyled />
    </Background>
  );
};
