import React from 'react';
import { makeStyles } from '@material-ui/core';

export const navbarStyles = makeStyles((theme) => ({
    logo: {
        flex: '1',
        textTransform: 'capitalize',
        fontFamily: 'Lobster',
        fontWeight: 600,
    },
    root: {
        padding: '2em 0',
        width: '100%',
        border: `1px solid ${theme.palette.primary}`
    },
}));
