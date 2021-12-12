import styled from 'styled-components';
import { Color, Spacing } from './constants';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: sticky;
  bottom: 0;
  z-index: 999;

  padding: ${Spacing.Small};
  box-sizing: border-box;

  width: 100%;

  box-shadow: 0px -6px 6px -4px ${Color.Gray300};
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Color.White};
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

export const NavLink = styled(Link)`
  color: ${Color.Gray400};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: ${Color.Primary};
  }
`;
