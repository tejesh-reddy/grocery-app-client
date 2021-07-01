import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { GroceryCardStyles } from './GroceryCard.styles';
import { Grocery } from '../../../types';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';

export type GroceryCardProps = {
    groceryById: Grocery,
    addHandler: () => void,
    reduceHandler: () => void,
    quantity: number,
}

const defaultUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6d%2FGood_Food_Display_-_NCI_Visuals_Online.jpg%2F1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg&f=1&nofb=1";

export const GroceryCard = ({groceryById, addHandler, reduceHandler, quantity}: GroceryCardProps) => {

    const classes = GroceryCardStyles()

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
    {quantity === 0? 
        <Button className={classes.button} onClick={addHandler} variant='contained' color='secondary'>Add To Cart</Button>
        :
        <div className={classes.options} onClick={addHandler}><IconButton><AddIcon/></IconButton> 
        <Typography variant='subtitle1'>{quantity}</Typography>
        <IconButton onClick={reduceHandler}><AddIcon/></IconButton></div>
    }

</Card>);
};
