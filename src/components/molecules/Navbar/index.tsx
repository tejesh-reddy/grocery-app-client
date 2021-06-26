import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { navbarStyles } from './navbar.styles';

export type NavbarProps = {
    isLoggedIn?: Boolean,
}

export const Navbar = (props: NavbarProps) => {
    const classes = navbarStyles();


   return <AppBar position="static" className={classes.root} color='transparent' elevation={0}>
        <Toolbar>
            <Typography color='primary' variant='h1' className={classes.logo}>GROCERY APP</Typography>

            {props.isLoggedIn?
            <>
                <Button color='primary'>CART</Button>
                <Button color='primary'>Account</Button>
            </>
                :
                <Button color='primary'>Login</Button>
            }
        </Toolbar>

    </AppBar>
};
