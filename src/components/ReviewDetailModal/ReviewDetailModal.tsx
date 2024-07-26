import Images from "@/config/images";
import IconArrow from "../Icons/IconArrow";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ReviewDetailModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} btnText="Continue" width="510px">
      <div className="mb-8">
        <h3 className="pt-16 mb-3 leading-8 text-center text-gray-900 text-24 font-800">
          Request payment form
        </h3>
        <p className="mb-6 leading-5 text-center text-gray-600 text-14 font-500">
          You can request multiple payment from up to 20 people
        </p>
      </div>

      <Input placeholder="Name, @username, or email" className="mb-6" />
      <div className="flex items-center justify-between mb-6">
        <h3 className="leading-6 text-gray-900 text-16 font-800">
          Recent Contact
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-gray-500 rotate-90 cursor-pointer">
            <IconArrow />
          </span>
          <span className="text-gray-500 -rotate-90 cursor-pointer">
            <IconArrow />
          </span>
        </div>
      </div>

      <div className="flex justify-between gap-6 mb-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-3">
            <img src={Images.Avatar} alt="..." />
          </div>
          <p className="leading-5 text-gray-900 text-14 font-500">Tanner. S</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-3">
            <img src={Images.Avatar} alt="..." />
          </div>
          <p className="leading-5 text-gray-900 text-14 font-500">Tanner. S</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-3">
            <img src={Images.Avatar} alt="..." />
          </div>
          <p className="leading-5 text-gray-900 text-14 font-500">Tanner. S</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-3">
            <img src={Images.Avatar} alt="..." />
          </div>
          <p className="leading-5 text-gray-900 text-14 font-500">Tanner. S</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-3">
            <img src={Images.Avatar} alt="..." />
          </div>
          <p className="leading-5 text-gray-900 text-14 font-500">Tanner. S</p>
        </div>
      </div>
      <div>
        <Input placeholder="Enter an amount" className="mb-6" />
      </div>
    </Modal>
  );
}

export default ReviewDetailModal;
