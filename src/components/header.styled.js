import styled from 'styled-components';
import { Color,Transition } from './constants';
import { Title } from './typography';
import { NavLink as Link } from 'react-router-dom';

export const Head = styled.div` 
position: absolute;
Top: 0;
z-index: 999;
height: 80px;
width:100%;
background-color: ${Color.Primary};
display: flex;
justify-content: space-between;
align-items: center;
`;

export const HeaderLogo = styled(Link)` 
    font-size:30px;
    display: flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    color:${Color.Gray100};

    transition-duration: ${Transition.Normal};
    &:hover{
        color:${Color.PrimaryLight};
    }


`;

export const HeaderUser = styled.div`
`;
