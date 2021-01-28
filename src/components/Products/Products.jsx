import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
	const classes = useStyles();

	if (!products.length) return <p>Loading...</p>;

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Typography className={classes.header} variant='h3'>
				Vinyl Records
			</Typography>
			<Grid container justify='center' spacing={4}>
				{products.map((product) => (
					<Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
						<Product product={product} onAddToCart={onAddToCart} />
					</Grid>
				))}
			</Grid>
			<div className={classes.buffer}>
				<Button className={classes.button} component={Link} to='/' variant='contained' color='secondary' size='large'>
					Back to Home
				</Button>
				<Button className={classes.button} component={Link} to='/cart' variant='contained' color='primary' size='large'>
					Go to Cart
				</Button>
			</div>
		</main>
	);
};

export default Products;
