import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
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
import { Query, useMutation, useQuery } from 'react-apollo';
import { GET_CART, GET_USER } from './apollo/Queries/Profile';
import { User } from './types';
import { useCart, useLogin } from './App.hooks';
import { ADDTO_CART, CLEAR_CART } from './apollo/Queries/Cart';

//TODO gql fails, change query params in useMutation call (helpers)

export const App = () => {

    let [isLoggedIn, Actions] = useLogin(false);

    const [updateCart] = useMutation(ADDTO_CART)
    const [clearCart] = useMutation(CLEAR_CART)

    let [cart, cartActions] = useCart(updateCart, clearCart);
    

    return <Container style={{position: 'relative'}}>
    <Navbar isLoggedIn={isLoggedIn} onLogin={Actions.login} onLogout={Actions.logout}/>
    <br/>
    <Query query={GET_USER}>
        {({data, loading, error} : any) => {
            const args:DataHandlerProps<MeProps> = {
                data,
                loading,
                error,
                Component: Me,
            }
            return <DataHandler {...args}/>
        }}
    </Query>
    <Categories cart={cart} onUpdate={cartActions.update}/>
</Container>
}

type MeProps = {
    user:User
}
const Me = ({user} : MeProps) => {
    return <h1>Welcome {user.username}!</h1>
}