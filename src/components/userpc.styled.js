import styled from "styled-components";
import { Color,Transition } from './constants';

export const UserPic = styled.div`

    padding: 10px 10px;
    height:100px; //Height = Width
    width:100px;

    color: ${Color.Gray200};
    font-size:60px; //fontsize = 60% Height

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${Color.Gray700};

    border-radius: 50%;

    transition-duration: ${Transition.Normal};
    &:hover{
        box-shadow: 0 -6px 6px -4px ${Color.Gray300};
        background-color: ${Color.Gray600};
    }
    cursor: default;
`;
