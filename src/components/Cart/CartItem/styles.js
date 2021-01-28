import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	card: {
		width: '100%',
	},
	media: {
		height: 400,
		width: '100%',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	price: {
		marginTop: 15,
	},
	cardActions: {
		justifyContent: 'space-between',
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
	},
	counterText: {
		margin: 'auto',
		fontSize: 18,
		textAlign: 'center',
	},
}));
