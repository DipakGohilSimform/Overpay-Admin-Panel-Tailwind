import Input from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Demo: Story = {
  args: {
    type: "text",
    placeholder: "Input",
  },
};
