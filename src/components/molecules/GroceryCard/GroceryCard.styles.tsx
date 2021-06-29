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
            padding: '1em',
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
        }
    }
});
