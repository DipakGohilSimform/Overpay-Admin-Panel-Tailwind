import AddCurrencyModal from "@/components/AddCurrencyModal/AddCurrencyModal";
import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import IconArrow from "@/components/Icons/IconArrow";
import IconCardReceive from "@/components/Icons/IconCardReceive";
import IconCardSend from "@/components/Icons/IconCardSend";
import IconCheckout from "@/components/Icons/IconCheckout";
import IconDeposit from "@/components/Icons/IconDeposit";
import IconDots from "@/components/Icons/IconDots";
import IconEllipse from "@/components/Icons/IconEllipse";
import IconInvoicing from "@/components/Icons/IconInvoicing";
import IconUp from "@/components/Icons/IconUp";
import ReceiveMoneyModal from "@/components/ReceiveMoneyModal/ReceiveMoneyModal";
import RequestModal from "@/components/RequestModal/RequestModal";
import ReviewDetailModal from "@/components/ReviewDetailModal/ReviewDetailModal";
import Select from "@/components/Select/Select";
import SendMoneyModal from "@/components/SendMoneyModal/SendMoneyModal";
import Switch from "@/components/Switch/Switch";
import Images from "@/config/images";
import { useState } from "react";

function MyWallet() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitchOn1, setIsSwitchOn1] = useState(false);

  const handleToggle = () => {
    setIsSwitchOn((prevState) => !prevState);
  };
  const handleToggle1 = () => {
    setIsSwitchOn1((prevState) => !prevState);
  };
  const options = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
  ];
  const [modals, setModals] = useState({
    addCurrency: false,
    sendMoney: false,
    receiveMoney: false,
    reviewDetail: false,
    request: false,
  });

  const openModal = (modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: false }));
  };

  return (
    <div>
      <Header title="MyWallet" />
      <div className="flex gap-8 ">
        <div className="basis-[355px]">
          <div className="p-6 mb-8 border border-gray-200 rounded-2xl">
            <div className="flex items-center justify-between mb-6 text-gray-600">
              <p className="leading-6 text-gray-600 text-16 font-500">
                Total Balance
              </p>
              <div className="cursor-pointer">
                <IconDots />
              </div>
            </div>
            <h3 className="mb-4 leading-10 text-gray-900 text-40 font-800">
              $56,476.00&nbsp;
              <span className="leading-7 opacity-50 text-20">USD</span>
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-success-1">
                <IconUp /> <p className="leading-6 text-16 font-500">2,05%</p>
              </div>
              <IconEllipse />
              <p className="leading-6 text-gray-600 text-16">
                February 05, 2022
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 leading-7 text-gray-900 text-20 font-800">
              Card Lists&nbsp;
              <span className="leading-6 text-gray-500 text-18 font-800">
                2
              </span>
            </h3>
            <div className="mb-4 overflow-hidden rounded-3xl">
              <img src={Images.Card} alt="..." />
            </div>
            <div className="mb-4 overflow-hidden rounded-3xl">
              <img src={Images.Card} alt="..." />
            </div>
            <Button text="Manage Card" className="w-full" />
          </div>
        </div>
        <div className="grow shrink basis-auto">
          <div className="p-6 mb-8 border border-gray-200 rounded-2xl">
            <div className="flex items-center justify-between text-gray-900">
              <h3 className="mb-4 leading-6 text-gray-900 text-16 font-800">
                Quick links
              </h3>
              <IconArrow />
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className="flex flex-col justify-center items-center p-3 basis-[120px] grow border border-gray-200 rounded-2xl"
                onClick={() => openModal("addCurrency")}
              >
                <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-secondary-5">
                  <IconDeposit />
                </div>
                <p className="leading-4 text-gray-900 text-12 font-600">
                  Deposit
                </p>
              </button>
              <button
                className="flex flex-col justify-center items-center p-3 basis-[120px] grow border border-gray-200 rounded-2xl"
                onClick={() => openModal("sendMoney")}
              >
                <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-secondary-5">
                  <IconCardSend />
                </div>
                <p className="leading-4 text-gray-900 text-12 font-600">Send</p>
              </button>
              <button
                className="flex flex-col justify-center items-center p-3 basis-[120px] grow border border-gray-200 rounded-2xl"
                onClick={() => openModal("receiveMoney")}
              >
                <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-secondary-5">
                  <IconCardReceive />
                </div>
                <p className="leading-4 text-gray-900 text-12 font-600">
                  Receive
                </p>
              </button>
              <button
                className="flex flex-col justify-center items-center p-3 basis-[120px] grow border border-gray-200 rounded-2xl"
                onClick={() => openModal("reviewDetail")}
              >
                <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-secondary-5">
                  <IconInvoicing />
                </div>
                <p className="leading-4 text-gray-900 text-12 font-600">
                  Invoicing
                </p>
              </button>
              <button
                className="flex flex-col justify-center items-center p-3 basis-[120px] grow border border-gray-200 rounded-2xl"
                onClick={() => openModal("request")}
              >
                <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-secondary-5">
                  <IconCheckout />
                </div>
                <p className="leading-4 text-gray-900 text-12 font-600">
                  Checkout
                </p>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap mb-8">
            <div className="border-r border-gray-200 basis-[120px] grow p-5">
              <p className="flex items-center justify-between gap-8 leading-7 text-gray-900 text-18 font-700">
                Last <br /> 30 days
                <IconArrow />
              </p>
            </div>
            <div className="border-r border-gray-200 basis-[120px] grow p-5">
              <p className="mb-2 leading-5 text-gray-600 text-14 font-500">
                Transactions
              </p>
              <h4 className="leading-7 text-gray-900 text-18 font-700">56</h4>
            </div>
            <div className="border-r border-gray-200 basis-[120px] grow p-5">
              <p className="mb-2 leading-5 text-gray-600 text-14 font-500">
                Total Spent
              </p>
              <h4 className="leading-7 text-gray-900 text-18 font-700">
                $10,654.00
              </h4>
            </div>
            <div className="basis-[120px] grow p-5">
              <p className="mb-2 leading-5 text-gray-600 text-14 font-500">
                Total Cashback
              </p>
              <h4 className="leading-7 text-gray-900 text-18 font-700">
                $2,456.00
              </h4>
            </div>
          </div>

          <div className="mb-6 border border-gray-200 p-7 rounded-2xl">
            <div className="flex items-center justify-between">
              <h3 className="mb-4 leading-6 text-gray-900 text-16 font-800">
                Statistics
              </h3>
              <div className="flex gap-6">
                <div className="flex items-center">
                  <div className="scale-50">
                    <Switch isOn={isSwitchOn} handleToggle={handleToggle} />
                  </div>
                  <p className="leading-6 text-gray-900 text-12 font-800">
                    Money In
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="scale-50">
                    <Switch isOn={isSwitchOn1} handleToggle={handleToggle1} />
                  </div>
                  <p className="leading-6 text-gray-900 text-12 font-800">
                    Money Out
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={Images.Statistics} alt="..." className="object-cover" />
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="p-6 mb-8 border border-gray-200 rounded-2xl basis-[200px] grow">
              <h3 className="mb-4 leading-6 text-gray-900 text-18 font-800">
                Currency
              </h3>

              <div className="flex justify-between gap-5 py-2">
                <div className="flex items-center gap-2">
                  <img src={Images.USD} alt="..." className="w-6 h-6" />
                  <p className="leading-6 text-gray-900 text-16 font-800">
                    USD
                  </p>
                </div>
                <p className="leading-6 text-gray-900 text-16 font-800">
                  56,476.00{" "}
                  <span className="leading-6 text-gray-900 text-16 font-500">
                    USD
                  </span>
                </p>
              </div>
              <div className="flex justify-between gap-5 py-2">
                <div className="flex items-center gap-2">
                  <img src={Images.USD} alt="..." className="w-6 h-6" />
                  <p className="leading-6 text-gray-900 text-16 font-800">
                    USD
                  </p>
                </div>
                <p className="leading-6 text-gray-900 text-16 font-800">
                  56,476.00{" "}
                  <span className="leading-6 text-gray-900 text-16 font-500">
                    USD
                  </span>
                </p>
              </div>
              <div className="flex justify-between gap-5 py-2">
                <div className="flex items-center gap-2">
                  <img src={Images.USD} alt="..." className="w-6 h-6" />
                  <p className="leading-6 text-gray-900 text-16 font-800">
                    USD
                  </p>
                </div>
                <p className="leading-6 text-gray-900 text-16 font-800">
                  56,476.00{" "}
                  <span className="leading-6 text-gray-900 text-16 font-500">
                    USD
                  </span>
                </p>
              </div>
            </div>
            <div className="p-6 mb-8 border border-gray-200 rounded-2xl basis-[200px] grow">
              <h3 className="mb-4 leading-6 text-gray-900 text-18 font-800">
                Conversion
              </h3>
              <div>
                <div className="flex justify-between gap-5 mb-5">
                  <div className="basis-[130px]">
                    <Select
                      options={options}
                      placeholder="Select"
                      className="!h-[56px]"
                    />
                  </div>
                  <div className="grow">
                    <input
                      placeholder="0"
                      type="text"
                      className="w-full h-12 p-4 leading-6 text-gray-900 bg-white border border-gray-200 rounded-xl font-500 text-16"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="basis-[130px]">
                    <Select
                      options={options}
                      placeholder="Select"
                      className="!h-[56px]"
                    />
                  </div>
                  <div className="grow">
                    <input
                      placeholder="0"
                      type="text"
                      className="w-full h-12 p-4 leading-6 text-gray-900 bg-white border border-gray-200 rounded-xl font-500 text-16"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddCurrencyModal
        isOpen={modals.addCurrency}
        onClose={() => closeModal("addCurrency")}
      />
      <SendMoneyModal
        isOpen={modals.sendMoney}
        onClose={() => closeModal("sendMoney")}
      />
      <ReceiveMoneyModal
        isOpen={modals.receiveMoney}
        onClose={() => closeModal("receiveMoney")}
      />
      <ReviewDetailModal
        isOpen={modals.reviewDetail}
        onClose={() => closeModal("reviewDetail")}
      />
      <RequestModal
        isOpen={modals.request}
        onClose={() => closeModal("request")}
      />
    </div>
  );
}

export default MyWallet;
