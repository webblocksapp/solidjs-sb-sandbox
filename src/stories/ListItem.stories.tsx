import type { Meta, StoryObj } from 'storybook-solidjs';

import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: 'ListItem',
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Unchecked: Story = { args: { unchecked: true } };
