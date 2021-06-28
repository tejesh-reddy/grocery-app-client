import React from 'react';
import { makeStyles } from '@material-ui/core';

export const CartItemStyles = makeStyles((theme) => {

    return {
        root: {
            borderRadius: '1em',
            padding: '1em 3em 1em 2em',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            backgroundColor: theme.palette.primary.main,
            width: '70%',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        icon: {
            color: 'rgb(200, 10, 20)',
        }
    }
});
