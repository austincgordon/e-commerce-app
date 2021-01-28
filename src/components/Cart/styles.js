import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	title: {
		marginTop: 50,
		textAlign: 'center',
		marginBottom: 60,
	},
	emptyButton: {
		minWidth: '150px',
		[theme.breakpoints.up('xs')]: {
			marginRight: '15px',
		},
	},
	subtotal: {
		[theme.breakpoints.down('xs')]: {
			marginBottom: '25px',
		},
	},
	checkoutButton: {
		minWidth: '150px',
	},
	link: {
		textDecoration: 'none',
	},
	emptyMessage: {
		marginBottom: 80,
		textAlign: 'center',
	},
	cardDetails: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '10%',
		marginBottom: 80,
		width: '100%',
		[theme.breakpoints.between('sm', 'xl')]: {
			justifyContent: 'space-between',
			flexDirection: 'row',
		},
	},
}));
