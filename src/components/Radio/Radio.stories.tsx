import Radio from "./Radio";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Demo: Story = {
  args: {
    children: "Radio",
  },
};
