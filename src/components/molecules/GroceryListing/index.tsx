import { Grid } from '@material-ui/core';
import React from 'react';
import { CategoryListing, CategoryListingProps } from '../CategoryListing';


export type GroceryListingProps = {
    categories: CategoryListingProps[]
}


export const GroceryListing = ({categories}: GroceryListingProps) => {

    return(
        <Grid container spacing={6}>
            {categories.map(
                category => 
                <Grid item xs={12}>
                    <CategoryListing  {...category}/>
                </Grid>
            )}
        </Grid>
    )
};
