// src/components/Modal/Modal.stories.tsx

import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button text="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          btnText="Continue"
        >
          <p>This is a modal content!</p>
        </Modal>
      </>
    );
  },
  args: {
    btnText: "Close Modal",
  },
};
