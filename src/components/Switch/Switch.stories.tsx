// src/components/Switch/Switch.stories.tsx

import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => setIsOn(!isOn);

    return (
      <Switch
        {...args}
        isOn={isOn}
        handleToggle={handleToggle}
        className="border-gray-300"
      />
    );
  },
  args: {
    onColor: "bg-green-500",
    offColor: "bg-gray-300",
  },
};
