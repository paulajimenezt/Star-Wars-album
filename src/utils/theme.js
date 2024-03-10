import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffe81f",
    },
    secondary: {
      main: "#df0000",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00b844",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
