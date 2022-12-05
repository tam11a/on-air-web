import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#EE796E",
      main: "#DC483A",
      dark: "#A2352B",
      contrastText: "#1c2330",
    },
    secondary: {
      light: "#a7d6fc",
      main: "#8fcdff",
      dark: "#78a7cc",
      contrastText: "#fff",
    },
    background: {
      default: "#1c2330",
      paper: "#202736",
    },
  },

  typography: {

    fontFamily: "Alegreya Sans SC, sans-serif",
    allVariants: {
      color: '#ccc'
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "2px",
          textTransform: "unset",
        },
      },
    },
  },
});

export default theme;