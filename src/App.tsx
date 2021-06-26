import { Container } from '@material-ui/core';
import React from 'react';
import { LoginButton } from './components/atoms/LoginButton';
import { GroceryCard } from './components/molecules/GroceryCard';
import { GroceryListing } from './components/molecules/GroceryListing';
import { DefaultGroceryListing } from './components/molecules/GroceryListing/GroceryListing.stories';
import { Navbar } from './components/molecules/Navbar';

export const App = () => {

    const cardItems = {
    name: 'Grocery',
    unit: '1 Kg',
    cost: 20,
    }

    return <Container>
        <Navbar/>
        <br/>
        <GroceryListing {...DefaultGroceryListing}/>
    </Container>
}