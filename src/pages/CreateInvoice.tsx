import Button from "@/components/Button/Button";
import IconDesign from "@/components/Icons/IconDesign";
import IconDownload from "@/components/Icons/IconDownload";
import IconEmail from "@/components/Icons/IconEmail";
import IconEnt from "@/components/Icons/IconEnt";
import IconEye from "@/components/Icons/IconEye";
import IconItem from "@/components/Icons/IconItem";
import IconLocation from "@/components/Icons/IconLocation";
import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";
import Switch from "@/components/Switch/Switch";
import { Link } from "react-router-dom";

function CreateInvoice() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div>
      <div className="flex justify-between pt-6 pb-10 ">
        <h3 className="leading-8 text-gray-900 text-24 font-800">
          New Invoices: INV111XXX
        </h3>
        <Link
          to="#"
          className="py-3 leading-6 tracking-wide text-primary-1 text-16 font-800 px-7 bg-gray-50 rounded-xl"
        >
          Save Draft
        </Link>
      </div>
      <div className="flex gap-12">
        <div className="grow shrink basis-auto">
          <div className="flex flex-wrap gap-10">
            <div className="grow">
              <h3 className="mb-6 leading-7 text-gray-900 text-20 font-800">
                From:
              </h3>
              <div className="mb-6 flex rounded-xl items-center gap-4 p-8 bg-gray-50 grow basis-[300px]">
                <IconDesign />
                <div>
                  <h4 className="mb-1 leading-6 text-gray-900 text-16 font-800">
                    Overlay Design
                  </h4>
                  <p className="leading-5 text-gray-600 text-12 font-500">
                    OVN1290785
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Email
                </p>
                <div className="relative">
                  <span className="absolute text-gray-500 left-4 top-5">
                    <IconEmail />
                  </span>
                  <Input
                    placeholder="Search email"
                    className="pl-12"
                    value="alesiakarapova@mail.com"
                  />
                </div>
              </div>

              <div className="mb-12">
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Address
                </p>
                <div className="relative">
                  <span className="absolute text-gray-500 left-4 top-5">
                    <IconLocation />
                  </span>
                  <Input
                    placeholder="Search address"
                    className="pl-12"
                    value="6391 Elgin St. Celina, Delaware 10299"
                  />
                </div>
              </div>
            </div>
            <div className="grow">
              <h3 className="mb-6 leading-7 text-gray-900 text-20 font-800">
                From:
              </h3>
              <div className="mb-6 flex rounded-xl items-center gap-4 p-8 bg-gray-50 grow basis-[300px]">
                <IconEnt />
                <div>
                  <h4 className="mb-1 leading-6 text-gray-900 text-16 font-800">
                    Biffco Enterprise
                  </h4>
                  <p className="leading-5 text-gray-600 text-12 font-500">
                    OVN1290785
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Email
                </p>
                <div className="relative">
                  <span className="absolute text-gray-500 left-4 top-5">
                    <IconEmail />
                  </span>
                  <Input placeholder="Search email" className="pl-12" />
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Address
                </p>
                <div className="relative">
                  <span className="absolute text-gray-500 left-4 top-5">
                    <IconLocation />
                  </span>
                  <Input placeholder="Search address" className="pl-12" />
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-[500px] overflow-auto">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr className="bg-white border-b border-gray-300">
                  <th scope="col" className="px-6 py-6">
                    <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                      <span>
                        <IconItem />
                      </span>
                      ITEM
                    </p>
                  </th>
                  <th scope="col" className="px-6 py-6">
                    <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                      QTY
                    </p>
                  </th>
                  <th scope="col" className="px-6 py-6">
                    <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                      HOURS
                    </p>
                  </th>
                  <th scope="col" className="px-6 py-6">
                    <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                      RATE
                    </p>
                  </th>
                  <th scope="col" className="px-6 py-6">
                    <p className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                      TOTAL
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  >
                    Bitcoin transactions
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  >
                    1
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800">
                    40
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800">
                    $10.00
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800">
                    $400.00
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  >
                    Bitcoin transactions
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  >
                    1
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800">
                    40
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800">
                    $10.00
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800">
                    $400.00
                  </td>
                </tr>
                <tr className="bg-white border-b border-gray-300">
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  >
                    <Input placeholder="Description" />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  >
                    <Input placeholder="0" />
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800">
                    <Input placeholder="0" />
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800">
                    <Input placeholder="0" />
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800">
                    $0.00
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-primary-1 text-14 font-800">
                    Add Item
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  ></td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800"></td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-500 ">
                    Subtotal
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800 ">
                    $8,856.00
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  ></td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  ></td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800"></td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-500">
                    Discount
                  </td>
                  <td className="px-6 py-4 text-primary-1 text-14 font-800">
                    Add
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  ></td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  ></td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800"></td>
                  <td className="px-6 py-4 text-gray-900 bg-white border-b border-gray-300 text-14 font-500">
                    Tax
                  </td>
                  <td className="px-6 py-4 bg-white border-b border-gray-300 text-primary-1 text-14 font-800">
                    Add
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  ></td>
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap"
                  ></td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800"></td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-500">
                    Total
                  </td>
                  <td className="px-6 py-4 text-gray-900 text-14 font-800">
                    $8,856.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="basis-[350px]">
          <form action="">
            <div className="p-6 mb-8 border border-gray-200 rounded-2xl">
              <h2 className="mb-8 leading-6 text-gray-900 text-20 font-800">
                Basic Info
              </h2>
              <div className="mb-4">
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Invoice number
                </p>
                <Input placeholder="Invoice Number" value="INV111XXX" />
              </div>
              <div className="mb-4">
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Invoice date
                </p>
                <Input placeholder="Invoice Number" type="date" />
              </div>
              <div className="mb-4">
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Due date
                </p>
                <Input placeholder="Invoice Number" type="date" />
              </div>
              <div className="pb-6 mb-4 border-b border-gray-300">
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Currency
                </p>
                <Select
                  options={options}
                  placeholder="Select an option"
                  className="!p-4 !h-[58px]"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="mb-2 leading-5 text-gray-900 text-14 font-800">
                  Payment method
                </p>
                <div className="scale-75">
                  <Switch />
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="mb-2 leading-5 text-gray-900 text-14 font-800">
                  Late fees
                </p>
                <div className="scale-75">
                  <Switch />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="mb-2 leading-5 text-gray-900 text-14 font-800">
                  Notes
                </p>
                <div className="scale-75">
                  <Switch />
                </div>
              </div>
            </div>
            <Button
              variant="primary"
              text="Send Invoice"
              className="w-full mb-4"
            />
            <div className="flex gap-4">
              <Button
                text="Preview"
                icon={<IconEye />}
                className="flex-row-reverse w-full"
              />
              <Button
                text="Download"
                icon={<IconDownload />}
                className="flex-row-reverse w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateInvoice;
