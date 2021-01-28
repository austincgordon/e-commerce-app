import { Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

import useStyles from './styles';

const Landing = () => {
	const classes = useStyles();

	return (
		<Grid container direction='column' justify='center' alignItems='center' className={classes.hero}>
			<Grid item>
				<Typography className={classes.landingText}>
					Welcome to Jubilee Records - the home of vinyl, CD's, and music memorabilia!
				</Typography>
			</Grid>
			<Grid>
				<Button className={classes.button} component={Link} to='/products' variant='contained' color='primary' size='large'>
					Shop Now
				</Button>
			</Grid>
		</Grid>
	);
};

export default Landing;
