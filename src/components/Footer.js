import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },

  layout: {
    width: "auto",
    overflow: 'hidden'
 
  },

  footer: {
    padding: `${theme.spacing.unit * 6}px 0`,
    backgroundColor :"#455a64 ", 
    color: '#FFF'
  },
  lightTooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        {/* Footer */}
        <footer className={classNames(classes.footer, classes.layout)}>

          <Grid container spacing={24} justify="space-evenly">


            {/* Contact Info */}
            <Grid item xs={12} sm={6} md ={3}>
              <Typography variant="title"  style = {{color:"#FFF"}} gutterBottom>
                Contact For Business
            </Typography>

              <a href="">📞+49 17635794240</a><br />
              <a href="">📱 +90 88888-13275</a><br />
              <a href="">✉ hiteshkrsahu@gmail.com</a><br />
            </Grid>


            {/* Social Icons */}
            <Grid item xs={12} sm={6} md ={3} >
              <Typography variant="title"  style = {{color:"#FFF"}} gutterBottom>
                Stay Connected
            </Typography>

              <Tooltip title="Facebook"  classes={{ tooltip: classes.lightTooltip }}>
                <Button variant="fab" mini aria-label="Facebook" style= {{backgroundColor: "#fff", color: "#3b5998"}}  className={classes.button}>
                  <SvgIcon>
                    <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-f" class="svg-inline--fa fa-facebook-f fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
                  </SvgIcon>
                </Button></Tooltip>

              <Tooltip title="GitHub "  classes={{ tooltip: classes.lightTooltip }}>
                <Button variant="fab" mini aria-label="GitHub" style= {{backgroundColor: "#4078c0", color: "#FFF"}} className={classes.button}>
                  <SvgIcon>
                    <svg aria-hidden="true" data-prefix="fab" data-icon="github-alt" class="svg-inline--fa fa-github-alt fa-w-15" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>                  </SvgIcon>
                </Button></Tooltip>

              <Tooltip title="Linkedin"  classes={{ tooltip: classes.lightTooltip }}>
                <Button variant="fab" mini aria-label="Linkedin" style= {{backgroundColor: "#0077b5", color: "#FFF"}} className={classes.button}>
                  <SvgIcon>
                    <svg aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></svg>                  </SvgIcon>
                </Button></Tooltip>

              <Tooltip title="StackOverflow"  classes={{ tooltip: classes.lightTooltip }}>
                <Button variant="fab" mini aria-label="StackOverflow" style= {{backgroundColor: "#FFF", color: "#f48024"}} className={classes.button}>
                  <SvgIcon>
                    <svg aria-hidden="true" data-prefix="fab" data-icon="stack-overflow" class="svg-inline--fa fa-stack-overflow fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M293.7 300l-181.2-84.5 16.7-36.5 181.3 84.7-16.8 36.3zm48-76L188.2 95.7l-25.5 30.8 153.5 128.3 25.5-30.8zm39.6-31.7L262 32l-32 24 119.3 160.3 32-24zM290.7 311L95 269.7 86.8 309l195.7 41 8.2-39zm31.6 129H42.7V320h-40v160h359.5V320h-40v120zm-39.8-80h-200v39.7h200V360z"></path></svg>
                  </SvgIcon>
                </Button></Tooltip>

              <Tooltip title="CodePen"  classes={{ tooltip: classes.lightTooltip }}>
                <Button variant="fab" mini aria-label="CodePen" style= {{backgroundColor: "#FFF", color: "#000"}} className={classes.button}>
                  <SvgIcon>
                    <svg aria-hidden="true" data-prefix="fab" data-icon="codepen" class="svg-inline--fa fa-codepen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg>
                  </SvgIcon>
                </Button></Tooltip>

            </Grid>

            <Grid item xs={12} sm={6} md ={3}>
              <Typography variant="title" style = {{color:"#FFF"}}  gutterBottom>
                Legal
            </Typography>

              <a href="">Privacy policy</a><br />
              <a href="">Terms of use</a><br />
              <a href="">Credit</a><br />
            </Grid>


            <Grid item xs={12} sm={6} md ={3}>
              <Typography variant="title" style = {{color:"#FFF"}} gutterBottom>
                Published Apps
            </Typography>

               <Typography variant="p" style = {{color:"#FFF"}}  gutterBottom>
                View on Playstore
            </Typography>

              <a href=""><img src ="./assets/svg/playstore.svg" style ={{width:150}}></img> </a><br />

            </Grid>

          </Grid>

        </footer> 
        {/* End footer */}
        <Typography variant="subtitle1" align="center"  style= {{backgroundColor: "#263238", color: "#fff", padding:5}}  component="p">
         Made with 💻 © Copyright 2017-2018 hiteshSahu.com
          </Typography>
      </React.Fragment>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
