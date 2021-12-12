
import { Grid, Row, Col } from 'react-flexbox-grid';
import { GadoBoxStyled, Spacing, HeaderSpacing, GraphBoxStyled } from './components/box.styled';
import { Button } from './components/button.styled';
import { InputBox } from './components/inputbox.styled';
import { H1, H2, H3 } from './components/typography';
import { UserPic } from './components/userpc.styled';
import Navbar from './Navbar';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {


  return (
    <Router>
      <Header />
      <Grid>
        <Row>
          <HeaderSpacing />
        </Row>
        <Row>
          <Col xs={4} md={4} >
            <Spacing />
            <GadoBoxStyled>
              <div />
              <p> Matrizes</p>
              <h1>12</h1>
            </GadoBoxStyled>
            <Spacing />
          </Col>

          <Col xs={4} md={4} >
            <Spacing />
            <GadoBoxStyled>
              
            </GadoBoxStyled>
            <Spacing />
          </Col>
          
          <Col xs={4} md={4} >
            <Spacing />
            <GadoBoxStyled>
              
            </GadoBoxStyled>
            <Spacing />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Spacing />
             <GraphBoxStyled>
               <h2>Projeção de crescimento do gado</h2>
               <div></div>
             </GraphBoxStyled>
             <Spacing />
          </Col>
        </Row>
      </Grid>
      <Navbar />
    </Router>


  );
}

export default App
