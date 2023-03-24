// Page.stories.ts|tsx

import type { Meta, StoryObj } from 'storybook-solidjs';

import { Page } from './Page';

const meta: Meta<typeof Page> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PageSlots',
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const CustomFooter: Story = {
  render: (args) => (
    <Page {...args}>
      <footer>{args.footer}</footer>
    </Page>
  ),
  args: {
    footer: 'Built with Storybook',
  },
};
