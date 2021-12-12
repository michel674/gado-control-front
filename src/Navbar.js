import { Nav, NavMenu, NavLink, Bars } from "./components/navbar.styled";

const Navbar = () => {


    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/gado" activeStyle>
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
  }
  
  export default Navbar