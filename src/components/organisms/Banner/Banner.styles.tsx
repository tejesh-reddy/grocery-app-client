import React from 'react';
import { makeStyles } from '@material-ui/core';

export const BannerStyles = makeStyles((theme) => {

    return {
        root: {
            maxHeight: '300px',
            maxWidth: '900px',
            margin: '0 auto',
            overflow: 'hidden',
        },
        slider: {
            width: '100%',
            whiteSpace: 'no-wrap',
        },
        image: {
            width: '100%',
            height: '300px',
            display: 'inline-block',
        }
    }
});
