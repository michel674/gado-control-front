import {
  Container,
  SelectContainer,
  SelectStyled,
  ArrowStyled,
} from './select.styled';

export const Select = ({ children }) => {
  const GADO = [
    {
      caddle: 'Matriz',
      number: '30',
    },

    {
      caddle: 'Boi',
      number: '27',
    },

    {
      caddle: 'Bezerro',
      number: '15',
    },
  ];

  return (
    <Container>
      <SelectContainer>
        <SelectStyled name="cars" id="cars">
          {children}
        </SelectStyled>
        <ArrowStyled />
      </SelectContainer>
    </Container>
  );
};
