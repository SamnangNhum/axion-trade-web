import { TbPointFilled } from "react-icons/tb";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import Description from "../../shared/description";
import { useTranslation } from "@/app/i18n";

const AssetManager = async ({ params: { lng } }: any) => {
  const { t } = await useTranslation(lng);

  const managerFeatures = [
    "Customisable trading conditions including spreads, commissions, performance fees, etc.",
    "Automatic calculation of commissions and performance fees with easy withdrawal options.",
    "Ability to add and/or remove funds without affecting trading activity.",
    "Professional reporting analytics displayed to you and your clients.",
    "Diverse product range.",
    "Solutions for EA and manual traders.",
    "Earn commission rebates with the option of additional spread and commission markups.",
    "Similar to that of a Master Introducing Broker.",
  ];

  const benefits = [
    "Charge clients based on your preferences and investment philosophy.",
    "Flexibility with withdrawing commissions to improve your cash flow.",
    "Keep investors happy by allowing them to deposit and withdraw when they want.",
    "Get access to more opportunities across more markets with our large product range.",
    "Greater transparency between AxionTrade, Money Manager and Investors.",
  ];

  // const allocationMethods = [
  //     "Fixed lot size allocation (MAM)",
  //     "Proportional by balance (PAMM)",
  //     "Proportional by equity (PAMM)",
  // ];

  const generalFeatures = [
    "3 Allocation methods:",
    "Trade sizes from 0.01 lots",
    "Expert Advisors (EA) allowed",
    "Unlimited number of investor accounts",
    "Trading account provided to investor to track real-time trading activity (with the option to hide running trade positions)",
    "All usual order types accepted: Market, Stop, Limit",
    "Diverse product range",
    "Fast and reliable MT4 servers",
  ];

  return (
    <div>
      {/* Page Title */}
      <PageTitle
        title="Asset Manager"
        description="Trade and manage multiple accounts from a single MT4 interface."
      />

      {/* Manager Features Section */}
      <section className="pt-16 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle subTitle="Asset Manager Features" otherClass="font-bold" />
        <Description
          description="Our Raw Pricing model with tight spreads and deep liquidity ensures money managers are able to get filled on large volumes at the prices they request. This means MAM/PAMMs are able to produce greater returns and give money managers greater control over their fee mark-ups, maximising the returns for all parties."
          otherClass="text-gray-500 mt-2"
        />
        <div className="mt-8">
          <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
            {managerFeatures.map((feature, index) => (
              <li key={index} className="flex mb-4">
                <span className="text-blue-500 text-2xl mr-4">
                  <TbPointFilled />
                </span>
                <span className="text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Multi Account Manager Section */}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle="What is a Multi Account Manager?"
          otherClass="font-bold"
        />
        <Description
          description="A Multi Account Manager is quite simply software that integrates into your MT4 that allows money managers to place orders in bulk, in an unlimited number of accounts. The process is fast, efficient and can be executed from one trading terminal."
          otherClass="text-gray-500 mt-2"
        />
        <Description
          description="Who can use the MAM? Well, Professional Traders and Investment Firms that have the authority to manage funds on behalf of their clients can use the Axion Trade Multi Account Manager."
          otherClass="text-gray-500"
        />
      </section>

      {/* Benefits Section */}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle subTitle="Asset Manager Benefits" otherClass="font-bold" />
        <ul className="mt-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex mb-4">
              <span className="text-blue-500 text-2xl mr-4">
                <TbPointFilled />
              </span>
              <span className="text-gray-500">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* General Features and Allocation Methods Section*/}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle="Benefits and Features of the Multi Account Managers"
          otherClass="font-bold"
        />
        <ul className="mt-8">
          {generalFeatures.map((feature, index) => (
            <li key={index} className="flex mb-4">
              <span className="text-blue-500 text-2xl mr-4">
                <TbPointFilled />
              </span>
              <span className="text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Customisable Section */}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle="Customisable Trading Conditions "
          otherClass="font-bold"
        />
        <Description
          description="Commissions from mark-ups are credited to a live trading account in real time, which can be withdrawn at any time. Performance fees can be calculated at any time through the MAM Manager which all money managers are given access to. Performance fees are calculated and debited from clients’ trading accounts in accordance with the limited power of attorney, usually on a monthly basis."
          otherClass="text-gray-500 mt-2"
        />
      </section>

      {/* Add/Remove Funds  Section */}
      <section className="pt-8 pb-16 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle="Add/Remove Funds Without Affecting Trading Activity"
          otherClass="font-bold"
        />
        <Description
          description="We recognise that some withdrawals and deposits may affect open trade allocations, especially when there is open trade drawdown. We are happy to work with money managers in these instances to find the most equitable solutions for all parties, including: withdrawal restrictions whilst trades are opened, realising profit and loss on a per account basis, and so on."
          otherClass="text-gray-500 mt-2"
        />
      </section>
    </div>
  );
};
export default AssetManager;
