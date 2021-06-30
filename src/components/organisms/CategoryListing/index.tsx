import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import { CategoryListingStyles } from './CategoryListing.styles';
import { GroceryCardProps } from '../../molecules/GroceryCard';
import { Grocery } from '../Grocery';
import { Grocery as GroceryType} from '../../../types';

export type CategoryListingProps = {
    name: string,
    groceries: GroceryType[],
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
                    item => <Grid key={`${props.name}`} item><Grocery {...item}/></Grid>
                )}
            </Grid>
        </div>
    )

};
