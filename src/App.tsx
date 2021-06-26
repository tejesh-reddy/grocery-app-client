import { Container } from '@material-ui/core';
import React from 'react';
import { GroceryListing } from './components/molecules/GroceryListing';
import { DefaultGroceryListing } from './components/molecules/GroceryListing/GroceryListing.stories';
import { Navbar } from './components/molecules/Navbar';
import { Banner } from './components/organisms/Banner';
import { DefaultBanner } from './components/organisms/Banner/Banner.stories';

export const App = () => {

    const cardItems = {
    name: 'Grocery',
    unit: '1 Kg',
    cost: 20,
    }

    return <Container>
        <Navbar/>
        <br/>
        <Banner {...DefaultBanner}/>
        <br/>
        <GroceryListing {...DefaultGroceryListing}/>
    </Container>
}