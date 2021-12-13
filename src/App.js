import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app-routes';
import Header from './Header';
import Navbar from './Navbar';
import { Separator } from './atomic/atm.separator/separator.styled';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { GlobalStyled } from './components/reset.styled';

const App = () => {
  const pathname = window.location.pathname;

  console.log(pathname);
  return (
    <BrowserRouter>
      <GlobalStyled />
      {pathname !== '/login' && <Header />}
      <AppRoutes />
      <Separator type="Large" />
      {pathname !== '/login' && <Navbar />}
    </BrowserRouter>
  );
};

export default App;
