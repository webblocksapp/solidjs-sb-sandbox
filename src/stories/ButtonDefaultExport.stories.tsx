// Button.stories.ts|tsx
import { Meta } from 'storybook-solidjs';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ButtonDefaultExport',
  component: Button,
};

export default meta;

export const Primary = {
  render: () => <Button primary label="Button" />,
};
