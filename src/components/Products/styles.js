import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(4),
	},
	root: {
		flexGrow: 1,
	},
	header: {
		textAlign: 'center',
		marginBottom: 70,
		marginTop: 30,
	},
	buffer: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		[theme.breakpoints.up('md')]: {
			justifyContent: 'flex-end',
		},
	},
	button: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: 40,
		width: 200,
		[theme.breakpoints.up('md')]: {
			marginTop: 100,
		},
	},
}));
