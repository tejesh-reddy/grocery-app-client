import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import { CategoryListingStyles } from './CategoryListing.styles';
import { GET_CATEGORIES } from '../../../apollo/Queries/GetCategories';
import { GroceryCard, GroceryCardProps } from '../../molecules/GroceryCard';

export type CategoryListingProps = {
    id: number,
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
                    item => <Grid key={`${item.id}${props.id}ui`} item><GroceryCard {...item}/></Grid>
                )}
            </Grid>
        </div>
    )

};
