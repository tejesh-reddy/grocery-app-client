import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { GroceryCardStyles } from './GroceryCard.styles';
import { Grocery } from '../../../types';

export type GroceryCardProps = {
    grocery: Grocery
}

const defaultUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6d%2FGood_Food_Display_-_NCI_Visuals_Online.jpg%2F1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg&f=1&nofb=1";

export const GroceryCard = ({grocery}: GroceryCardProps) => {

    const classes = GroceryCardStyles()

    return (<Card className={classes.root} raised>
    <CardMedia
    title={grocery.name}
    className={classes.imageContainer}>
        <img src={grocery.image || defaultUrl} className={classes.image}/>
    </CardMedia>

    <CardContent>
        <Typography variant='body1' className={classes.title}>{grocery.name}</Typography>
        <Typography variant='subtitle1'>{grocery.unit}</Typography>
        <Typography variant='subtitle1'>${grocery.cost}</Typography>
    </CardContent>
    <Button className={classes.button} variant='contained' color='secondary'>Add To Cart</Button>

</Card>);
};
