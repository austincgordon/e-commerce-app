import { Grid, IconButton, Typography } from '@material-ui/core';
import { Facebook, Twitter, YouTube, Instagram } from '@material-ui/icons';
import React from 'react';
import { Visa, Mastercard, Amex, Stripe, Discover } from './PaymentIcons';

import useStyles from './styles';

const Footer = () => {
	const classes = useStyles();
	return (
		<Grid container direction='column' justify='center' alignItems='center' className={classes.main}>
			<Grid item>
				<IconButton aria-label='Facebook' color='inherit' className={classes.social}>
					<Facebook />
				</IconButton>
				<IconButton aria-label='Twitter' color='inherit' className={classes.social}>
					<Twitter />
				</IconButton>
				<IconButton aria-label='Instagram' color='inherit' className={classes.social}>
					<Instagram />
				</IconButton>
				<IconButton aria-label='YouTube' color='inherit' className={classes.social}>
					<YouTube />
				</IconButton>
			</Grid>
			<Grid className={classes.icon} item>
				<Visa fontSize='large' style={{ marginRight: 10, marginLeft: 10 }} />{' '}
				<Mastercard fontSize='large' style={{ marginRight: 10, marginLeft: 10 }} />{' '}
				<Amex fontSize='large' style={{ marginRight: 10, marginLeft: 10 }} />{' '}
				<Discover fontSize='large' style={{ marginRight: 10, marginLeft: 10 }} />{' '}
				<Stripe fontSize='large' style={{ marginRight: 10, marginLeft: 10 }} />
			</Grid>
			<Grid item>
				<Typography variant='subtitle1' style={{ textAlign: 'center' }}>
					&copy; Jubilee Records 2021 / Powered by{' '}
					<a href='https://commercejs.com/' target='_blank'>
						Commerce.js
					</a>
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
