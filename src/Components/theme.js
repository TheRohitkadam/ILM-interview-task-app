import { createTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const theme = createTheme({
  //   props: {
  //     MuiDivider: {
  //         color: 'red',
  //     }
  //   },
  typography: {
    fontFamily: [
      "Poppins"
    //   "Roboto",
    //   '"Helvetica Neue"',
    //   "Arial",
    //   "sans-serif",
    ].join(","),
  },
});

export default theme;
