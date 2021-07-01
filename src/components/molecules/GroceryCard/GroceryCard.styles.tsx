import React from 'react';
import { makeStyles } from '@material-ui/core';

export const GroceryCardStyles = makeStyles((theme) => {

    return {
        root: {
            width: '250px',
        },
        imageContainer: {
            height: '250px',
            width: '100%',
        },
        image: {
            margin: '0 auto',
            height: '100%',
            width: '100%',
        },
        title: {
            fontWeight: 800,
            textTransform: 'capitalize',
        },
        button: {
            width: '100%',
            fontSize: '1.5em',
            fontWeight: 600,
            '&:hover':{
                backgroundColor: theme.palette.primary.main,
            }
        },
        options: {
            padding: '0 3em 0.5em 3em',
            width: 'calc(100% - 6em)',
            margin: '0 auto',
            display: 'flex',
            fontWeight: 600,
            justifyContent: 'space-around',
            alignItems: 'center',
        },
    }
});
