// Histogram.stories.ts|tsx

import type { Meta, StoryObj } from "storybook-solidjs";

import { Histogram } from "./Histogram";

const meta: Meta<typeof Histogram> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Histogram",
  component: Histogram,
};

export default meta;
type Story = StoryObj<typeof Histogram>;

export const Default: Story = {
  args: {
    dataType: "latency",
    showHistogramLabels: true,
    histogramAccentColor: "#1EA7FD",
    label: "Latency distribution",
  },
};
