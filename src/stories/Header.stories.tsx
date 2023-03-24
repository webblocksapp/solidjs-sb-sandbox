// Button.stories.ts|tsx

import type { Meta, StoryObj } from 'storybook-solidjs';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/solid/api/csf
 * to learn how to use render functions.
 */
export const LoggedIn: Story = {
  args: { logged: true },
};
