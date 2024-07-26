import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import IconArrow from "@/components/Icons/IconArrow";
import IconArrowRt from "@/components/Icons/IconArrowRt";
import IconCalendar from "@/components/Icons/IconCalendar";
import IconDots from "@/components/Icons/IconDots";
import IconInvoicesm from "@/components/Icons/IconInvoicesm";
import IconMore from "@/components/Icons/IconMore";
import IconRecieve from "@/components/Icons/IconReceive";
import IconSend from "@/components/Icons/IconSend";
import Images from "@/config/images";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Header title="Dashboard" />
      <div className="flex gap-8">
        <div className="grow shrink basis-auto">
          <div className="flex justify-between p-8 min-h-[184px] bg-primary-1 rounded-2xl mb-8">
            <div>
              <h2 className="mb-2 leading-7 text-gray-100 text-24 font-800">
                Unlimited Cashback
              </h2>
              <p className="mb-6 leading-5 text-gray-100 opacity-50 text-16 font-400">
                Instant 2% back on all your spend to your account
              </p>
              <Button
                text="Upgrade Now"
                icon={<IconArrowRt />}
                className="bg-gray-100"
              />
            </div>
            <img
              src={Images.Phone}
              alt="phone"
              className="mr-[-32px] mb-[-32px] max-h-[185px]"
            />
          </div>
          <div className="mb-8 bg-white rounded-2xl">
            <div className="flex items-center justify-between w-full mb-6">
              <h3 className="leading-6 text-gray-900 text-16 font-800">
                Money Flow
              </h3>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <img src={Images.Rect1} alt="rect1" />
                  <p className="leading-5 text-gray-900 text-12 font-600">
                    Income
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={Images.Rect2} alt="rect1" />
                  <p className="leading-5 text-gray-900 text-12 font-600">
                    Expenses
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={Images.MoneyFlow} alt="money flow" className="w-full" />
            </div>
          </div>
          <div className="p-8 min-h-[184px] bg-white rounded-2xl mb-8">
            <div className="flex items-center justify-between w-full mb-6">
              <h3 className="leading-6 text-gray-900 text-16 font-800">
                Recent Transactions
              </h3>
              <div className="flex gap-6">
                <Link
                  to="#"
                  className="flex items-center gap-1 px-3 py-2 text-gray-900 transition-all rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-200"
                >
                  View all{" "}
                  <span className="-rotate-90">
                    <IconArrow />
                  </span>
                </Link>
              </div>
            </div>
            {/* table */}
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={Images.Bitcoin}
                        alt="bitcoin"
                        className="w-10 h-10"
                      />
                      Bitcoin transactions
                    </th>
                    <td className="px-6 py-4 ">
                      <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                        <IconCalendar />
                        Jan 16, 2022
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-14 font-800">
                      -$835.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-20 px-3 py-2 rounded-lg text-success-1 bg-success-4">
                        Success
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={Images.Avatar}
                        alt="avatar"
                        className="w-10 h-10"
                      />
                      Sent to Antonio
                    </th>
                    <td className="px-6 py-4 ">
                      <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                        <IconCalendar />
                        Jan 16, 2022
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-14 font-800">
                      -$835.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-20 px-3 py-2 rounded-lg text-orange bg-error-4">
                        Pending
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="flex items-center gap-4 px-6 py-4 text-gray-900 text-14 font-800 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={Images.Paypal}
                        alt="paypal"
                        className="w-10 h-10"
                      />
                      Witdraw Paypal
                    </th>
                    <td className="px-6 py-4 ">
                      <div className="flex items-center gap-1 text-gray-600 text-14 font-500">
                        <IconCalendar />
                        Jan 16, 2022
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900 text-14 font-800">
                      -$835.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-20 px-3 py-2 rounded-lg text-success-1 bg-success-4">
                        Success
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="basis-[365px]">
          <div className="px-6 py-8 mb-8 border border-gray-200 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="leading-6 text-gray-900 text-16 font-800">
                Wallet
              </h3>
              <div className="">
                <IconDots />
              </div>
            </div>
            <img src={Images.Card} alt="card" className="mb-16 rounded-2xl" />
            <div className="flex justify-between gap-5">
              <div>
                <div className="flex items-center justify-center mb-4 border border-gray-200 h-14 w-14 rounded-xl">
                  <IconSend />
                </div>
                <p className="leading-5 text-center text-gray-600 text-14 font-600">
                  Send
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4 border border-gray-200 h-14 w-14 rounded-xl">
                  <IconRecieve />
                </div>
                <p className="leading-5 text-center text-gray-600 text-14 font-600">
                  Receive
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4 border border-gray-200 h-14 w-14 rounded-xl">
                  <IconInvoicesm />
                </div>
                <p className="leading-5 text-center text-gray-600 text-14 font-600">
                  Invoicing
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4 border border-gray-200 h-14 w-14 rounded-xl">
                  <IconMore />
                </div>
                <p className="leading-5 text-center text-gray-600 text-14 font-600">
                  More
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 py-8 border border-gray-200 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="leading-6 text-gray-900 text-16 font-800">
                Quick Transfer
              </h3>
            </div>
            <div className="flex items-center justify-between p-4 mb-4 border border-gray-200 rounded-2xl">
              <img src={Images.Debit} alt="debit" className="h-5" />
              <div className="flex items-center justify-between gap-1 text-gray-900">
                <p className="leading-5 text-14 font-800">$10,431</p>
                <IconArrow />
              </div>
            </div>
            <div className="p-4 mb-8 border border-primary-1 rounded-2xl">
              <p className="mb-4 leading-4 text-gray-600 text-12 font-500">
                Enter Amount
              </p>
              <div className="relative flex items-center justify-between gap-1 ">
                <input
                  placeholder="$1,24"
                  type="text"
                  className="leading-8 text-gray-900 bg-white outline-none font-800 text-24"
                />
                <img
                  src={Images.Avatar}
                  alt="avatar"
                  className="absolute right-6 h-7"
                />
                <img
                  src={Images.Avatar2}
                  alt="avatar"
                  className="absolute right-0 h-7"
                />
              </div>
            </div>
            <Button variant="primary" text="Send Money" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
