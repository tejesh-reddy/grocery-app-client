import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import { DataHandler, DataHandlerProps } from '../DataHandler';
import { GroceryCard, GroceryCardProps } from '../GroceryCard';
import { CategoryListingStyles } from './CategoryListing.styles';
import { GET_CATEGORIES } from '../../../apollo/Queries/GetCategories';

export type CategoryListingProps = {
    name: string,
    groceries: GroceryCardProps[],
}

export const CategoryListing:React.FC<CategoryListingProps> = (props : CategoryListingProps) => {

    const classes = CategoryListingStyles()

    return (
        <div className={classes.root}>
            <Typography color='primary' variant='h1' className={classes.heading}>{props.name}</Typography>
            <hr/>
            <br/>
            <Grid container spacing={3} className={classes.list}>
                {props.groceries.map(
                    item => <Grid key={`${item.name}${props.name}ui`} item><GroceryCard {...item}/></Grid>
                )}
            </Grid>
        </div>
    )

};
