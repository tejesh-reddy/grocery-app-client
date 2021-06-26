import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import { GroceryCard, GroceryCardProps } from '../GroceryCard';
import { CategoryListingStyles } from './CategoryListing.styles';

export type CategoryListingProps = {
    name: string,
    items: GroceryCardProps[],
}

export const CategoryListing = (props: CategoryListingProps) => {

    return (
        <div>
            <Typography variant='h1'>{props.name}</Typography>
            <hr/>
            <br/>
            <Grid container spacing={3}>
                {props.items.map(
                    item => <Grid item><GroceryCard {...item}/></Grid>
                )}
            </Grid>
        </div>
    )
};
