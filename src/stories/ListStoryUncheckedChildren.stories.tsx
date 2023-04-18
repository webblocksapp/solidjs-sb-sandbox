// List.stories.js|jsx

import { List } from './List';

//👇 Instead of importing ListItem, we import the stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ListStoryUncheckedChildren',
  component: List,
};

export const OneItem = {
  args: {
    children: <Unchecked {...Unchecked.args} />, //Only works for React - Needs research for Solid.
  },
};
