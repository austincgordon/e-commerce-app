import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	root: {
		// maxWidth: 345, original width style
		maxWidth: '90%',
	},
	content: {
		width: '100%',
	},
	media: {
		height: 0,
		paddingTop: '100%',
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'flex-start',
	},
}));
