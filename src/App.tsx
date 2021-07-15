import { Routes } from "navigation/routes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import ResetStyles from "styles/reset";
import theme from 'styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}
