import { ThemeProvider } from 'styled-components'
import { addDecorator } from "@storybook/react";
import GlobalStyles from "../src/styles/global";
import ResetStyles from "../src/styles/reset";
import StoryRouter from "storybook-react-router";
import theme from '../src/styles/theme'

addDecorator(StoryRouter());

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
