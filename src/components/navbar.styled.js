import styled from 'styled-components';
import { Color } from './constants';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav` 
position: absolute;
bottom: 0;
z-index: 999;
height: 80px;
width:100%;
background-color: ${Color.White};
box-shadow: 0px -6px 6px -4px ${Color.Gray300};
display: flex;
justify-content: center;
align-items: center;
`;

export const NavMenu = styled.div` 
    display: flex;
    align-items:center;
    margin-right: -24px;
`;

export const NavLink = styled(Link)` 
    color: ${Color.Gray400};
    display: flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: ${Color.Primary};
    }
`;
