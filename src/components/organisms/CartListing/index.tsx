import { Grid } from '@material-ui/core';
import React from 'react';
import { CartItem, CartItemProps } from '../../molecules/CartItem';
import { CartListingStyles } from './CartListing.styles';

export type CartListingProps = {
    items: CartItemProps[]
}

export const CartListing = ({items}: CartListingProps) => {

    const classes = CartListingStyles()

    return(
        <Grid container className={classes.root}>
            {items.map(item => {
                return <Grid item className={classes.item} key={item.grocery.name} xs={12}><CartItem {...item}/></Grid>
            })}
        </Grid>
    )
};
