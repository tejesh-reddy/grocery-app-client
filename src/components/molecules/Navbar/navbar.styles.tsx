import React from 'react';
import { makeStyles } from '@material-ui/core';

export const navbarStyles = makeStyles((theme) => ({
    logo: {
        flex: '1'
    },
    root: {
        padding: '0.5em',
        width: '100%',
        border: `1px solid ${theme.palette.primary}`
    },
}));
