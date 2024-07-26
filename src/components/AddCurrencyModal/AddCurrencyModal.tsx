import IconAusDoller from "../Icons/IconAusDoller";
import IconBritish from "../Icons/IconBritish";
import IconFrace from "../Icons/IconFrace";
import IconJapan from "../Icons/IconJapan";
import IconSearch from "../Icons/IconSearch";
import IconSingapore from "../Icons/IconSingapore";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import Radio from "../Radio/Radio";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddCurrencyModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} btnText="Add a Currency">
      <div className="mb-6 ">
        <h3 className="pt-16 mb-3 leading-8 text-center text-gray-900 text-24 font-800">
          Add Currency
        </h3>
        <p className="mb-6 leading-4 text-center text-gray-500 text-14 font-500">
          When you add a currency, any payments you receive in that currency
          will be credited to that balance
        </p>
      </div>
      <div className="relative mb-6">
        <span className="absolute text-gray-500 left-4 top-5">
          <IconSearch />
        </span>
        <Input placeholder="Search" className="w-full pl-12" />
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <IconAusDoller />
          <p className="leading-6 text-gray-900 text-16 font-600">
            Australian Dollar
          </p>
        </div>
        <Radio />
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <IconJapan />
          <p className="leading-6 text-gray-900 text-16 font-600">
            Japanese Yen
          </p>
        </div>
        <Radio />
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <IconSingapore />
          <p className="leading-6 text-gray-900 text-16 font-600">
            Singapore Dollar
          </p>
        </div>
        <Radio />
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <IconBritish />
          <p className="leading-6 text-gray-900 text-16 font-600">
            British Pound
          </p>
        </div>
        <Radio />
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <IconFrace />
          <p className="leading-6 text-gray-900 text-16 font-600">
            Swish Franc
          </p>
        </div>
        <Radio />
      </div>
    </Modal>
  );
}

export default AddCurrencyModal;
