// ButtonGroup.stories.ts|tsx

import type { Meta, StoryObj } from 'storybook-solidjs';

import { ButtonGroup } from './ButtonGroup';

//👇 Imports the Button stories
import * as ButtonStories from './ButtonUsingArgs.stories';

const meta: Meta<typeof ButtonGroup> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ButtonGroup',
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Pair: Story = {
  args: {
    buttons: [
      { ...ButtonStories.Primary.args },
      { ...ButtonStories.Secondary.args },
    ],
    orientation: 'horizontal',
  },
};
