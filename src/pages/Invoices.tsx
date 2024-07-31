import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";
import Header from "@/components/Header/Header";
import IconCreateInvoice from "@/components/Icons/IconCreateInvoice";
import IconDots from "@/components/Icons/IconDots";
import IconFilter from "@/components/Icons/IconFilter";
import IconReceipt from "@/components/Icons/IconReceipt";
import IconSearch from "@/components/Icons/IconSearch";
import IconSortArrow from "@/components/Icons/IconSortArrow";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import Select from "@/components/Select/Select";
import { useState } from "react";
import { Link } from "react-router-dom";

function Invoices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div>
      <Header title="Invoices" />
      <div className="flex items-center justify-between mb-8">
        <div className="relative">
          <span className="absolute text-gray-500 left-4 top-5">
            <IconSearch />
          </span>
          <Input
            placeholder="Search invoice..."
            className="pl-12 max-w-[300px]"
          />
        </div>
        <div className="flex gap-4">
          <Link to="/invoices/create-invoice">
            <Button
              variant="primary"
              icon={<IconCreateInvoice />}
              text="Create invoice"
              className="flex-row-reverse "
            />
          </Link>
          <Button
            icon={<IconFilter />}
            text="Filters"
            className="flex-row-reverse !border-gray-300 !text-gray-900"
          />
        </div>
      </div>
      <table
        align="center"
        className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white border-t border-b border-gray-300">
            <th scope="col" className="px-6 py-6">
              <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                <Checkbox className="mr-4" />
                Name
                <span>
                  <IconSortArrow />
                </span>
              </p>
            </th>
            <th scope="col" className="px-6 py-6">
              <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                Date
                <span>
                  <IconSortArrow />
                </span>
              </p>
            </th>
            <th scope="col" className="px-6 py-6">
              <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                Client
                <span>
                  <IconSortArrow />
                </span>
              </p>
            </th>
            <th scope="col" className="px-6 py-6">
              <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                Price
                <span>
                  <IconSortArrow />
                </span>
              </p>
            </th>
            <th scope="col" className="px-6 py-6">
              <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                Status
                <span>
                  <IconSortArrow />
                </span>
              </p>
            </th>
            <th scope="col" className="px-6 py-6">
              <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                Actions
                <span>
                  <IconSortArrow />
                </span>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <Checkbox className="mr-4" />
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-5">
                <IconReceipt />
              </div>
              <div>
                <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                  New Design Project
                </p>
                <p className="leading-5 text-gray-600 text-14 font-500">
                  INV110XXX
                </p>
              </div>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    January 05, 2022
                  </p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Biffco Enterprises
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-800">
              $1,240.00
            </td>
            <td className="px-6 py-4">
              <div className="w-20 px-3 py-2 text-center rounded-lg text-success-1 bg-success-4/10">
                Paid
              </div>
            </td>
            <td className="px-10 py-4">
              <button className="flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-300 rounded-lg">
                <IconDots />
              </button>
            </td>
          </tr>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <Checkbox className="mr-4" />
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-5">
                <IconReceipt />
              </div>
              <div>
                <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                  New Design Project
                </p>
                <p className="leading-5 text-gray-600 text-14 font-500">
                  INV110XXX
                </p>
              </div>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    January 05, 2022
                  </p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Biffco Enterprises
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-800">
              $1,240.00
            </td>
            <td className="px-6 py-4">
              <div className="w-20 px-3 py-2 text-center rounded-lg text-success-1 bg-success-4/10">
                Paid
              </div>
            </td>
            <td className="px-10 py-4">
              <button className="flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-300 rounded-lg">
                <IconDots />
              </button>
            </td>
          </tr>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <Checkbox className="mr-4" />
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-5">
                <IconReceipt />
              </div>
              <div>
                <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                  New Design Project
                </p>
                <p className="leading-5 text-gray-600 text-14 font-500">
                  INV110XXX
                </p>
              </div>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    January 05, 2022
                  </p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Biffco Enterprises
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-800">
              $1,240.00
            </td>
            <td className="px-6 py-4">
              <div className="w-20 px-3 py-2 text-center rounded-lg text-success-1 bg-success-4/10">
                Paid
              </div>
            </td>
            <td className="px-10 py-4">
              <button className="flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-300 rounded-lg">
                <IconDots />
              </button>
            </td>
          </tr>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <Checkbox className="mr-4" />
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-5">
                <IconReceipt />
              </div>
              <div>
                <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                  New Design Project
                </p>
                <p className="leading-5 text-gray-600 text-14 font-500">
                  INV110XXX
                </p>
              </div>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    January 05, 2022
                  </p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Biffco Enterprises
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-800">
              $1,240.00
            </td>
            <td className="px-6 py-4">
              <div className="w-20 px-3 py-2 text-center rounded-lg text-success-1 bg-success-4/10">
                Paid
              </div>
            </td>
            <td className="px-10 py-4">
              <button className="flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-300 rounded-lg">
                <IconDots />
              </button>
            </td>
          </tr>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <Checkbox className="mr-4" />
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-5">
                <IconReceipt />
              </div>
              <div>
                <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                  New Design Project
                </p>
                <p className="leading-5 text-gray-600 text-14 font-500">
                  INV110XXX
                </p>
              </div>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    January 05, 2022
                  </p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Biffco Enterprises
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-800">
              $1,240.00
            </td>
            <td className="px-6 py-4">
              <div className="w-20 px-3 py-2 text-center rounded-lg text-success-1 bg-success-4/10">
                Paid
              </div>
            </td>
            <td className="px-10 py-4">
              <button className="flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-300 rounded-lg">
                <IconDots />
              </button>
            </td>
          </tr>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <Checkbox className="mr-4" />
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-5">
                <IconReceipt />
              </div>
              <div>
                <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                  New Design Project
                </p>
                <p className="leading-5 text-gray-600 text-14 font-500">
                  INV110XXX
                </p>
              </div>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    January 05, 2022
                  </p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Biffco Enterprises
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-800">
              $1,240.00
            </td>
            <td className="px-6 py-4">
              <div className="w-20 px-3 py-2 text-center rounded-lg text-success-1 bg-success-4/10">
                Paid
              </div>
            </td>
            <td className="px-10 py-4">
              <button className="flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-300 rounded-lg">
                <IconDots />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="mb-6 border-b border-gray-200">
          <h2 className="mb-4 text-lg font-bold">Add Recipient</h2>
        </div>
        <div className="mb-6">
          <h3 className="mb-3 leading-5 text-gray-600 text-14 font-800">
            Currency
          </h3>
          <Select options={options} placeholder="Select an option" />
        </div>
        <div className="mb-6">
          <h3 className="mb-3 leading-5 text-gray-600 text-14 font-800">
            Recipient type
          </h3>
          <Select options={options} placeholder="Select an option" />
        </div>
        <div className="mb-6">
          <h3 className="mb-3 leading-5 text-gray-600 text-14 font-800">
            Email
          </h3>
          <Input placeholder="Enter emai  l" className="h-12" />
        </div>
        <div className="mb-6">
          <h3 className="mb-3 leading-5 text-gray-600 text-14 font-800">
            Full name of the account holder
          </h3>
          <Input
            placeholder="Enter full name of the account holder"
            className="h-12"
          />
        </div>
        <h2 className="pb-3 mb-4 leading-6 text-gray-900 border-b border-gray-200 text-16 font-800">
          Bank Details
        </h2>
        <div className="mb-6">
          <h3 className="mb-3 leading-5 text-gray-600 text-14 font-800">IBN</h3>
          <Input placeholder="OV1286709756483" className="h-12" />
        </div>
      </Modal>
    </div>
  );
}

export default Invoices;
