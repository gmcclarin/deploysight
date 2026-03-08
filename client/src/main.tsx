import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
<ThemeProvider theme={theme}>
  <CssBaseline />
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
</ThemeProvider>
);
