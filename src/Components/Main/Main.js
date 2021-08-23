import React from 'react';
import { StyledMain } from './MainStyle';

const Main = (props) =>{
    return(
        <StyledMain>{props.children}</StyledMain>
    );
}

export default Main;