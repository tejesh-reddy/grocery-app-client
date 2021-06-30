import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { GroceryCardStyles } from './GroceryCard.styles';
import { Grocery } from '../../../types';

export type GroceryCardProps = {
    groceryById: Grocery,
    addHandler: () => void,
    reduceHandler: () => void,
}

const defaultUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6d%2FGood_Food_Display_-_NCI_Visuals_Online.jpg%2F1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg&f=1&nofb=1";

export const GroceryCard = ({groceryById, addHandler}: GroceryCardProps) => {

    const classes = GroceryCardStyles()
    console.log(groceryById.id)

    return (<Card className={classes.root} raised>
    <CardMedia
    title={groceryById.name}
    className={classes.imageContainer}>
        <img src={groceryById.image || defaultUrl} className={classes.image}/>
    </CardMedia>

    <CardContent>
        <Typography variant='body1' className={classes.title}>{groceryById.name}</Typography>
        <Typography variant='subtitle1'>{groceryById.unit}</Typography>
        <Typography variant='subtitle1'>₹{groceryById.cost}</Typography>
    </CardContent>
    <Button className={classes.button} onClick={addHandler} variant='contained' color='secondary'>Add To Cart</Button>

</Card>);
};
