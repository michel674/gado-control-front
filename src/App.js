
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BoxStyled, Spacing } from './components/box.styled';
import { Button } from './components/button.styled';
import { InputBox } from './components/inputbox.styled';
import { H1, H2, H3 } from './components/typography';
import { UserPic } from './components/userpc.styled';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {


  return (
    <Router>
      <Grid>
        <Row>
          <Col xs={12} md={3} >
            <H1>Gado control</H1>
            <H2>Gado control</H2>
            <H3>Gado control</H3>
            <Spacing />
          </Col>
          <Col xs={12} md={3} >
            <Button>Clicar</Button>
            <InputBox type="email" placeholder="Place Holder Text"></InputBox>
          </Col>
          <Col xs={12} md={3} >
            <UserPic>TB</UserPic>
          </Col>




        </Row>
        <Navbar></Navbar>
      </Grid>
    </Router>


  );
}

export default App
