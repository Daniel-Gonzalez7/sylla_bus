import { createTheme } from "@material-ui/core";
import "./index.css";

const theme = createTheme({
  palette: {
    background: {
      default: "#222831",
      paper: "#393E46",
    },
    primary: {
      main: "#FFD369",
    },
    secondary: {
      main: "#EEEEEE",
    },

    text: {
      primary: "#EEEEEE",
      secondary: "#EEEEEE",
    },
  },
  typography: {
    fontFamily: "Overpass Mono, monospace, Roboto, sans-serif",
  },

  components: {
    textField: {},
  },
});

export default theme;
