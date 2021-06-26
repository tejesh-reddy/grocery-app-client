import React from 'react';
import { makeStyles } from '@material-ui/core';

export const CategoryListingStyles = makeStyles((theme) => {

    return {
        root: {
            paddingBottom: '1rem',
        },
        heading: {
            padding: '0',
        },
        list: {
            padding: '1em 0',
            margin: '0 auto',
        }
    }
});
