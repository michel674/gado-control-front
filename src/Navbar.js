import { Nav, NavMenu, NavLink } from './components/navbar.styled';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/cattle" activeStyle>
            Gado
          </NavLink>
          <NavLink to="/count" activeStyle>
            Contagem
          </NavLink>
          <NavLink to="/star" activeStyle>
            Estrela
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
