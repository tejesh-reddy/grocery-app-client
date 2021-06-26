import { createMuiTheme } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";

export const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: "3rem",
        fontWeight: 800
      },
    },
    palette: {
      primary: {
        main: orange[600],
      },
      secondary: {
        main: green[400],
      },
    },
  });
  