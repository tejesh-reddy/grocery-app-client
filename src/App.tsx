import { Container } from '@material-ui/core';
import React from 'react';
import { LoginButton } from './components/atoms/LoginButton';
import { Navbar } from './components/molecules/Navbar';

export const App = () => {
    return <Container>
        <Navbar/>
        <LoginButton/>
        
    </Container>
}