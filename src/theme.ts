import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#00c5ad",
    },
    secondary: {
      main: "#1a535c",
    },
    error: {
      main: "#95190c",
    },
    warning: {
      main: "#e3b505",
    },
    info: {
      main: "#6c698d",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
