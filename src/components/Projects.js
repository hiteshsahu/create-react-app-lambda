import React from "react";
import Data from "../data/Data";
import Card from "./Card";
import classNames from 'classnames';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Search from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BankingIcon from '@material-ui/icons/AccountBalance';
import MusicIcon from '@material-ui/icons/MusicNote';
import ElectricIcon from '@material-ui/icons/Memory';
import SortByNameIcon from '@material-ui/icons/SortByAlpha';
import SortByYearIcon from '@material-ui/icons/History';
import ShowArrayIcon from '@material-ui/icons/ViewArray';
import ShowGridIcon from '@material-ui/icons/Apps';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AnimatedNumber from 'react-animated-number';
import CardHorizontal from "./CardHorizontal"
import BottomSheet from "./BottomSheet";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    minWidth: 220,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
  },

  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Projects extends React.Component {

  state = {
    searchKey: '',
    sortBy: '',
    domain: '',
    selectedProject: 'project_9',
    showCart: true,
    showGrid: false,
    project: Data.PROJECTS,
    bigValue: 1024,
  };


  handleCartOpen = (id) => {
    this.setState({
      showCart: true,
      selectedProject: id
    });
  };

  handleCartClose = () => {
    this.setState({ showCart: false });
  };


  filterByDomain = event => {
    this.setState({ domain: event.target.value });

    var domainKey = event.target.value.toLowerCase()
    if (domainKey != "") {
      this.setState({
        project: Data.PROJECTS.filter(item => item.domain.toLowerCase().includes(domainKey))
      })
    } else {
      this.setState({ project: Data.PROJECTS })
    }
  };

  sortProjects = event => {
    this.setState({ sortBy: event.target.value });

    var sortKey = event.target.value.toLowerCase()
    if (sortKey != "") {
      this.setState({
        project: sortKey == "year" ? Data.PROJECTS.sort((a, b) => b.year - a.year) : Data.PROJECTS.sort((a, b) => a.name.localeCompare(b.name))
      })
    } else {
      this.setState({ project: Data.PROJECTS })
    }
  };

  handleChange = event => {
    this.setState({ searchKey: event.target.value })

    var searchKey = event.target.value.toLowerCase()
    if (this.state.searchKey != "") {
      this.setState({
        project: Data.PROJECTS.filter(item => item.name.toLowerCase().includes(searchKey))
      })
    } else {
      this.setState({ project: Data.PROJECTS })
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <div >


        <Paper className={classes.mainFeaturedPost}>
          <Grid container>
            <Grid item md={12}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography variant="h4" color="inherit" gutterBottom>
                  I enjoy developing Mobile Applications and Websites.
            </Typography>

                <Typography variant="h6" color="inherit" paragraph>
                  Multiple lines of text that form the lede, informing new readers quickly and
                  efficiently about what&apos;s most interesting in this post&apos;s contents…
            </Typography>

                <div>
                </div>

                <AnimatedNumber
                  style={{
                    transition: '0.8s ease-out',
                    fontSize: 48,
                    transitionProperty:
                      'background-color, color, opacity'
                  }}
                  stepPrecision={0}
                  frameStyle={perc => (
                    perc === 100 ? {} : { opacity: 0.25 }
                  )}
                  duration={3000}
                  value={this.state.bigValue}
                  component="text"
                />

              </div>
            </Grid>
          </Grid>
        </Paper>



        <Paper className={classes.root}>

          <h2>Featured projects</h2>

          <FormControl className={classes.margin}>
            <InputLabel htmlFor="adornment-password">Search</InputLabel>
            <Input
              type={'text'}
              value={this.state.searchKey}
              onChange={this.handleChange}
              startAdornment={
                <InputAdornment position="start">
                  {<Search />}
                </InputAdornment>
              }
            />
            <FormHelperText
              style={{ color: 'teal', }} >
              {this.state.searchKey == "" ?
                "Search By Name" : "Found " + this.state.project.length + "/" + Data.PROJECTS.length + " Projects"
              }</FormHelperText>
          </FormControl>

          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="domain-label-placeholder">
              Filter
          </InputLabel>
            <Select
              value={this.state.domain}
              onChange={this.filterByDomain}
              input={<Input name="domain" id="domain-label-placeholder" />}
              displayEmpty
              name="domain"
            >
              <MenuItem value="">
                None
            </MenuItem>

              <MenuItem value={"Banking"}>
                <ListItemIcon style={{ color: "#2979ff" }}>
                  <BankingIcon />
                </ListItemIcon>
                <ListItemText inset primary="Banking" />
              </MenuItem>

              <MenuItem value={"Electronics"}>
                <ListItemIcon style={{ color: "#00bfa5" }}>
                  <ElectricIcon />
                </ListItemIcon>
                <ListItemText inset primary="Electronics" />
              </MenuItem>

              <MenuItem value={"MultiMedia"}>
                <ListItemIcon style={{ color: "#aa00ff" }}>
                  <MusicIcon />
                </ListItemIcon>
                <ListItemText inset primary="MultiMedia" />
              </MenuItem>

            </Select>
            <FormHelperText
              style={{ color: 'teal', }} >
              {this.state.domain == "" ?
                "Filter by Domain" : "Found "
                + this.state.project.length + "/"
                + Data.PROJECTS.length + " " + this.state.domain + " Projects"
              }</FormHelperText>
          </FormControl>


          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="sort-label-placeholder">
              Sort
          </InputLabel>
            <Select
              value={this.state.sortBy}
              onChange={this.sortProjects}
              input={<Input name="sortBy" id="sort-label-placeholder" />}
              displayEmpty
              name="sortBy"
            >
              <MenuItem value="">
                None
             </MenuItem>

              <MenuItem value={"name"}>
                <ListItemIcon style={{ color: "#2979ff" }}>
                  <SortByNameIcon />
                </ListItemIcon>
                <ListItemText inset primary="Name" />
              </MenuItem>

              <MenuItem value={"year"}>
                <ListItemIcon style={{ color: "#00bfa5" }}>
                  <SortByYearIcon />
                </ListItemIcon>
                <ListItemText inset primary="Newest" />
              </MenuItem>


            </Select>
            <FormHelperText
              style={{ color: 'teal', }} >
              Sort by {this.state.sortBy}</FormHelperText>
          </FormControl>


          <Button variant="extendedFab"
            color="primary"
            aria-label="Toggle Mode"
            onClick={() => this.setState({ showGrid: !this.state.showGrid })}  >
            {this.state.showGrid ?
              <ShowArrayIcon />
              :
              <ShowGridIcon />
            }
            {this.state.showGrid ? "Show Array" : "Show Grid"}

          </Button>


          {this.state.showGrid && <Grid container spacing={16}
            direction="row"
            justify="center"
            alignItems="center"
          >

            {this.state.project.map((projects, index) => (
              <Slide direction="up" in={true}
                mountOnEnter
                unmountOnExit
                {...{ timeout: 300 * index }}
                key={projects.id}>
                <Grid item xs={12} sm={6} md={4} lg={3} key={projects.id}>

                  <Card project={projects}
                    handleOpen={() => this.handleCartOpen(projects.id)} />
                  />
                </Grid>
              </Slide>

            ))}

          </Grid>
          }

          {!this.state.showGrid && <div style={{
            maxWidth: '100vw',
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'scroll'
          }} >
            {this.state.project.map((projects, index) => (
              <Slide direction="up" in={true}
                mountOnEnter unmountOnExit
                {...{ timeout: 100 * index }}
                key={projects.id} >
                <CardHorizontal
                  project={projects}
                  handleOpen={() => this.handleCartOpen(projects.id)} />
              </Slide>
            ))}
          </div>
          }
        </Paper>

        <BottomSheet
          project={(this.state.project.filter(item => item.id == this.state.selectedProject))[0]}
          handleOpen={this.handleCartOpen}
          handleClose={this.handleCartClose}
          open={this.state.showCart}
        />
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
