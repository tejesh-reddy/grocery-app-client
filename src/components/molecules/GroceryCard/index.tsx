import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { GroceryCardStyles } from './GroceryCard.styles';

export type GroceryCardProps = {
    name: string,
    unit: string,
    cost: number,
    image?: string
}

const defaultUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6d%2FGood_Food_Display_-_NCI_Visuals_Online.jpg%2F1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg&f=1&nofb=1";

export const GroceryCard = (props: GroceryCardProps) => {

    const classes = GroceryCardStyles()

    return (<Card className={classes.root} raised>
    <CardMedia
    title={props.name}>
        <img src={props.image || defaultUrl} className={classes.image}/>
    </CardMedia>

    <CardContent>
        <Typography variant='h6'>{props.name}</Typography>
        <Typography variant='subtitle1'>{props.unit}</Typography>
        <Typography variant='subtitle1'>${props.cost}</Typography>
    </CardContent>
    <Button className={classes.button} variant='contained' color='secondary'>Add To Cart</Button>

</Card>);
};
