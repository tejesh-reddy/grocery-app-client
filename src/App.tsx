import { Container } from '@material-ui/core';
import React from 'react';
import { BottomBar } from './components/molecules/BottomBar';
import { CartListing } from './components/molecules/CartListing';
import { DefaultCart } from './components/molecules/CartListing/CartListing.stories';
import { GroceryListing } from './components/molecules/GroceryListing';
import { DefaultGroceryListing } from './components/molecules/GroceryListing/GroceryListing.stories';
import { Navbar } from './components/molecules/Navbar';
import { Banner } from './components/organisms/Banner';
import { DefaultBanner } from './components/organisms/Banner/Banner.stories';
import { Categories } from './components/organisms/Categories';

export const App = () => {

    const cardItems = {
    name: 'Grocery',
    unit: '1 Kg',
    cost: 20,
    }

    return <Container style={{position: 'relative'}}>
    <Navbar/>
    <br/>
    <Banner {...DefaultBanner}/>
    <Categories/>
</Container>
}