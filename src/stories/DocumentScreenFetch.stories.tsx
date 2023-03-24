// YourPage.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from 'storybook-solidjs';

import { rest } from 'msw';

import { DocumentScreen } from './DocumentScreen';

const meta: Meta<typeof DocumentScreen> = {
  title: 'DocumentScreenFetch',
  component: DocumentScreen,
};

export default meta;
type Story = StoryObj<typeof DocumentScreen>;

// 👇 The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 2,
      userID: 1,
      title: 'Something else',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'awaiting review',
    },
    {
      id: 3,
      userID: 2,
      title: 'Another document',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 4,
      userID: 2,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};

export const MockedSuccess: Story = {
  parameters: {
    msw: [
      rest.get(
        'https://jsonplaceholder.typicode.com/todos',
        (_req, res, ctx) => {
          return res(ctx.json(TestData));
        }
      ),
    ],
  },
};

export const MockedError: Story = {
  parameters: {
    msw: [
      rest.get(
        'https://jsonplaceholder.typicode.com/todos',
        (_req, res, ctx) => {
          return res(ctx.delay(800), ctx.status(403));
        }
      ),
    ],
  },
};
