import React from 'react';
import { Typography, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
	const classes = useStyles();

	const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

	const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

	return (
		<Card className={classes.card}>
			<CardMedia image={item.media.source} alt={item.name} className={classes.media} />
			<CardContent className={classes.cardContent}>
				<Typography variant='h5'>{item.name}</Typography>
				<Typography className={classes.price} variant='h6'>
					{item.line_total.formatted_with_symbol}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div className={classes.buttons}>
					<ButtonGroup variant='contained' color='primary'>
						<Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
							-
						</Button>
						<Typography className={classes.counterText}>&nbsp;{item.quantity}&nbsp;</Typography>
						<Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
							+
						</Button>
					</ButtonGroup>
				</div>
				<Button variant='contained' type='button' color='secondary' onClick={() => handleRemoveFromCart(item.id)}>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;
