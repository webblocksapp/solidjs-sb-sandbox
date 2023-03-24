// Page.stories.ts|tsx

import type { Meta, StoryObj } from 'storybook-solidjs';

import { Page } from './Page';

//👇 Imports all Header stories
import * as HeaderStories from './Header.stories';

const meta: Meta<typeof Page> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Page',
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const LoggedIn: Story = {
  args: {
    ...HeaderStories.LoggedIn.args,
  },
};
