import { faIcon } from './atomic/atm.font-awesome';
import { Nav, NavMenu, NavLink } from './components/navbar.styled';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/dashboard" activeStyle>
            {faIcon.home}
          </NavLink>
          <NavLink to="/cattles" activeStyle>
            {faIcon.cow}
          </NavLink>
          <NavLink to="/count" activeStyle>
            {faIcon.listOl}
          </NavLink>
          <NavLink to="/transactions" activeStyle>
            {faIcon.moneyCheckAlt}
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
