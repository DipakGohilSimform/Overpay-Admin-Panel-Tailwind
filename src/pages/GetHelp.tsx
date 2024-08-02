import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import IconArrow from "@/components/Icons/IconArrow";
import IconBag from "@/components/Icons/IconBag";
import IconDoller from "@/components/Icons/IconDoller";
import { IconLike } from "@/components/Icons/IconLike";
import IconSearch from "@/components/Icons/IconSearch";
import IconSend from "@/components/Icons/IconSend";
import { IconTag } from "@/components/Icons/IconTag";
import IconUser from "@/components/Icons/IconUser";
import Input from "@/components/Input/Input";
import Images from "@/config/images";
import { Link } from "react-router-dom";

function GetHelp() {
  return (
    <div>
      <Header title="Get Help" />
      <div className="flex border-gray-300">
        <div className="basis-[500px] shrink-0 p-10 border-r border-gray-300">
          <div className="px-8 py-10 mb-10 bg-secondary-5 rounded-2xl">
            <h2 className="mb-2 leading-6 text-gray-900 text-24 font-800">
              Hi, how can we help?
            </h2>
            <p className="mb-8 leading-5 text-gray-600 text-14 font-500">
              Type your question or search keyword
            </p>
            <div className="relative mb-6">
              <span className="absolute text-gray-500 left-4 top-5">
                <IconSearch />
              </span>
              <Input placeholder="Search" className="w-full pl-12" />
            </div>
            <h5 className="mb-3 leading-4 text-gray-600 text-12 font-500">
              Popular search:
            </h5>
            <div className="flex gap-3">
              <Button
                text="Send Money"
                className="!leading-4 !text-12 !font-600"
              />
              <Button
                text="Transfer"
                className="!leading-4 !text-12 !font-600"
              />
              <Button
                text="Change Card"
                className="!leading-4 !text-12 !font-600"
              />
            </div>
          </div>
          <div>
            <Link
              to="#"
              className="flex items-center justify-between gap-4 px-4 py-6 mb-6 transition-all border border-gray-200 group rounded-2xl hover:border-primary-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full text-20 group-hover:text-white group-hover:bg-primary-1">
                  <IconSend />
                </div>
                <div>
                  <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                    Sending Money
                  </h4>
                  <p className="leading-5 text-gray-600 text-12 font-400 max-w-[240px]">
                    Setting up, paying for, editing, and canceling transfers
                  </p>
                </div>
              </div>
              <div className="text-gray-500 scale-125 -rotate-90">
                <IconArrow />
              </div>
            </Link>
            <Link
              to="#"
              className="flex items-center justify-between gap-4 px-4 py-6 mb-6 transition-all border border-gray-200 group rounded-2xl hover:border-primary-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full text-20 group-hover:text-white group-hover:bg-primary-1">
                  <IconUser />
                </div>
                <div>
                  <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                    Managing Your Account
                  </h4>
                  <p className="leading-5 text-gray-600 text-12 font-400 max-w-[240px]">
                    Setting up your account and getting verified
                  </p>
                </div>
              </div>
              <div className="text-gray-500 scale-125 -rotate-90">
                <IconArrow />
              </div>
            </Link>
            <Link
              to="#"
              className="flex items-center justify-between gap-4 px-4 py-6 mb-6 transition-all border border-gray-200 group rounded-2xl hover:border-primary-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full text-20 group-hover:text-white group-hover:bg-primary-1">
                  <IconDoller />
                </div>
                <div>
                  <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                    Holding Money
                  </h4>
                  <p className="leading-5 text-gray-600 text-12 font-400 max-w-[240px]">
                    Holding balances, setting up cards debits, and using assets
                  </p>
                </div>
              </div>
              <div className="text-gray-500 scale-125 -rotate-90">
                <IconArrow />
              </div>
            </Link>
            <Link
              to="#"
              className="flex items-center justify-between gap-4 px-4 py-6 mb-6 transition-all border border-gray-200 group rounded-2xl hover:border-primary-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full text-20 group-hover:text-white group-hover:bg-primary-1">
                  <IconBag />
                </div>
                <div>
                  <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                    Overpay Business
                  </h4>
                  <p className="leading-5 text-gray-600 text-12 font-400 max-w-[240px]">
                    Multi-users access, accounting, and using our API
                  </p>
                </div>
              </div>
              <div className="text-gray-500 scale-125 -rotate-90">
                <IconArrow />
              </div>
            </Link>
          </div>
        </div>
        <div className="p-10 basis-auto grow">
          <div className="mb-12">
            <h2 className="mb-2 leading-6 text-gray-900 text-24 font-800">
              Holding Money
            </h2>
            <p className="leading-5 text-gray-600 text-14 font-500">
              Holding balances, setting up cards debits, and using assets
            </p>
          </div>
          <div className="p-6 mb-6 border border-gray-200 rounded-2xl">
            <h3 className="mb-3 leading-6 text-gray-900 text-18 font-800">
              Why can't I open balance?
            </h3>
            <p className="mb-8 leading-5 text-gray-600 text-14 font-500">
              We'd like to offer balances to everyone. But there are a few
              countries and US states where you can't open any balances just
              yet.
            </p>
            <div className="flex items-center justify-between">
              <img src={Images.Logo} alt="..." className="h-5" />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <IconTag />
                  <span className="leading-5 text-gray-600 text-14 font-500">
                    Money basic, Balance
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IconLike />
                  <span className="leading-5 text-gray-600 text-14 font-500">
                    20
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 mb-6 border border-gray-200 rounded-2xl">
            <h3 className="mb-3 leading-6 text-gray-900 text-18 font-800">
              How do I set up Direct Debits?
            </h3>
            <p className="mb-8 leading-5 text-gray-600 text-14 font-500">
              When you set up a Direct Debit, you give a company permission to
              take regular payments from your account. You might use Direct
              Debits to pay for a monthly subscription like the gym, or to pay
              your phone or energy bill.
            </p>
            <div className="flex items-center justify-between">
              <img src={Images.Logo} alt="..." className="h-5" />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <IconTag />
                  <span className="leading-5 text-gray-600 text-14 font-500">
                    Debit, Managing
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IconLike />
                  <span className="leading-5 text-gray-600 text-14 font-500">
                    10
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 mb-6 border border-gray-200 rounded-2xl">
            <h3 className="mb-3 leading-6 text-gray-900 text-18 font-800">
              How do I open a balance?
            </h3>
            <p className="mb-8 leading-5 text-gray-600 text-14 font-500">
              Add money to your balances whenever you like. Just choose which
              currency you'd like to add to, then click Add money. When you add
              money to your balances, make sure it comes from your own bank
              account. If you want to add money to your business account, make
              sure the money comes from your company's bank account.
            </p>
            <div className="flex items-center justify-between">
              <img src={Images.Logo} alt="..." className="h-5" />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <IconTag />
                  <span className="leading-5 text-gray-600 text-14 font-500">
                    Money basic, Balance
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IconLike />
                  <span className="leading-5 text-gray-600 text-14 font-500">
                    25
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 mb-6 border border-gray-200 rounded-2xl">
            <h3 className="mb-3 leading-6 text-gray-900 text-18 font-800">
              How do I cancel a Direct Debit?
            </h3>
            <p className="mb-8 leading-5 text-gray-600 text-14 font-500">
              Cancelling a Direct Debit won't cancel the contract or
              subscription you have with the company you were paying. So don't
              forget to cancel with them, or give them different account
              details.
            </p>
            <div className="flex items-center justify-between">
              <img src={Images.Logo} alt="..." className="h-5" />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <IconTag />
                  <span className="leading-5 text-gray-600 text-14 font-500">
                    Money basic, Balance
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IconLike />
                  <span className="leading-5 text-gray-600 text-14 font-500">
                    20
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetHelp;
