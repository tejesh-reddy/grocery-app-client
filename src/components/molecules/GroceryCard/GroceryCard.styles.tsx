import React from 'react';
import { makeStyles } from '@material-ui/core';

export const GroceryCardStyles = makeStyles((theme) => {

    return {
        root: {
            maxWidth: '250px'
        },
        image: {
            width: '100%',
        },
        button: {
            width: '100%',
        }
    }
});
