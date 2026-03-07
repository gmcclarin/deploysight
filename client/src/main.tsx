import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

<ThemeProvider theme={theme}>
  <CssBaseline />
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
</ThemeProvider>;
