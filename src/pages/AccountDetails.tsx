import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import IconCalendar from "@/components/Icons/IconCalendar";
import IconDebit from "@/components/Icons/IconDebit";
import IconLock from "@/components/Icons/IconLock";
import IconProgress from "@/components/Icons/IconProgress";
import IconShield from "@/components/Icons/IconShield";
import IconUser from "@/components/Icons/IconUser";
import Input from "@/components/Input/Input";
import Images from "@/config/images";

function AccountDetails() {
  return (
    <div>
      <Header title="Account details" />
      <div className="flex border-t border-gray-300">
        <div className="basis-[370px] p-10 border-r border-gray-300">
          <div className="mb-12 p-7 rounded-2xl bg-primary-1">
            <div className="flex items-center gap-6 mb-8">
              <IconProgress />
              <div>
                <h4 className="leading-6 text-gray-100 text-16 font-800">
                  Complete profile
                </h4>
                <p className="leading-5 text-gray-100 opacity-60 text-12 font-500">
                  Complete your profile to unlock all features
                </p>
              </div>
            </div>
            <Button
              text="Verify identity"
              variant="secondary"
              className="w-full bg-gray-100"
            />
          </div>

          <div>
            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                <IconUser />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Personal Informations
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  View your detail to receiving money
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                <IconDebit />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Direct Debits
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Set up and manage your direct debit
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                <IconCalendar />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Scheduled Transfer
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Manage transfers that are due to go out
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                <IconShield />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Login and Security
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Amet, est purus, a lobortis sit.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                <IconLock />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Data Privacy
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Amet, est purus, a lobortis sit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 basis-auto grow">
          <form action="">
            <h2 className="mb-12 leading-6 text-gray-900 text-24 font-800">
              Personal Informations
            </h2>
            <div className="flex items-center gap-8 mb-12">
              <img
                src={Images.Avatar3}
                alt="..."
                className="h-[88px] rounded-full border border-primary-1 p-1"
              />
              <div className="flex gap-3">
                <Button text="Upload new pictures" variant="primary" />
                <Button
                  text="Delete"
                  variant="secondary"
                  className="w-[110px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Full legal first name
                </p>
                <Input placeholder="First name" value="Alesia" />
              </div>
              <div>
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Full legal last name
                </p>
                <Input placeholder="First name" value="Karapova" />
              </div>
              <div>
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Date of birth
                </p>
                <Input placeholder="First name" value="29th March 1996" />
              </div>
              <div>
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Phone number
                </p>
                <Input placeholder="First name" value="+1 2345 2980 777" />
              </div>
            </div>

            <div>
              <h3 className="mb-6 leading-6 text-gray-900 text-20 font-800">
                Personal Address
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                  <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                    Country
                  </p>
                  <Input placeholder="First name" value="United States" />
                </div>
                <div>
                  <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                    City
                  </p>
                  <Input placeholder="First name" value="California" />
                </div>
                <div>
                  <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                    Date of birth
                  </p>
                  <Input placeholder="First name" value="29th March 1996" />
                </div>
                <div>
                  <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                    Phone number
                  </p>
                  <Input placeholder="First name" value="+1 2345 2980 777" />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                text="Edit Details"
                variant="primary"
                className="w-[145px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
