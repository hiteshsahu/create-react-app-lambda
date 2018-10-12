import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import styles from "../Theme";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import ButtonBase from '@material-ui/core/ButtonBase';

class RecipeReviewCard extends React.Component {
  render() {
    const { classes } = this.props;

    return (

    <ButtonBase
      onClick={this.props.handleOpen}>
      <Card style={{
        backgroundColor: "#607d8b",
        opacity: "0.8"}}>
        <CardActionArea style={{ height: '100%'}}>
          <CardHeader
            classes={{
              title: classes.title
            }}
            avatar={
              <Avatar aria-label="Project" 
              style={{
                backgroundColor: this.props.project.bg_color
              }}
               >
                {this.props.project.name &&
                  this.props.project.name.charAt(0).toUpperCase()}
              </Avatar>
            }
            title={  <Typography 
              variant="h6" 
              noWrap
              style= {{color: "red"}} 
             component="p">
               {this.props.project.name}
             </Typography>}
            subheader={this.props.project.client}
          />

          <div className={classes.overlayContainer}>
            <img
              style= {{objectFit: 'cover',width:'100%'}}
              alt={this.props.project.name}
              className={classes.overlayCover}
              ref={img => (this.img = img)}
              src={
                typeof this.props.project.image_url === "undefined" ||
                this.props.project.image_url.trim().length === 0
                  ? "https://images.pexels.com/photos/1035682/pexels-photo-1035682.jpeg?auto=compress&cs=tinysrgb&h=350"
                  : this.props.project.image_url
              }
              onError={() =>
                (this.img.src =
                  "https://images.pexels.com/photos/457496/pexels-photo-457496.jpeg?auto=compress&cs=tinysrgb&h=350")
              }
            />

            <div className={classes.chipArrayContainer}>
              <div className={classes.chipArray}>
                {this.props.project.skills &&
                  Object.keys(this.props.project.skills).map(key => (
                    <Chip
                      className={classes.chip}
                      variant="outlined"
                      key={key}
                      label={this.props.project.skills[key]}
                    />
                  ))}
              </div>
            </div>
          </div>

          <CardContent
            style={{
              height: 150,
              color :'white',
              overflowY: "scroll"
            }}
          >
            <Typography component="p"   style={{
              color :'white'}}>{this.props.project.summary}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </ButtonBase>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
