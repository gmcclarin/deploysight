import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4F46E5",
    },
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});