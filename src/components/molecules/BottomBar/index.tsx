import { Button, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { BottomBarStyles } from './BottomBar.styles';

export type BottomBarProps = {}

export const BottomBar = () => {

    const classes = BottomBarStyles()

    return (
        <Button className={classes.root}>
            <Typography variant='body1' className={classes.title}>Place Order</Typography>
            <Typography variant='body1' className={classes.icon}>&gt;</Typography>
        </Button>
    )
};
