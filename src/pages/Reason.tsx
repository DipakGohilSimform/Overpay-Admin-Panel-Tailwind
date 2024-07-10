import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import IconAsset from "@/components/Icons/IconAsset";
import IconCar from "@/components/Icons/IconCar";
import IconMoney from "@/components/Icons/IconMoney";
import IconWallet from "@/components/Icons/IconWallet";
import OverpayReason from "@/components/OverpayReason/OverpayReason";

export default function Reason() {
  return (
    <AuthWrapper page="reason">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="max-w-[456px] text-32 font-800 leading-10 text-gray-900 text-center mb-4">
            Tell us your main reason for using Overpay?
          </h1>
          <p className="max-w-[456px] leading-6 text-gray-500 text-16 font-500 mb-14 text-center">
            Tell us about the current situation and we will make the right
            recommendations for you
          </p>
          <div className="flex gap-6 ">
            <div className="flex flex-wrap gap-6">
              <OverpayReason icon={<IconWallet />} text="Spend or save daily" />
              <OverpayReason icon={<IconCar />} text="Spend while travelling" />
              <OverpayReason icon={<IconMoney />} text="Send money worldwide" />
              <OverpayReason
                icon={<IconAsset />}
                text="Gain exposure to financial assets"
              />
            </div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}
