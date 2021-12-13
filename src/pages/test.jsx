import { Grid, Row, Col } from 'react-flexbox-grid';
import { GlobalStyled } from '../components/reset.styled';

import { Background } from '../components/background.styled';

import { ButtonStyled } from '../components/button.styled';

export const Test = () => {
  return (
    <Background>
      <GlobalStyled />
      <ButtonStyled>Adicionar +</ButtonStyled>
    </Background>
  );
};
