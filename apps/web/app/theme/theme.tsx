import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey, blue, deepPurple } from "@mui/material/colors";

// Define theme with dark/light mode support
const theme = createTheme({
  palette: {
    mode: "light", // Change to "dark" if you want a dark theme
    primary: {
      main: blue[500],
    },
    secondary: {
      main: deepPurple[500],
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: grey[700],
    },
  },
  typography: {
    fontFamily: `"Geist Sans", "Geist Mono", "Arial", sans-serif`,
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      textTransform: "none", // Prevents uppercase buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: "bold",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          borderRadius: "12px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
