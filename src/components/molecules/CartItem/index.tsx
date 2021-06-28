import { Card, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { GroceryCardProps } from '../GroceryCard';
import { CartItemStyles } from './CartItem.styles';
import DeleteIcon from '@material-ui/icons/Delete';

export type CartItemProps = {
    grocery: GroceryCardProps,
    quantity: number,
}

export const CartItem = (item: CartItemProps) => {
    const classes = CartItemStyles()

    return (
        <Card raised className={classes.root}>
            <div className={classes.details}>
            <Typography variant='h3'>{item.grocery.name}</Typography>
            <Typography variant='subtitle1'>{item.grocery.unit}</Typography>
            <Typography variant='subtitle1'>$<em>{item.quantity}</em></Typography>
            <Typography variant='subtitle1'>Quantity: <em>{item.quantity}</em></Typography>
            </div>
            <IconButton className={classes.icon}><DeleteIcon style={{fontSize: 40}} /></IconButton>
        </Card>
    )
};
