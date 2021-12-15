import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app-routes';
import Header from './Header';
import Navbar from './Navbar';
import { Separator } from './atomic/atm.separator/separator.styled';

import { GlobalStyled } from './components/reset.styled';
import { AppWrapperStyled } from './components/app-wrapper.styled';

const App = () => {
  const pathname = window.location.pathname;

  return (
    <BrowserRouter>
      <GlobalStyled />
      {pathname !== '/login' && <Header />}
      <AppWrapperStyled>
        <AppRoutes />
      </AppWrapperStyled>

      {pathname !== '/login' && <Navbar />}
    </BrowserRouter>
  );
};

export default App;
