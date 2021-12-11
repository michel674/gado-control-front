
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BoxStyled, Spacing } from './components/box.styled';
import { H1, H2, H3 } from './components/typography';

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




      </Row>
    </Grid>


  );
}

export default App
