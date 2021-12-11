
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BoxStyled, Spacing } from './components/box.styled';

const App = () => {


  return (
    <Grid>
      <Row>
        <Col xs={12} md={3} >
          <BoxStyled/>
          <Spacing />
        </Col>

        <Col xs={12} md={3}>
          <BoxStyled />
          <Spacing />
        </Col>

        <Col xs={12} md={3}>
          <BoxStyled />
          <Spacing />
        </Col>

        <Col xs={12} md={3}>
          <BoxStyled />
          <Spacing />
        </Col>
      </Row>
    </Grid>


  );
}

export default App
