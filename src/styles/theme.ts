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
      light: "#fff",
      main: "#ccc",
      dark: "#aaa",
      contrastText: "#1c2330",
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