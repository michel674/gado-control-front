import { Nav, NavMenu, NavLink } from './components/navbar.styled';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/cattles" activeStyle>
            Gado
          </NavLink>
          <NavLink to="/count" activeStyle>
            Contagem
          </NavLink>
          <NavLink to="/transactions" activeStyle>
            Transações
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
