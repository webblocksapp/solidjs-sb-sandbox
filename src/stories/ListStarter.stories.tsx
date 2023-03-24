// List.stories.ts|tsx

import type { Meta, StoryObj } from 'storybook-solidjs';

import { List } from './List';

const meta: Meta<typeof List> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

//👇 Always an empty list, not super interesting
export const Empty: Story = {};
