import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { navbarStyles } from './navbar.styles';

export type NavbarProps = {
    isLoggedIn?: Boolean,
}

export const Navbar = (props: NavbarProps) => {
    const classes = navbarStyles();

    const login = () => {
        fetch('http://localhost:8080/auth/google')
        .then(res => console.log(res))
    }


   return <AppBar position="static" className={classes.root} color='transparent' elevation={0}>
        <Toolbar>
            <Typography color='primary' variant='h1' className={classes.logo}>GROCERY APP</Typography>

            {props.isLoggedIn?
            <>
                <Button color='primary'>CART</Button>
                <Button color='primary'>Account</Button>
            </>
                :
                <Button color='primary' onClick={login}>Login</Button>
            }
        </Toolbar>

    </AppBar>
};
