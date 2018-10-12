import red from "@material-ui/core/colors/red";

const Styles = theme => ({
  root: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    padding: 0,
    margin: 0
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  fullWidth: {
    flex: 1
  },
  margin: {
    margin: theme.spacing.unit
  },
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    overflow: "scroll",
    height: "80vh",
    width: "100vw",
    color: "white",
    opacity: "0.8"
  },
  card: {
    width: 300
  },

  title: {
    color: "red",
    fontSize: 20,
  },
  avatar: {
    backgroundColor: red[500]
  },
  chipArrayContainer: {
    position: "absolute",
    width: "100%",
    background: 'linear-gradient(to  bottom,rgba(0, 0, 0, 0), rgba(0, 0, 0), rgba(0, 0, 0))' ,
    color: "white",
    bottom: 0,
    left: 0
  },
  chipArray: {
    display: "flex",
    maxHeight: 200,
    justifyContent: "center",
    flexWrap: "wrap",
    overflowY: "none"
  },
  chip: {
    color: "#1de9b6 ",
    borderColor: "#1de9b6 ",
    margin: theme.spacing.unit / 2
  },
  overlayContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  overlayCover: {
    width: "auto",
    height: "200px"
  },
  actions: {
    display: "flex",
    padding: 2
  },
  iconHover: {
    "&:hover": {
      color: "#1de9b6"
    }
  },
  noData: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },

  checkbox: {
    color: "#00e676",
    '&$checked': {
      color: "#00e676",
    },
  },
});
export default Styles;
