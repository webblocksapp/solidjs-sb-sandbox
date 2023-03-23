import { Preview } from 'storybook-solidjs';
import { ThemeProvider } from 'solid-styled-components';

//TODO: Preview type needs to be added at storybook-solidjs
//TODO: .storybook/tsconfig.json needs to be added at storybook-solidjs.
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider
        theme={{
          colors: {
            primary: 'hotpink',
          },
        }}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
