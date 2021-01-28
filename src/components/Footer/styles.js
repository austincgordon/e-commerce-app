import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	main: {
		backgroundColor: '#ededed',
		width: '100%',
		height: 230,
	},
	social: {
		border: '2px solid black',
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 25,
	},
	icon: {
		marginBottom: 15,
	},
}));
