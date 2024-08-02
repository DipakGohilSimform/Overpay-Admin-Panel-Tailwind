import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import IconExport from "@/components/Icons/IconExport";
import IconFilter from "@/components/Icons/IconFilter";
import IconSearch from "@/components/Icons/IconSearch";
import IconSortArrow from "@/components/Icons/IconSortArrow";
import Input from "@/components/Input/Input";
import Images from "@/config/images";

function Transactions() {
  return (
    <div>
      <Header title="Transactions" />
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
            icon={<IconFilter />}
            text="Filters"
            className="flex-row-reverse !border-gray-300 !text-gray-900"
          />
          <Button
            icon={<IconExport />}
            text="Exports"
            className="flex-row-reverse !border-gray-300 !text-gray-900"
          />
        </div>
      </div>
      <div className="min-w-[600px] overflow-auto">
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
                  Date
                  <span>
                    <IconSortArrow />
                  </span>
                </label>
              </th>
              <th scope="col" className="px-6 py-6">
                <label className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                  Invoice ID
                  <span>
                    <IconSortArrow />
                  </span>
                </label>
              </th>
              <th scope="col" className="px-6 py-6">
                <label className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                  Amount
                  <span>
                    <IconSortArrow />
                  </span>
                </label>
              </th>
              <th scope="col" className="px-6 py-6">
                <label className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                  Status
                  <span>
                    <IconSortArrow />
                  </span>
                </label>
              </th>
              <th scope="col" className="px-6 py-6">
                <label className="flex items-center gap-3 leading-6 text-gray-600 text-16 font-800">
                  Actions
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
                <img src={Images.Bitcoin} alt="bitcoin" className="w-10 h-10" />
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                    Stripe
                  </p>
                  <label className="leading-5 text-gray-600 text-14 font-500">
                    Witdraw
                  </label>
                </div>
              </th>
              <td className="px-6 py-4 ">
                <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                  <div>
                    <p className="mb-1 leading-6 text-gray-900 text-16 font-500">
                      Jan 29, 2022
                    </p>
                    <label className="leading-5 text-gray-600 text-14 font-500">
                      at 08.00 PM
                    </label>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-500">
                PMX09812
              </td>
              <td className="px-6 py-4 text-gray-900 text-14 font-800">
                +$300.00
              </td>
              <td className="px-6 py-4">
                <div className="w-20 px-3 py-2 rounded-lg text-success-1 bg-success-4/10">
                  Success
                </div>
              </td>
              <td className="px-6 py-4">
                <Button
                  text="Filters"
                  className="!h-10 !border-gray-300 !text-gray-900"
                />
              </td>
            </tr>
            <tr className="bg-white border-t border-b border-gray-300">
              <th
                scope="row"
                className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
              >
                <img src={Images.Bitcoin} alt="bitcoin" className="w-10 h-10" />
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                    Stripe
                  </p>
                  <label className="leading-5 text-gray-600 text-14 font-500">
                    Witdraw
                  </label>
                </div>
              </th>
              <td className="px-6 py-4 ">
                <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                  <div>
                    <p className="mb-1 leading-6 text-gray-900 text-16 font-500">
                      Jan 29, 2022
                    </p>
                    <label className="leading-5 text-gray-600 text-14 font-500">
                      at 08.00 PM
                    </label>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-500">
                PMX09812
              </td>
              <td className="px-6 py-4 text-gray-900 text-14 font-800">
                +$300.00
              </td>
              <td className="px-6 py-4">
                <div className="w-20 px-3 py-2 rounded-lg text-success-1 bg-success-4/10">
                  Success
                </div>
              </td>
              <td className="px-6 py-4">
                <Button
                  text="Filters"
                  className="!h-10 !border-gray-300 !text-gray-900"
                />
              </td>
            </tr>
            <tr className="bg-white border-t border-b border-gray-300">
              <th
                scope="row"
                className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
              >
                <img src={Images.Bitcoin} alt="bitcoin" className="w-10 h-10" />
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                    Stripe
                  </p>
                  <label className="leading-5 text-gray-600 text-14 font-500">
                    Witdraw
                  </label>
                </div>
              </th>
              <td className="px-6 py-4 ">
                <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                  <div>
                    <p className="mb-1 leading-6 text-gray-900 text-16 font-500">
                      Jan 29, 2022
                    </p>
                    <label className="leading-5 text-gray-600 text-14 font-500">
                      at 08.00 PM
                    </label>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-500">
                PMX09812
              </td>
              <td className="px-6 py-4 text-gray-900 text-14 font-800">
                +$300.00
              </td>
              <td className="px-6 py-4">
                <div className="w-20 px-3 py-2 rounded-lg text-success-1 bg-success-4/10">
                  Success
                </div>
              </td>
              <td className="px-6 py-4">
                <Button
                  text="Filters"
                  className="!h-10 !border-gray-300 !text-gray-900"
                />
              </td>
            </tr>
            <tr className="bg-white border-t border-b border-gray-300">
              <th
                scope="row"
                className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
              >
                <img src={Images.Bitcoin} alt="bitcoin" className="w-10 h-10" />
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                    Stripe
                  </p>
                  <label className="leading-5 text-gray-600 text-14 font-500">
                    Witdraw
                  </label>
                </div>
              </th>
              <td className="px-6 py-4 ">
                <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                  <div>
                    <p className="mb-1 leading-6 text-gray-900 text-16 font-500">
                      Jan 29, 2022
                    </p>
                    <label className="leading-5 text-gray-600 text-14 font-500">
                      at 08.00 PM
                    </label>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-500">
                PMX09812
              </td>
              <td className="px-6 py-4 text-gray-900 text-14 font-800">
                +$300.00
              </td>
              <td className="px-6 py-4">
                <div className="w-20 px-3 py-2 rounded-lg text-success-1 bg-success-4/10">
                  Success
                </div>
              </td>
              <td className="px-6 py-4">
                <Button
                  text="Filters"
                  className="!h-10 !border-gray-300 !text-gray-900"
                />
              </td>
            </tr>
            <tr className="bg-white border-t border-b border-gray-300">
              <th
                scope="row"
                className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
              >
                <img src={Images.Bitcoin} alt="bitcoin" className="w-10 h-10" />
                <div>
                  <p className="mb-1 leading-6 text-gray-900 text-16 font-800">
                    Stripe
                  </p>
                  <label className="leading-5 text-gray-600 text-14 font-500">
                    Witdraw
                  </label>
                </div>
              </th>
              <td className="px-6 py-4 ">
                <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                  <div>
                    <p className="mb-1 leading-6 text-gray-900 text-16 font-500">
                      Jan 29, 2022
                    </p>
                    <label className="leading-5 text-gray-600 text-14 font-500">
                      at 08.00 PM
                    </label>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 leading-6 text-gray-900 text-16 font-500">
                PMX09812
              </td>
              <td className="px-6 py-4 text-gray-900 text-14 font-800">
                +$300.00
              </td>
              <td className="px-6 py-4">
                <div className="w-20 px-3 py-2 rounded-lg text-success-1 bg-success-4/10">
                  Success
                </div>
              </td>
              <td className="px-6 py-4">
                <Button
                  text="Filters"
                  className="!h-10 !border-gray-300 !text-gray-900"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
