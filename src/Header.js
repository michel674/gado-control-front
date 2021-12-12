import { Head,HeaderLogo,HeaderUser } from "./components/header.styled";
import { UserPic } from './components/userpc.styled';

const Header = () => {


    return (
        <>
            <Head>
                <HeaderLogo to="/home" activeStyle>
                    Gado Control
                </HeaderLogo>
                <HeaderUser to="/user" activeStyle>
                    <UserPic>
                        TB
                    </UserPic>
                </HeaderUser>
            </Head>
        </>
    );
  }
  
  export default Header