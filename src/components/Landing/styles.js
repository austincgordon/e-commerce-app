import { makeStyles } from '@material-ui/core';
import RecordStore from '../../assets/recordstore.jpg';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	hero: {
		height: '100vh',
		width: '100%',
		backgroundImage: `url(${RecordStore})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
	landingText: {
		maxWidth: '70%',
		margin: '0 auto',
		paddingBottom: 15,
		paddingTop: 15,
		paddingLeft: 5,
		paddingRight: 5,
		fontSize: 48,
		[theme.breakpoints.down('xs')]: {
			fontSize: 28,
		},
		[theme.breakpoints.down('md')]: {
			fontSize: 36,
		},
		color: 'white',
		textAlign: 'center',
		fontWeight: 700,
		textShadow: '4px 4px 2px #000',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		borderRadius: 10,
	},
	button: {
		marginTop: 25,
		width: 190,
		height: 75,
		fontSize: 24,
	},
}));
