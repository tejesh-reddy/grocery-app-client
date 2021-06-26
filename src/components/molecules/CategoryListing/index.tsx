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

    const classes = CategoryListingStyles()

    return (
        <div className={classes.root}>
            <Typography color='primary' variant='h1' className={classes.heading}>{props.name}</Typography>
            <hr/>
            <br/>
            <Grid container spacing={3} className={classes.list}>
                {props.items.map(
                    item => <Grid key={`${item.name}${props.name}ui`} item><GroceryCard {...item}/></Grid>
                )}
            </Grid>
        </div>
    )
};
