import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Demo: Story = {
  args: {
    text: "Button",
    variant: "primary",
  },
};
