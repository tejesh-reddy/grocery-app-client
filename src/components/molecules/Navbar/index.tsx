import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { navbarStyles } from './navbar.styles';

export const Navbar = () => {
    const classes = navbarStyles();


   return <AppBar position="static" className={classes.root} color='transparent' elevation={0}>
        <Toolbar>
            <Typography color='primary' variant='h1' className={classes.logo}>GROCERY APP</Typography>

            <Typography variant='subtitle1'>CART</Typography>
            <Typography variant='subtitle1'>ACCOUNT</Typography>
        </Toolbar>

    </AppBar>
};
