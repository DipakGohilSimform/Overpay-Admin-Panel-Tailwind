import IconEdit from "../Icons/IconEdit";
import Modal from "../Modal/Modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ReceiveMoneyModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      btnText="Confirm and Send"
      width="540px"
    >
      <div className="mb-8">
        <h3 className="pt-16 mb-3 leading-8 text-center text-gray-900 text-24 font-800">
          Review detail of your transfer
        </h3>
        <p className="max-w-[400px] mx-auto mb-8 leading-5 text-center text-gray-600 text-21 font-500">
          Please enter user information that you want to send money and enter an
          amount
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="leading-4 text-gray-900 text-14 font-800">
            Transfer details
          </p>
          <button className="flex items-center gap-2 leading-5 text-primary-1 text-14 font-500">
            <IconEdit />
            Edit
          </button>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="leading-4 text-gray-600 text-14 font-500">You send</p>
          <p className="mb-3 leading-5 text-primary-1 text-14 font-800">
            $1,240.00
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="leading-4 text-gray-600 text-14 font-500">Total fees</p>
          <p className="mb-3 leading-5 text-gray-900 text-14 font-500">
            -$20.00
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="leading-4 text-gray-600 text-14 font-500">
            Amount we'll convert
          </p>
          <p className="mb-3 leading-5 text-gray-900 text-14 font-800">
            $1,220.00
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="leading-4 text-gray-600 text-14 font-500">
            Guarenteed rate (48 hours)
          </p>
          <p className="mb-3 leading-5 text-gray-900 text-14 font-500">
            0.89765
          </p>
        </div>
        <div className="flex items-center justify-between py-1 pb-6 mb-6 border-b border-gray-300">
          <p className="leading-4 text-gray-600 text-14 font-500">
            Should arrive
          </p>
          <p className="mb-3 leading-5 text-gray-900 text-14 font-500">
            by Feb 23
          </p>
        </div>
        <div className="flex items-center justify-between mb-6">
          <p className="leading-4 text-gray-900 text-14 font-800">Recipient</p>
          <button className="flex items-center gap-2 leading-5 text-primary-1 text-14 font-500">
            <IconEdit />
            Edit
          </button>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="leading-4 text-gray-600 text-14 font-500">Name</p>
          <p className="mb-3 leading-5 text-gray-900 text-14 font-800">
            Cyndy Lillibridge
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="leading-4 text-gray-600 text-14 font-500">Email</p>
          <p className="mb-3 leading-5 text-gray-900 text-14 font-500">
            cindylillibridge@mail.com
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="leading-4 text-gray-600 text-14 font-500">
            Account number
          </p>
          <p className="mb-3 leading-4 text-gray-900 text-14 font-500">
            OV123467834656
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default ReceiveMoneyModal;
