import Images from "@/config/images";
import IconArrow from "../Icons/IconArrow";
import IconPlus from "../Icons/IconPlus";
import Modal from "../Modal/Modal";
import IconVisa from "../Icons/IconVisa";
import Radio from "../Radio/Radio";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SendMoneyModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} btnText="Continue" width="510px">
      <div className="mb-6 ">
        <h3 className="pt-16 mb-3 leading-8 text-center text-gray-900 text-24 font-800">
          Send Money
        </h3>
        <p className="mb-6 leading-4 text-center text-gray-500 text-14 font-500">
          Please enter user information that you want to send money and enter an
          amount
        </p>
      </div>

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

      <div className="flex gap-6 mb-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-3 bg-gray-100 rounded-full cursor-pointer h-14 w-14">
            <IconPlus />
          </div>
          <p className="leading-5 text-gray-900 text-14 font-500">Add</p>
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

      <div className="flex items-center justify-between mb-6">
        <h3 className="leading-6 text-gray-900 text-16 font-800">
          Choose Method
        </h3>
        <button className="text-gray-900 leading-5 text-12 font-500 border border-gray-200 rounded-3xl flex items-center gap-[2px] justify-center px-3 py-2">
          Add
          <span>
            <IconPlus />
          </span>
        </button>
      </div>

      <div className="flex gap-5 mb-10">
        <div className="grow">
          <div className="flex items-center justify-between p-4 mb-3 border border-gray-200 grow rounded-2xl">
            <div className="flex gap-3 mr-6">
              <div className="flex items-center justify-center w-10 h-10 text-gray-900 rounded-full bg-gray-50">
                <IconVisa />
              </div>
              <div>
                <p className="mb-1 leading-5 text-gray-900 text-12 font-800">
                  Visa
                </p>
                <p className="leading-3 text-gray-600 text-10 font-500">
                  $24,098.00
                </p>
              </div>
            </div>
            <Radio />
          </div>

          <div className="flex items-center justify-between p-4 mb-3 border border-gray-200 grow rounded-2xl">
            <div className="flex gap-3 mr-6">
              <div className="flex items-center justify-center w-10 h-10 text-gray-900 rounded-full bg-gray-50">
                <IconVisa />
              </div>
              <div>
                <p className="mb-1 leading-5 text-gray-900 text-12 font-800">
                  Visa
                </p>
                <p className="leading-3 text-gray-600 text-10 font-500">
                  $24,098.00
                </p>
              </div>
            </div>
            <Radio />
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 grow rounded-2xl">
            <div className="flex gap-3 mr-6">
              <div className="flex items-center justify-center w-10 h-10 text-gray-900 rounded-full bg-gray-50">
                <IconVisa />
              </div>
              <div>
                <p className="mb-1 leading-5 text-gray-900 text-12 font-800">
                  Visa
                </p>
                <p className="leading-3 text-gray-600 text-10 font-500">
                  $24,098.00
                </p>
              </div>
            </div>
            <Radio />
          </div>
        </div>

        <div>
          <img src={Images.Card} alt="..." className="mb-3 rounded-2xl" />
          <div className="p-3 border border-gray-200 rounded-2xl">
            <p className="mb-2 leading-4 text-gray-600 text-12 font-500">
              Enter Amount
            </p>
            <div className="relative flex items-center justify-between gap-1 ">
              <input
                placeholder="$1,24"
                type="text"
                className="leading-8 text-gray-900 bg-white outline-none font-800 text-18"
              />
              <img
                src={Images.USD}
                alt="avatar"
                className="absolute right-0 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SendMoneyModal;
