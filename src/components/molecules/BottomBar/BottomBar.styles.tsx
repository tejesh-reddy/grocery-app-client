import React from 'react';
import { makeStyles } from '@material-ui/core';

export const BottomBarStyles = makeStyles((theme) => {

    return {
        root: {
            position: 'fixed',
            width: '20%',
            right: '20px',
            bottom: '20px',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            justifyContent: 'space-between',
            color: 'white',
            borderRadius: '1em',
            '&:hover': {
                backgroundColor: theme.palette.secondary.main,
            }
        },
        title: {
            padding:'1em',
            marginLeft: '1em',
            fontWeight: 800,
        },
        icon: {
            fontWeight: 800,
            color: 'white',
            marginRight: '0.7em',
            fontSize: '1.4rem',
        }
    }
});
