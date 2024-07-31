import Select from "./Select";
import type { Meta, StoryObj } from "@storybook/react";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  argTypes: {},
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Demo: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
  render: () => <Select options={options} placeholder="Select" />,
};
