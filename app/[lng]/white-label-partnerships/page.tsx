import { TbPointFilled } from "react-icons/tb";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import Image from "next/image";
import { IoKeyOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { useTranslation } from "@/app/i18n";

const WhiteLabelPartnerships = async ({ params: { lng } }: any) => {
  const { t } = await useTranslation(lng);
  const firstKeyFeatures = [
    "Access to deep liquidity and market leading spreads from 0.0 pips.",
    "Multi bank aggregated price feed.",
    "Super fast execution of large orders.",
    "Flexible connectivity options.",
    "Margin rates from 1% calculated on a portfolio basis.",
    "Competitive commissions ratesz.",
  ];

  const secondKeyFeatures = [
    "Access to deep liquidity and market leading spreads from 0.0 pips.",
    "Multi bank aggregated price feed",
    "Super fast execution of large orders",
    "Flexible connectivity options",
    "Margin rates from 1% calculated on a portfolio basis",
    "Competitive commissions rates.",
  ];

  const requirements = [
    "Minimum monthly volume of $200 million (2,000 standard lots)",
    "Established client base.",
  ];
  const secondRequirements = [
    "Minimum monthly volume of $500 million (5,000 standard lots)",
  ];
  return (
    <div>
      {/* PageTitle */}
      <PageTitle
        title="White Label Partnerships"
        description="The AxionTrade white label partnership program."
      />

      <section className="px-36 pt-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="">
            <SubTitle
              subTitle={"The AxionTrade white label partnership program "}
              otherClass={"font-bold"}
            />
            <Description
              description={
                "is a turnkey solution giving clients access to our market-leading liquidity and technology. ​The AxionTrade white label program has a variety of different levels designed to complement start-up​or established hedge funds or brokerages and help them take their business to the next level. ​You can also choose to take our liquidity only using one of our many flexible connectivity options."
              }
              otherClass={"text-gray-500 my-5"}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/white-label-partnership.png"
              width={400}
              height={400}
              alt="White Label Partnerships"
            />
          </div>
        </div>
      </section>
      {/* Fully Branded White Label Solution Section */}
      <section>
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <SubTitle
            subTitle="Fully Branded White Label Solution"
            otherClass="font-bold"
          />
          <Description
            description="Our white label program has been designed for start-up businesses with a detailed business plan and existing brokerages that have an existing client base and monthly foreign exchange volume of greater than $1 billion. As a full white label partner you will have complete control and transparency over the infrastructure through which you manage your clients."
            otherClass="text-gray-500 mt-2"
          />
        </section>
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <IoKeyOutline />
            </span>
            <SubTitle subTitle="Key Features" otherClass="font-bold" />
          </div>

          <div className="mt-8">
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {firstKeyFeatures.map((feature, index) => (
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
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <LuNotebookPen />
            </span>
            <SubTitle subTitle="Requirements" otherClass="font-bold" />
          </div>
          <div className="mt-8">
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex mb-4">
                  <span className="text-blue-500 text-2xl mr-4">
                    <TbPointFilled />
                  </span>
                  <span className="text-gray-500">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
      {/* Strategic Partnerships Section */}
      <section>
        <section className="pt-16 px-36 max-md:px-10 max-xl:px-20">
          <SubTitle subTitle="Strategic Partnerships" otherClass="font-bold" />
          <Description
            description="The AxionTrade liquidity solution is ideal for institutional and high volume clients looking to access market leading spread at affordable prices. Clients leverage off AxionTrade’ existing liquidity, technology and banking relationships with the benefit of dealing with one counterparty and receiving market leading pricing at a competitive volume based fee."
            otherClass="text-gray-500 mt-2"
          />
        </section>
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <IoKeyOutline />
            </span>
            <SubTitle subTitle="Key Features" otherClass="font-bold" />
          </div>

          <div className="mt-8">
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {secondKeyFeatures.map((feature, index) => (
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
        <section className="pt-8 pb-16 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <LuNotebookPen />
            </span>
            <SubTitle subTitle="Requirements" otherClass="font-bold" />
          </div>
          <div className="mt-8">
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {secondRequirements.map((requirement, index) => (
                <li key={index} className="flex mb-4">
                  <span className="text-blue-500 text-2xl mr-4">
                    <TbPointFilled />
                  </span>
                  <span className="text-gray-500">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};
export default WhiteLabelPartnerships;
