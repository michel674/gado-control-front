import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app-routes';
import Header from './Header';
import Navbar from './Navbar';
import { Separator } from './atomic/atm.separator/separator.styled';

import { GlobalStyled } from './components/reset.styled';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Header />
      <AppRoutes />
      <Separator type="Large" />
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
