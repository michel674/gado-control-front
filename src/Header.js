import {
  Head,
  HeaderLogo,
  HeaderSeparatorStyled,
} from './components/header.styled';
import { UserAvatarStyled } from './components/userpc.styled';
import { Grid } from 'react-flexbox-grid';
import { Hbox } from './atomic/atm.box/hbox.styled';

const Header = () => {
  return (
    <>
      <Head>
        <Grid>
          <Hbox>
            <Hbox.Item hAlign="flex-start">
              <HeaderLogo to="/home" activeStyle>
                Easy Farm
              </HeaderLogo>
            </Hbox.Item>

            <Hbox.Item hAlign="flex-end" noGrow>
              <UserAvatarStyled>TB</UserAvatarStyled>
            </Hbox.Item>
          </Hbox>
        </Grid>
      </Head>

      <HeaderSeparatorStyled />
    </>
  );
};

export default Header;
