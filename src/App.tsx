import { Container } from '@material-ui/core';
import React from 'react';
import { BottomBar } from './components/molecules/BottomBar';
import { CartListing } from './components/organisms/CartListing';
import { DefaultCart } from './components/organisms/CartListing/CartListing.stories';
import { GroceryListing } from './components/organisms/GroceryListing';
import { DefaultGroceryListing } from './components/organisms/GroceryListing/GroceryListing.stories';
import { Navbar } from './components/organisms/Navbar';
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