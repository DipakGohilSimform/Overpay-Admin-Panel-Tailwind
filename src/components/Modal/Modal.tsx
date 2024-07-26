import React, { ReactNode } from "react";
import Button from "../Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  btnText?: string;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  btnText,
  width = "450px", // Default width
}) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="p-6 bg-white shadow-lg rounded-2xl" style={{ width }}>
        <div className="relative bg-white">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-primary-1"
          >
            ✕
          </button>
          <div className="mb-6">{children}</div>
          {btnText && (
            <Button variant="primary" text={btnText} className="w-full !h-12" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
