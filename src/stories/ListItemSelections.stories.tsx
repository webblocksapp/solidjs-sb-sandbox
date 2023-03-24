// List.stories.ts|tsx

import type { Meta, StoryObj } from 'storybook-solidjs';

import { List } from './List';

const meta: Meta<typeof List> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Private/ListItemSelection',
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

export const Empty: Story = {};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/solid/api/csf
 * to learn how to use render functions.
 */
export const Selected: Story = {
  args: { children: 'xxx' },
  render: () => <></>,
};

export const Unselected: Story = {
  args: { children: 'yyy' },
  render: () => <></>,
};
