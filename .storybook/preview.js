/** @type { import('@storybook/react').Preview } */

import { ThemeProvider } from 'react-jss';
import { theme } from '../src/themes/base-theme/base-theme'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans" rel="stylesheet"/>
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
