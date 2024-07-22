import React, { ReactNode } from "react";
import Button from "../Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 w-[450px] bg-white rounded-2xl shadow-lg">
        <div className="relative bg-white">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-primary-1"
          >
            ✕
          </button>
          <div className="mb-6">{children}</div>
          <Button variant="primary" text="Confirm" className="w-full !h-12" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
