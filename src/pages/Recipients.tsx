import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import IconFilter from "@/components/Icons/IconFilter";
import IconPlus from "@/components/Icons/IconPlus";
import IconSearch from "@/components/Icons/IconSearch";
import IconSortArrow from "@/components/Icons/IconSortArrow";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import Select from "@/components/Select/Select";
import Images from "@/config/images";
import { useState } from "react";

function Recipients() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div>
      <Header title="Recipients" />
      <div className="flex items-center justify-between mb-8">
        <div className="relative">
          <span className="absolute text-gray-500 left-4 top-5">
            <IconSearch />
          </span>
          <Input
            placeholder="Search for transactions..."
            className="pl-12 max-w-[300px]"
          />
        </div>
        <div className="flex gap-4">
          <Button
            variant="primary"
            onClick={openModal}
            icon={<IconPlus />}
            text="Add New"
            className="flex-row-reverse "
          />
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
              <label className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                Name/Business
                <span>
                  <IconSortArrow />
                </span>
              </label>
            </th>
            <th scope="col" className="px-6 py-6">
              <label className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                Email
                <span>
                  <IconSortArrow />
                </span>
              </label>
            </th>
            <th scope="col" className="px-6 py-6">
              <label className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                Account type
                <span>
                  <IconSortArrow />
                </span>
              </label>
            </th>
            <th scope="col" className="px-6 py-6">
              <label className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                Currency
                <span>
                  <IconSortArrow />
                </span>
              </label>
            </th>
            <th scope="col" className="px-6 py-6">
              <label className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                Currency
                <span>
                  <IconSortArrow />
                </span>
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <img src={Images.Avatar} alt="bitcoin" className="w-10 h-10" />
              <label className="mb-1 leading-6 text-gray-900 text-16 font-800">
                Guy Hawkins
              </label>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <label className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    guy.hawkins@mail.com
                  </label>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Business
            </td>
            <td>
              <div className="flex items-center gap-2 p-6">
                <img src={Images.USD} alt="usd" className="w-6 h-6" />
                <label className="leading-6 text-gray-900 text-16 font-600">
                  USD
                </label>
              </div>
            </td>
            <td className="leading-6 text-gray-900 text-16 font-600">
              20 Jan 2022, 09.00 PM
            </td>
          </tr>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <img src={Images.Avatar} alt="bitcoin" className="w-10 h-10" />
              <label className="mb-1 leading-6 text-gray-900 text-16 font-800">
                Guy Hawkins
              </label>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <label className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    guy.hawkins@mail.com
                  </label>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Business
            </td>
            <td>
              <div className="flex items-center gap-2 p-6">
                <img src={Images.USD} alt="usd" className="w-6 h-6" />
                <label className="leading-6 text-gray-900 text-16 font-600">
                  USD
                </label>
              </div>
            </td>
            <td className="leading-6 text-gray-900 text-16 font-600">
              20 Jan 2022, 09.00 PM
            </td>
          </tr>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <img src={Images.Avatar} alt="bitcoin" className="w-10 h-10" />
              <label className="mb-1 leading-6 text-gray-900 text-16 font-800">
                Guy Hawkins
              </label>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <label className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    guy.hawkins@mail.com
                  </label>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Business
            </td>
            <td>
              <div className="flex items-center gap-2 p-6">
                <img src={Images.USD} alt="usd" className="w-6 h-6" />
                <label className="leading-6 text-gray-900 text-16 font-600">
                  USD
                </label>
              </div>
            </td>
            <td className="leading-6 text-gray-900 text-16 font-600">
              20 Jan 2022, 09.00 PM
            </td>
          </tr>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <img src={Images.Avatar} alt="bitcoin" className="w-10 h-10" />
              <label className="mb-1 leading-6 text-gray-900 text-16 font-800">
                Guy Hawkins
              </label>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <label className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    guy.hawkins@mail.com
                  </label>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Business
            </td>
            <td>
              <div className="flex items-center gap-2 p-6">
                <img src={Images.USD} alt="usd" className="w-6 h-6" />
                <label className="leading-6 text-gray-900 text-16 font-600">
                  USD
                </label>
              </div>
            </td>
            <td className="leading-6 text-gray-900 text-16 font-600">
              20 Jan 2022, 09.00 PM
            </td>
          </tr>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <img src={Images.Avatar} alt="bitcoin" className="w-10 h-10" />
              <label className="mb-1 leading-6 text-gray-900 text-16 font-800">
                Guy Hawkins
              </label>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <label className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    guy.hawkins@mail.com
                  </label>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Business
            </td>
            <td>
              <div className="flex items-center gap-2 p-6">
                <img src={Images.USD} alt="usd" className="w-6 h-6" />
                <label className="leading-6 text-gray-900 text-16 font-600">
                  USD
                </label>
              </div>
            </td>
            <td className="leading-6 text-gray-900 text-16 font-600">
              20 Jan 2022, 09.00 PM
            </td>
          </tr>
          <tr className="bg-white border-t border-b border-gray-300">
            <th
              scope="row"
              className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
            >
              <img src={Images.Avatar} alt="bitcoin" className="w-10 h-10" />
              <label className="mb-1 leading-6 text-gray-900 text-16 font-800">
                Guy Hawkins
              </label>
            </th>
            <td className="px-6 py-4 ">
              <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                <div>
                  <label className="mb-1 leading-6 text-gray-900 text-16 font-600">
                    guy.hawkins@mail.com
                  </label>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-600">
              Business
            </td>
            <td>
              <div className="flex items-center gap-2 p-6">
                <img src={Images.USD} alt="usd" className="w-6 h-6" />
                <label className="leading-6 text-gray-900 text-16 font-600">
                  USD
                </label>
              </div>
            </td>
            <td className="leading-6 text-gray-900 text-16 font-600">
              20 Jan 2022, 09.00 PM
            </td>
          </tr>
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="mb-6 border-b border-gray-200">
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            Add Recipient
          </h2>
        </div>
        <form
          action="
        "
        >
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
            <Input placeholder="Enter email" className="h-12" />
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
            <h3 className="mb-3 leading-5 text-gray-600 text-14 font-800">
              IBN
            </h3>
            <Input placeholder="OV1286709756483" className="h-12" />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Recipients;
