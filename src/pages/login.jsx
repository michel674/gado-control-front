import { Grid, Row, Col } from 'react-flexbox-grid';
import { GlobalStyled } from '../components/reset.styled';

import Navbar from '../Navbar';
import Header from '../Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Frame } from '../atomic/atm.frame/frame';
import { Separator } from '../atomic/atm.separator/separator.styled';

import { GraphImageStyled } from '../components/graph.styled';

import { H1, H2, H3, H4, H5 } from '../components/typography';
import { Hbox } from '../atomic/atm.box/hbox.styled';
import { Background } from '../components/background.styled';

export const Login = () => {
  return (
    <Background color="primary">
      <GlobalStyled />
    </Background>
  );
};
