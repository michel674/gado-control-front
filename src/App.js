
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BoxStyled, Spacing } from './components/box.styled';
import { Button } from './components/button.styled';
import { H1, H2, H3 } from './components/typography';
import { UserPic } from './components/userpc.styled';

const App = () => {


  return (
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
        </Col>
        <Col xs={12} md={3} >
          <UserPic>TB</UserPic>
        </Col>




      </Row>
    </Grid>


  );
}

export default App
