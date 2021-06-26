import React from 'react';
import { makeStyles } from '@material-ui/core';

export const BannerStyles = makeStyles(() => {

    return {
        root: {
            width: '100%',
            maxHeight: '400px',
            margin: '0 auto',
            overflow: 'hidden',
        },
        slider: {
            width: '100%',
            whiteSpace: 'nowrap',
            transition: 'ease 1000ms'
        },
        image: {
            width: '100%',
            height: '300px',
            display: 'inline-block',
        }
    }
});
