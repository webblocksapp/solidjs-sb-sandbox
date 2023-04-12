import { Preview } from 'storybook-solidjs';
import { ThemeProvider } from 'solid-styled-components';
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize({ onUnhandledRequest: 'bypass' });

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
    mswDecorator,
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
