import { MdArrowForwardIos } from "react-icons/md";
import Button from "../../shared/button";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import { useTranslation } from "@/app/i18n";

const STP = async ({ params: { lng } }: any) => {
  const { t } = await useTranslation(lng);
  const AccountSettings = [
    {
      id: 0,
      title: "Account Leverage",
      amounts: "Up to 1:100",
      description: "For Forex and Commodities.",
    },
    {
      id: 1,
      title: "Commissions",
      amounts: "None",
      description:
        "Commission-free trading applies for all Forex and Commodity.",
    },
    {
      id: 2,
      title: "Spreads",
      amounts: "Fixed Spread",
      description:
        "Get direct access to our top-tier liquidity providers with a brokerage fee collected from the spread, with spreads fixed at 1.9 pips for EURUSD and 2.7 pips for Gold for normal market hours (0100 – 2300 Server Time).",
    },
    {
      id: 3,
      title: "Swaps",
      amounts: "None",
      description: "Swaps are waived for STP Accounts.",
    },
    {
      id: 4,
      title: "Minimum Deposit",
      amounts: "USD 10",
      description:
        "The minimum deposit required to open a STP Account at Axion Trade is USD 10.",
    },
    {
      id: 5,
      title: "Slippage Insurance",
      amounts: "Guaranteed Price Requote",
      description:
        "Axion Trade guarantees a better price requote if the slippage experienced due to a stop-loss order being hit is more than 2.0 pips.",
    },
    {
      id: 6,
      title: "Negative Balance Protection",
      amounts: "Yes",
      description:
        "Trade without worry about losses exceeding deposits as all negative balances are covered by Axion Trade.",
    },
  ];
  return (
    <div>
      {/* page-title */}
      <PageTitle
        title="STP Account"
        description="Enjoy swap-free and commission-free trading with fixed spreads, as gold, oil and silver!"
      />
      {/* End page-title */}
      <section className="pt-16 text-center max-md:px-10 max-xl:px-10">
        <SubTitle otherClass="font-normal mb-3" subTitle="About STP Account" />
        <Description
          otherClass="mb-5 text-gray-500"
          description="All Cambodian clients are automatically eligible for a STP Account. Stock are not available for this account type."
        />
        <section className="flex justify-center">
          <Button otherClass="" button="Register Now" />
        </section>
      </section>

      <section className="py-16 px-36 max-md:px-5 max-xl:px-10">
        <SubTitle otherClass="font-normal mb-5" subTitle="Account Settings" />
        <section className="grid grid-cols-1 gap-5 list-none max-md:list-item">
          {AccountSettings.map((items) => (
            <div key={items.id} className="max-md:pb-10">
              <section className="bg-gray-100 py-5 px-5 border-l-8 border-blue-700">
                <section className="flex mb-2">
                  <Description
                    otherClass="text-lg font-bold"
                    description={items.title}
                  />
                  <section className="flex items-center mx-2">
                    <MdArrowForwardIos />
                  </section>
                  <Description
                    otherClass="text-blue-700 text-lg font-bold flex items-center"
                    description={items.amounts}
                  />
                </section>
                <section className="">
                  <Description
                    otherClass="text-md text-gray-500"
                    description={items.description}
                  />
                </section>
              </section>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};
export default STP;
