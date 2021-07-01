import { Grid } from '@material-ui/core';
import React from 'react';
import { getChangeHandlers } from '../../../helpers/Cart';
import { Category, Order } from '../../../types';
import { CategoryListing, CategoryListingProps } from '../CategoryListing';


export type GroceryListingProps = {
    categories: Category[],
    cart: Order,
    onUpdate: (data:Order|null) => any,
}


export const GroceryListing = ({categories, cart, onUpdate}: GroceryListingProps) => {

   
    return(
        <Grid container spacing={6}>
            {categories.map(
                category => 
                <Grid item xs={12} key={category.id}>
                    <CategoryListing  {...category} cart={cart} onUpdate={onUpdate}/>
                </Grid>
            )}
        </Grid>
    )
};
