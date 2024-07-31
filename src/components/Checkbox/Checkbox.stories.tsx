import Checkbox from "./Checkbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Demo: Story = {
  args: {
    children: "Checkbox",
  },
};
