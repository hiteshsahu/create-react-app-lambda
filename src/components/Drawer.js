import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Brush';
import LabIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Switch, Route } from "react-router-dom";
import Projects from "./Projects";
import Canvas from "./Canvas";
import Footer from "./Footer";
import { Link } from 'react-router-dom'
import CardActionArea from '@material-ui/core/CardActionArea';
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import ExitFullscreenIcon from '@material-ui/icons/FullscreenExit'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    overflowY: 'scroll',
    backgroundColor: "#f5f5f5   ",
  },
});

class MiniDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  state = {
    open: false,
    title: "Hitesh Sahu",
    fullScreen: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleFullScreen = (event) => {

    var elem = this.node;

    console.log("toggle" + (elem))

    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
      this.setState({ fullScreen: true });
    }
    else {
      cancelFullScreen.call(doc);
      this.setState({ fullScreen: false });
    }
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} style={{ backgroundColor: "#455a64 ", color: '#FFF', textAlign: 'center' }} >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" color="inherit" noWrap style={{ flexGrow: 1, }}>
              {this.state.title}
            </Typography>

            <IconButton
              ref={this.node}
              onClick={((e) => this.handleFullScreen(e))}
              color="inherit">
              {this.state.fullScreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>

            <CardActionArea style={{ width: "100%" }}>
              <Link to='/'>
                <ListItem onClick={() => this.setState({ title: "Work 👨‍💻" })}>
                  <Avatar style={{ backgroundColor: "#2979ff" }}>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText
                    primary={<Typography variant="h6" style={{ color: '#2979ff' }}>Portfolio</Typography>}
                    secondary="Portfolio" />
                </ListItem>
              </Link>
            </CardActionArea>
            <Divider />

            <CardActionArea style={{ width: "100%" }}>
              <Link to='/art'>
                <ListItem onClick={() => this.setState({ title: "Art Work 🎨" })}>
                  <Avatar style={{ backgroundColor: "#f50057" }}>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText
                    primary={<Typography variant="h6" style={{ color: '#f50057' }}>Canvas</Typography>}
                    secondary="Art " />
                </ListItem>
              </Link>
            </CardActionArea>
            <Divider />

            <CardActionArea style={{ width: "100%" }}>
              <ListItem onClick={() => this.setState({ title: "Lab 💡" })}>
                <Avatar style={{ backgroundColor: "#ff6f00" }}>
                  <LabIcon />
                </Avatar>
                <ListItemText
                  primary={<Typography variant="h6" style={{ color: '#ff6f00' }}>Lab</Typography>}
                  secondary="Experiments " />
              </ListItem>
            </CardActionArea>
            <Divider />

            <CardActionArea style={{ width: "100%" }}>
              <ListItem onClick={() => this.setState({ title: "Travel ⛱️" })}>
                <Avatar style={{ backgroundColor: "#00bfa5" }}>
                  <BeachAccessIcon />
                </Avatar>
                <ListItemText
                  primary={<Typography variant="h6" style={{ color: '#00bfa5' }}>Travel</Typography>}
                  secondary="Travel Blog" />
              </ListItem>
            </CardActionArea>
          </List>
          <Divider />

        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/art" component={Canvas} />
          </Switch>
          <Footer />
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);