import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import IconAuto from "@/components/Icons/IconAuto";
import IconBag from "@/components/Icons/IconBag";
import IconBell from "@/components/Icons/IconBell";
import IconDoller from "@/components/Icons/IconDoller";
import IconReport from "@/components/Icons/IconReport";
import IconTerminal from "@/components/Icons/IconTerminal";
import IconUser from "@/components/Icons/IconUser";
import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";

function AccountSetting() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div>
      <Header title="Account Setting" />
      <div className="flex border-t border-gray-300">
        <div className="basis-[370px] p-10 border-r border-gray-300">
          <h4 className="mb-4 leading-6 text-gray-600 text-14 font-800">
            BUSINESS PROFILE
          </h4>
          <div className="mb-10">
            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full">
                <IconBag />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Business Information
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Set up and manage your business
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full">
                <IconDoller />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Money, Banks, and Card
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Gravida gravida nisi, magna blandit
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full">
                <IconBell />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Notifications
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Manage notifications
                </p>
              </div>
            </div>
          </div>
          <h4 className="mb-4 leading-6 text-gray-600 text-14 font-800">
            ACCOUNT AND SERVICES
          </h4>
          <div>
            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full text-20">
                <IconUser />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Account Access
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Set up and manage your business
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full text-20">
                <IconTerminal />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Payment Preference
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Gravida gravida nisi, magna blandit
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full text-20">
                <IconAuto />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Auto Conversions
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Gravida gravida nisi, magna blandit
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6">
              <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-200 rounded-full text-20">
                <IconReport />
              </div>
              <div>
                <h4 className="mb-1 leading-6 text-gray-900 text-14 font-800">
                  Statement and Reports
                </h4>
                <p className="leading-5 text-gray-600 text-12 font-400">
                  Gravida gravida nisi, magna blandit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 basis-auto grow">
          <form action="">
            <h2 className="mb-12 leading-6 text-gray-900 text-24 font-800">
              Business Information
            </h2>
            <h3 className="mb-6 leading-6 text-gray-900 text-20 font-800">
              Business Details
            </h3>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Business Name
                </p>
                <Input
                  value="Iconic Agency"
                  placeholder="Enter buisness name"
                />
              </div>
              <div>
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Industry
                </p>
                <Select
                  options={options}
                  placeholder="Select an option"
                  className="!p-4 !h-[58px]"
                />
              </div>
              <div>
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Timezone
                </p>
                <Select
                  options={options}
                  placeholder="Select an option"
                  className="!p-4 !h-[58px]"
                />
              </div>
              <div>
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Default Currency
                </p>
                <Select
                  options={options}
                  placeholder="Select an option"
                  className="!p-4 !h-[58px]"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-6 leading-6 text-gray-900 text-20 font-800">
                Business Address
              </h3>
              <div className="mb-8">
                <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                  Legal name of company
                </p>
                <Input
                  placeholder="Enter company name"
                  value="Iconic Nice Agency LTD"
                />
              </div>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                  <p className="mb-2 leading-5 text-gray-600 text-12 font-800">
                    Apartment, suite, or etc.
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

export default AccountSetting;
