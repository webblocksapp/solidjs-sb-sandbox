// List.stories.ts|tsx

import type { Meta, StoryObj } from 'storybook-solidjs';

import { List } from './List';
import { ListItem } from './ListItem';

//👇 All ListItem stories are imported
import { Selected, Unselected } from './ListItemSelections.stories';

const meta: Meta<typeof List> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ListReuseData',
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/solid/api/csf
 * to learn how to use render functions.
 */
export const ManyItems: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem {...Selected.args} />
      <ListItem {...Unselected.args} />
      <ListItem {...Unselected.args} />
    </List>
  ),
};
