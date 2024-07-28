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

function Messages() {
  return (
    <div>
      <Header title="Message" />
      <div className="flex border-t border-gray-300">
        {/* left-message-bar */}
        <div className="basis-[340px] overflow-auto h-[calc(100vh-160px)] py-8 px-10">
          <div className="sticky top-0">
            <div className="relative mb-6">
              <span className="absolute text-gray-500 left-4 top-5">
                <IconSearch />
              </span>
              <Input placeholder="Search..." className="w-full pl-12" />
            </div>
          </div>
          <div className="py-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="h-6 w-6 rounded-full bg-primary-1 text-white flex justify-center items-center">
                2
              </span>
            </div>
          </div>
          <div className="py-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="h-6 w-6 rounded-full bg-primary-1 text-white flex justify-center items-center">
                2
              </span>
            </div>
          </div>
          <div className="py-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="h-6 w-6 rounded-full bg-primary-1 text-white flex justify-center items-center">
                2
              </span>
            </div>
          </div>
          <div className="py-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img src={Images.Avatar} alt="..." />
                <p className="leading-6 text-gray-900 text-16 font-800">
                  Bertolt Reiner
                </p>
              </div>
              <p className="leading-5 text-gray-900 text-164 font-500">01.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="leading-5 text-gray-900 text-14 font-500">
                We almost done with brief!
              </p>
              <span className="h-6 w-6 rounded-full bg-primary-1 text-white flex justify-center items-center">
                2
              </span>
            </div>
          </div>
        </div>
        {/* message-bar-end */}

        {/* main-body */}
        <div className="h-[calc(100vh-160px)] flex flex-col grow basis-auto border-l border-r border-gray-300">
          <div className="flex basis-[100px] justify-between items-center p-6 border-b">
            <div className="flex gap-4 items-center">
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
            <div className="flex gap-4 items-center">
              <button className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 text-gray-600">
                <IconVideo />
              </button>
              <button className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 text-gray-600">
                <IconPhone />
              </button>
              <button className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 text-gray-600">
                <IconDots />
              </button>
            </div>
          </div>
          <div className="flex grow basis-auto overflow-auto flex-col p-6">
            <div className="flex items-start flex-col justify-start">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-4 bg-gray-100 rounded-custom-1 max-w-[303px] tracking-wider leading-5 text-gray-600 text-12 font-500">
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
            <div className="flex items-end flex-col justify-end">
              <div className="flex items-center gap-4 mb-3 justify-end flex-row-reverse">
                <div className="p-4 bg-primary-1 rounded-custom-1 max-w-[303px] tracking-wider leading-5 text-gray-50 text-12 font-500">
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
              className="w-full h-20 mb-4"
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
        <div className="basis-[300px] h-[calc(100vh-160px)] overflow-auto p-6">
          <div className="flex items-center justify-end mb-7">
            <button className="h-10 w-10 rounded-full border border-gray-200 flex justify-center items-center text-gray-600">
              <IconClose />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center mb-14">
              <img src={Images.Avatar} alt="..." className="mb-6 h-16" />
              <h4 className="leading-6 text-gray-900 text-18 font-800">
                Stefanie Ang
              </h4>
              <p className="leading-5 text-gray-600 text-14 font-500">
                Alesana, XP
              </p>
            </div>
          </div>
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
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
            <div className="flex py-2 justify-between items-center text-gray-600">
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
            <div className="flex py-2 justify-between items-center text-gray-600">
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
            <div className="flex py-2 justify-between items-center text-gray-600">
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
            <div className="flex justify-between items-center mb-6">
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
            <div className="flex gap-3 flex-wrap">
              <div className="h-28 basis-[112px] grow rounded-xl">
                <img src={Images.Item} alt="..." />
              </div>
              <div className="h-28 basis-[112px] grow rounded-xl">
                <img src={Images.Item} alt="..." />
              </div>
              <div className="h-28 basis-[112px] grow rounded-xl">
                <img src={Images.Item} alt="..." />
              </div>
              <div className="h-28 basis-[112px] grow rounded-xl">
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
