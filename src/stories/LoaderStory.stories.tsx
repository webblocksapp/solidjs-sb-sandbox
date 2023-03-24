// MyComponent.stories.ts|tsx

import type { Meta, StoryObj } from 'storybook-solidjs';

import { TodoItem } from './TodoItem';

const meta: Meta<typeof TodoItem> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/solid/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Loader',
  component: TodoItem,
  render: (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />,
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Primary: Story = {
  loaders: [
    async () => ({
      todo: await (
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
      ).json(),
    }),
  ],
};
