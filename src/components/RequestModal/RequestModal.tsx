import IconEdit from "../Icons/IconEdit";
import Modal from "../Modal/Modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function RequestModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      btnText="Send Request"
      width="540px"
    >
      <div className="mb-8">
        <h3 className="pt-16 mb-3 leading-8 text-center text-gray-900 text-24 font-800">
          Review detail of your request
        </h3>
        <p className="max-w-[400px] mx-auto mb-8 leading-5 text-center text-gray-600 text-21 font-500">
          You can request multiple payment from up to 20 people
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="leading-4 text-gray-900 text-14 font-800">
            Request details
          </p>
          <button className="flex items-center gap-2 leading-5 text-primary-1 text-14 font-500">
            <IconEdit />
            Edit
          </button>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="leading-4 text-gray-600 text-14 font-500">
            You request
          </p>
          <p className="mb-3 leading-5 text-primary-1 text-14 font-800">
            $980.00
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="leading-4 text-gray-600 text-14 font-500">Total fees</p>
          <p className="mb-3 leading-5 text-gray-900 text-14 font-500">
            -$10.00
          </p>
        </div>
        <div className="flex items-center justify-between py-1 pb-6 mb-6 border-b border-gray-300">
          <p className="leading-4 text-gray-600 text-14 font-500">
            You receive
          </p>
          <p className="mb-3 leading-5 text-gray-900 text-14 font-800">
            $970.00
          </p>
        </div>
        <div className="flex items-center justify-between mb-6">
          <p className="leading-4 text-gray-900 text-14 font-800">
            Request from
          </p>
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

export default RequestModal;
