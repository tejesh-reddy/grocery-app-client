import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { navbarStyles } from './navbar.styles';
import { LoginButton } from '../../atoms/LoginButton';
import { LogoutButton } from '../../atoms/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

export type NavbarProps = {
    logoutHandler: () => void,
}

export const Navbar = (props: NavbarProps) => {
    const classes = navbarStyles();

    const { isAuthenticated } = useAuth0()


   return <AppBar position="static" className={classes.root} color='transparent' elevation={0}>
        <Toolbar>
            <Typography color='primary' variant='h1' className={classes.logo}>GROCERY APP</Typography>

            {isAuthenticated?
            <>
                <Button color='primary'>CART</Button>
                <Button color='primary'>Account</Button>
                <LogoutButton tokenHandler ={props.logoutHandler}/>
            </>
                :
                <LoginButton/>
            }
        </Toolbar>

    </AppBar>
};
