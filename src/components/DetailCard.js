import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Chip from "@material-ui/core/Chip";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

    root: {
        padding : 5,
        background: '#f5f5f5',
        alignItems: 'center',
        overflowX: 'hidden',

    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    cover: {
        height: 300,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    chipArrayContainer: {
        color: "white",
    },
    chipArray: {
        display: "flex",
        flexWrap: "wrap",
        overflowY: "none"
    },
    chip: {
        color: "#1de9b6 ",
        borderColor: "#1de9b6 ",
        margin: theme.spacing.unit / 2
    },
});

function MediaControlCard(props) {
    const { classes, theme } = props;

    return (

        <div className={classes.root}>
            <Grid container spacing={8}>
               
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <CardMedia
                            className={classes.cover}
                            image={props.project.image_url}
                            title={props.project.name}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>

                        <Typography  variant="h4">
                            {props.project.name}
                        </Typography>


                        <div className={classes.chipArrayContainer}>
                            <div className={classes.chipArray}>
                                {props.project.skills &&
                                    Object.keys(props.project.skills).map(key => (
                                        <Chip
                                            className={classes.chip}
                                            variant="outlined"
                                            key={key}
                                            label={props.project.skills[key]}
                                        />
                                    ))}
                            </div>
                        </div>

                          <Typography  variant="h5">
                           Summary
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary">
                            {props.project.summary}
                        </Typography>

                        <br />

                         <Typography variant="h5">
                           Responsibility
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary">
                            {props.project.responsibility}
                        </Typography>


                        <div className={classes.controls}>
                            <IconButton aria-label="Previous">
                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                            </IconButton>
                            <IconButton aria-label="Play/pause">
                                <PlayArrowIcon className={classes.playIcon} />
                            </IconButton>
                            <IconButton aria-label="Next">
                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                            </IconButton>
                        </div>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm ={8}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
            </Grid>

        </div>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);