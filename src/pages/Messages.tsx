import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import IconArrow from "@/components/Icons/IconArrow";
import IconClose from "@/components/Icons/IconClose";
import IconDots from "@/components/Icons/IconDots";
import IconEmoji from "@/components/Icons/IconEmoji";
import IconFile from "@/components/Icons/IconFile";
import IconForward from "@/components/Icons/IconForward";
import IconLink from "@/components/Icons/IconLink";
import IconPhone from "@/components/Icons/IconPhone";
import IconPhoto from "@/components/Icons/IconPhoto";
import IconSearch from "@/components/Icons/IconSearch";
import IconVideo from "@/components/Icons/IconVideo";
import Input from "@/components/Input/Input";
import Images from "@/config/images";
import { Link } from "react-router-dom";

function Messages() {
  return (
    <div>
      <Header title="Message" />
      <div className="flex -mx-10 -mb-5 border-t border-gray-300">
        {/* left-message-bar */}
        <div className="basis-[340px] overflow-auto h-[calc(100vh-130px)] ">
          <div className="sticky top-0 px-10 pb-6 bg-white pt-9">
            <div className="relative ">
              <span className="absolute text-gray-500 left-4 top-4">
                <IconSearch />
              </span>
              <Input placeholder="Search..." className="w-full h-12 pl-12" />
            </div>
          </div>
          <Link
            to="#"
            className="inline-block w-full px-10 py-4 transition-all hover:bg-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="flex items-center justify-center w-6 h-6 text-gray-100 rounded-full bg-primary-1">
                2
              </span>
            </div>
          </Link>
          <Link
            to="#"
            className="inline-block w-full px-10 py-4 transition-all hover:bg-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="flex items-center justify-center w-6 h-6 text-gray-100 rounded-full bg-primary-1">
                2
              </span>
            </div>
          </Link>
          <Link
            to="#"
            className="inline-block w-full px-10 py-4 transition-all hover:bg-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="flex items-center justify-center w-6 h-6 text-gray-100 rounded-full bg-primary-1">
                2
              </span>
            </div>
          </Link>
          <Link
            to="#"
            className="inline-block w-full px-10 py-4 transition-all hover:bg-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="flex items-center justify-center w-6 h-6 text-gray-100 rounded-full bg-primary-1">
                2
              </span>
            </div>
          </Link>
          <Link
            to="#"
            className="inline-block w-full px-10 py-4 transition-all hover:bg-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="flex items-center justify-center w-6 h-6 text-gray-100 rounded-full bg-primary-1">
                2
              </span>
            </div>
          </Link>
          <Link
            to="#"
            className="inline-block w-full px-10 py-4 transition-all hover:bg-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="flex items-center justify-center w-6 h-6 text-gray-100 rounded-full bg-primary-1">
                2
              </span>
            </div>
          </Link>
          <Link
            to="#"
            className="inline-block w-full px-10 py-4 transition-all hover:bg-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="flex items-center justify-center w-6 h-6 text-gray-100 rounded-full bg-primary-1">
                2
              </span>
            </div>
          </Link>
          <Link
            to="#"
            className="inline-block w-full px-10 py-4 transition-all hover:bg-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="flex items-center justify-center w-6 h-6 text-gray-100 rounded-full bg-primary-1">
                2
              </span>
            </div>
          </Link>
          <Link
            to="#"
            className="inline-block w-full px-10 py-4 transition-all hover:bg-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="flex items-center justify-center w-6 h-6 text-gray-100 rounded-full bg-primary-1">
                2
              </span>
            </div>
          </Link>
          <Link
            to="#"
            className="inline-block w-full px-10 py-4 transition-all hover:bg-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="flex items-center justify-center w-6 h-6 text-gray-100 rounded-full bg-primary-1">
                2
              </span>
            </div>
          </Link>
        </div>
        {/* message-bar-end */}

        {/* main-body */}
        <div className="h-[calc(100vh-130px)] flex flex-col grow basis-auto border-l border-r border-gray-300">
          <div className="flex basis-[100px] justify-between items-center p-6 border-b border-gray-300">
            <div className="flex items-center gap-4">
              <img src={Images.Avatar} alt="..." />
              <div>
                <h4 className="leading-6 text-gray-900 text-16 font-800">
                  Stefanie Ang
                </h4>
                <p className="leading-5 text-success-1 text-12 font-500">
                  Online
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center w-10 h-10 text-gray-600 border border-gray-200 rounded-full">
                <IconVideo />
              </button>
              <button className="flex items-center justify-center w-10 h-10 text-gray-600 border border-gray-200 rounded-full">
                <IconPhone />
              </button>
              <button className="flex items-center justify-center w-10 h-10 text-gray-600 border border-gray-200 rounded-full">
                <IconDots />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-6 overflow-auto grow basis-auto">
            <div className="flex flex-col items-start justify-start">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-4 bg-gray-200 rounded-custom-1 max-w-[303px] tracking-wider leading-5 text-gray-600 text-12 font-500">
                  Auctor urna, varius duis suspendisse mi in dictum. Interdum
                  egestas ut porttitor tortor aliquet massa.
                </div>
                <button>
                  <IconForward />
                </button>
              </div>
              <div className="flex gap-3">
                <p className="leading-5 text-gray-900 text-12 font-800">
                  Stefanie Ang
                </p>
                <span className="leading-5 text-gray-500 text-12 font-500">
                  08:23 AM
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end justify-end">
              <div className="flex flex-row-reverse items-center justify-end gap-4 mb-3">
                <div className="p-4 bg-primary-1 rounded-custom-1 max-w-[303px] tracking-wider leading-5 text-gray-100 text-12 font-500">
                  Auctor urna, varius duis suspendisse mi in dictum. Interdum
                  egestas ut porttitor tortor aliquet massa.
                </div>
                <button>
                  <IconForward />
                </button>
              </div>
              <div className="flex gap-3 pr-10">
                <span className="leading-5 text-gray-500 text-12 font-500">
                  09:00 AM
                </span>
                <p className="leading-5 text-gray-900 text-12 font-800">You</p>
              </div>
            </div>
          </div>
          <div className="basis-[130px] p-6">
            <Input
              placeholder="Type a message..."
              className="w-full h-20 mb-4 "
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="text-gray-600">
                  <IconPhoto />
                </button>
                <button className="text-gray-600">
                  <IconLink />
                </button>
                <button className="text-gray-600">
                  <IconEmoji />
                </button>
              </div>
              <Button text="Send" variant="primary" className="w-[120px]" />
            </div>
          </div>
        </div>
        {/* main-body-end */}
        <div className="basis-[300px] h-[calc(100vh-130px)] overflow-auto p-6">
          <div className="flex items-center justify-end mb-7">
            <button className="flex items-center justify-center w-10 h-10 text-gray-600 border border-gray-200 rounded-full">
              <IconClose />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center mb-14">
              <img src={Images.Avatar} alt="..." className="h-16 mb-6" />
              <h4 className="leading-6 text-gray-900 text-18 font-800">
                Stefanie Ang
              </h4>
              <p className="leading-5 text-gray-600 text-14 font-500">
                Alesana, XP
              </p>
            </div>
          </div>
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="mb-1 leading-5 text-gray-900 text-14 font-800">
                  Recent files
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-500">
                  120 files
                </p>
              </div>
              <button className="text-gray-500">
                <IconArrow />
              </button>
            </div>
            <div className="flex items-center justify-between py-2 text-gray-600">
              <div className="flex gap-3 text-gray-600">
                <IconFile />
                <p className="leading-5 text-gray-600 text-14 font-600">
                  InvoiceXX.pdf
                </p>
              </div>
              <button>
                <IconDots />
              </button>
            </div>
            <div className="flex items-center justify-between py-2 text-gray-600">
              <div className="flex gap-3 text-gray-600">
                <IconFile />
                <p className="leading-5 text-gray-600 text-14 font-600">
                  InvoiceXX.pdf
                </p>
              </div>
              <button>
                <IconDots />
              </button>
            </div>
            <div className="flex items-center justify-between py-2 text-gray-600">
              <div className="flex gap-3 text-gray-600">
                <IconFile />
                <p className="leading-5 text-gray-600 text-14 font-600">
                  InvoiceXX.pdf
                </p>
              </div>
              <button>
                <IconDots />
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="mb-1 leading-5 text-gray-900 text-14 font-800">
                  Images
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-500">
                  80 images
                </p>
              </div>
              <button className="text-gray-500">
                <IconArrow />
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="h-28 basis-[80px] grow rounded-xl overflow-hidden">
                <img src={Images.Item} alt="..." />
              </div>
              <div className="h-28 basis-[80px] grow rounded-xl overflow-hidden">
                <img src={Images.Item} alt="..." />
              </div>
              <div className="h-28 basis-[80px] grow rounded-xl overflow-hidden">
                <img src={Images.Item} alt="..." />
              </div>
              <div className="h-28 basis-[80px] grow rounded-xl overflow-hidden">
                <img src={Images.Item} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
