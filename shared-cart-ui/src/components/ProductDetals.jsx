import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Card, CardMedia, CardContent, Typography, Button, CardActions, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    cardmedia : {
        marginTop: 100,
        width: 800
    },
    card: {
        
        marginTop: 100,
        marginLeft: 200,
        width: 800
    },

    cardcontent: {
        width: 800
    },
    button: {
        backgroundColor: '#0071DC',
        color: 'white'
    }
})


const ProductDetails = () => {
    const [itemData, setItemData] = useState({});

    const userId = localStorage.getItem("userId");
    console.log(userId);

    useEffect(() => {
        axios
            .get("http://localhost:8080/item/101")
            .then((res) => {
                setItemData(res.data);
                console.log(res);
            })
    }, [])

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                component="img"
                alt="green iguana"
                className={classes.cardmedia}
                image={require("../assets/betterHome.png")}
            />
            <CardContent className={classes.cardcontent}>
                <Typography gutterBottom variant="h4" component="div">{itemData.productName}</Typography>
                <Typography gutterBottom variant="h3" component="div">${itemData.price}</Typography>
                <Typography variant="h5" color="text.secondary">{itemData.description}</Typography>
            </CardContent>
            <CardActions>
            <Button className={classes.button} size="large">Add to Cart</Button>
            <Button className={classes.button} size="large">Add to Shared Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductDetails;