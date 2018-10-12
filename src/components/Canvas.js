import React from "react";
import Gallery from "react-photo-gallery";
import Measure from "react-measure";
import { withStyles } from "@material-ui/core/styles";
import Lightbox from "react-images";
import styles from "../Theme";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const photos = [
  {
    src: "./assets/img/art/s1.jpg",
    width: 3,
    height: 2,
    type: "sketch"
  },
  {
    src: "./assets/img/art/s4.jpg",
    width: '.8',
    height: 1,
    type: "sketch"
  },
  {
    src: "./assets/img/art/c1.jpg",
    width: 3,
    height: 2,
    type: "color"
  },
  {
    src: "./assets/img/art/c2.jpg",
    width: '.8',
    height: 1,
    type: "color"
  },
  {
    src: "./assets/img/art/c3.jpg",
    width: 3,
    height: 2,
    type: "color"
  },

  {
    src: "./assets/img/art/p1.jpg",
    width: 3,
    height: 2,
    type: "crayon"
  },
  {
    src: "./assets/img/art/p2.jpg",
    width: '.8',
    height: 1,
    type: "crayon"
  },
  {
    src: "./assets/img/art/p3.jpg",
    width: 3,
    height: 2,
    type: "crayon"
  },

  {
    src: "./assets/img/art/s2.jpg",
    width: '.8',
    height: 1,
    type: "hybrid"
  },
  {
    src: "./assets/img/art/s3.jpg",
    width: 3,
    height: 2,
    type: "hybrid"
  },
  {
    src: "./assets/img/art/s5.jpg",
    width: '.8',
    height: 1,
    type: "hybrid"
  },
  {
    src: "./assets/img/art/s6.jpg",
    width: '.8',
    height: 1,
    type: "hybrid"
  },

];

// to best see the results, click the popout button in the preview browser
// and resize your browser

class DynamicGallery extends React.Component {

  state = {
    width: -1,
    currentImage: 0,
    sketch: true,
    color: true,
    hybrid: true,
    cryon: true,
    paintings: photos,
  };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  handleback = () => {
    this.props.history.push("/home");
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }



  handleChange = name => event => {

    console.log("paint"+ name + event.target.checked  )

    this.setState({ [name]: event.target.checked },() =>
    this.setState({
      paintings: photos.filter(painting => {


        switch (painting.type) {
          case "sketch":
          console.log("paint"+ JSON.stringify(painting) + " "+ this.state.sketch )
          return this.state.sketch;
          case "crayon":
          return this.state.cryon;
          case "color":
          return this.state.color;
          case "hybrid":
          return this.state.hybrid;
          default:
          return false;
        }
      })
    })
  );
};


  render() {
    const { color, sketch, cryon, hybrid } = this.state;
    const width = this.state.width;
    const { classes } = this.props;

    return (

      <div style={{ display: 'flex', flexDirection: 'column', }}>

        <Paper style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
           padding: 20,
           backgroundColor: "#232323 ", 
           color: '#FFF' 
        }}>

          <FormControl component="fieldset" className={classes.formControl} >
            <FormLabel component="legend"  style={{ color: '#00e676' }}>
              Displaying {this.state.paintings.length} / {photos.length} Arts
            </FormLabel>
         
            <FormGroup row style={{ display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sketch}
                    onChange={this.handleChange('sketch')}
                    style ={{
                      color: "#00e676",
                    }}
                    value="sketch" />
                }
                label={<Typography variant="h6" style={{ color: '#FFF' }}>Sketches</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={color}
                    onChange={this.handleChange('color')}
                    style ={{
                      color: "#00e676",
                    }}
                    value="color" />
                }
                label={<Typography variant="h6" style={{ color: '#FFF' }}>Colored</Typography>}
              />
              <FormControlLabel  
                control={
                  <Checkbox
                    checked={cryon}
                    onChange={this.handleChange('cryon')}
                    style ={{
                      color: "#00e676",
                    }}
                    value="cryon"
                  />
                }
                label={<Typography variant="h6" style={{ color: '#FFF' }}>Cryons</Typography>}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={hybrid}
                    onChange={this.handleChange('hybrid')}
                    style ={{
                      color: "#00e676",
                    }}
                    value="hybrid"
                  />
                }
                label={<Typography variant="h6" style={{ color: '#FFF' }}>Hybrid</Typography>}
              />
            </FormGroup>
            <FormHelperText  style={{ color: '#FFF' }} >Click to enlarge</FormHelperText>
          </FormControl>
        </Paper>

        <Measure
          bounds
          onResize={contentRect =>
            this.setState({ width: contentRect.bounds.width })
          }
        >
          {({ measureRef }) => {
            if (width < 1) {
              return <div ref={measureRef} />;
            }
            let columns = 1;
            if (width >= 480) {
              columns = 2;
            }
            if (width >= 1024) {
              columns = 3;
            }
            if (width >= 1824) {
              columns = 4;
            }
            return (
              <div ref={measureRef}
                style={{
                  height: 'auto',
                  overflow:
                    "none",
                  backgroundColor: "#232323"
                }} >
                <Gallery
                  photos={this.state.paintings}
                  columns={columns}
                  onClick={this.openLightbox}
                />
                <Lightbox
                  images={this.state.paintings}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                />
              </div>
            );
          }}
        </Measure>
      </div>
    );
  }
}
export default withStyles(styles)(DynamicGallery);
