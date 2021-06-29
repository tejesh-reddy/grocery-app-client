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
import { DataHandler, DataHandlerProps } from './components/molecules/DataHandler';
import { Query } from 'react-apollo';
import { GET_USER } from './apollo/Queries/Profile';

export const App = () => {

    const cardItems = {
    name: 'Grocery',
    unit: '1 Kg',
    cost: 20,
    }
    

    return <Container style={{position: 'relative'}}>
    <Navbar/>
    <br/>
    <Query query={GET_USER}>
        {({data, loading, error} : any) => {
            const args:DataHandlerProps<MeProps> = {
                data,
                loading,
                error,
                Component: Me
            }
            return <DataHandler {...args}/>
        }}
    </Query>
    <Categories/>
</Container>
}

type MeProps = {
    id: string,
    username: string
}
const Me = ({id, username} : MeProps) => {
    return <><h1>ID: {id}</h1>
    <h1>Name: {username}</h1></>
}