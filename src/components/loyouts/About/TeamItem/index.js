import React, { Fragment } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	paperLeft: {
		marginLeft: '0',
		marginTop: '20px',
		maxWidth: 500,
	},
	paperRight: {
		marginRight: '0',
		marginLeft: 'auto',
		marginTop: '20px',
		maxWidth: 500
	},
	image: {
		width: 128,
		height: 128,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
});


const TeamItem = ({ item: { id, img, name, description, position } }) => {
	const classes = useStyles();
	
	const paperClass = position === 'left' ? classes.paperLeft : classes.paperRight
	
	return (
		<Fragment>
			<Paper className={ paperClass }>
				<Grid container spacing={ 2 }>
					<Grid item>
						<ButtonBase className={ classes.image }>
							<img className={ classes.img } alt="complex"
							     src={img}/>
						</ButtonBase>
					</Grid>
					<Grid item xs={ 12 } sm container>
						<Grid item xs container direction="column" spacing={ 2 }>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1">
									{name}
								</Typography>
								<Typography variant="body2" gutterBottom>
									{description}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Fragment>
	);
};

export default TeamItem;