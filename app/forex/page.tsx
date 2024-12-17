import Description from "../shared/description";
import PageTitle from "../shared/pages-title";
import SubTitle from "../shared/sub-title";
import { MdArrowForwardIos } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Forex() {
  // Forex Contract & Specifications
  const Contract = [
    {
      id: 0,
      title: "Contract Size",
      amounts: "100,000",
      description:
        "1 standard Lot Contract Size on Axion Trade is equivalent to 100,000 units of base currency. E.g. 1 standard lot of EUR/USD is €100,000.",
    },
    {
      id: 1,
      title: "Minimum Lot",
      amounts: "0.01",
      description:
        "The minimum lot size on Axion Trade is 0.01 which is equivalent to 1,000 units of base currency.",
    },
    {
      id: 2,
      title: "Incremental Steps",
      amounts: "0.01",
      description:
        "The minimum incremental lot size on Axion Trade is 0.01 which is equivalent to 1,000 units of base currency.",
    },
    {
      id: 3,
      title: "Maximum Lot",
      amounts: "100",
      description:
        "The minimum lot size on Axion Trade is 0.01 which is equivalent to 1,000 units of base currency.",
    },
  ];
  // End Forex Contract & Specifications

  // Variable Spreads & ECN Spreads Comparison
  const STP = [
    {
      id:0,
      VariableSpreads: "Tier One Liquidty Providers",
      ECNSpreads: "Electronic Communication Network (ECN)",
    },
  ];
  const Pricing = [
    {
      id:0,
      VariableSpreads: "Variable Spread",
      ECNSpreads:
        "Raw ECN spread direct from market as low as 0.0 pips for EUR USD",
    },
  ];
  const Commission = [
    {
      id:0,
      VariableSpreads: "No Commission Charged",
      ECNSpreads:
        "Flat fee as low as 0.50 USD per lot commission for Forex instruments",
    },
  ];
  const BrokerageFee = [
    {
      id:0,
      VariableSpreads: "Fees are included in the spread",
      ECNSpreads: "No additional markups on the spread",
    },
  ];
  const Advantage = [
    {
      id:0,
      VariableSpreads: "No Additional fees are charged",
      ECNSpreads: "Raw spreads direct from the market",
    },
  ];
  // End Variable Spreads & ECN Spreads Comparison

  return (
    <div>
      {/* page-title */}
      <PageTitle
        title="Forex"
        description="Trade popular forex pairs like EUR/USD and GBP/USD! Come and trade over 50+ forex pairs with Axion Trade."
      />
      {/* End page-title */}

      {/* Forex Contract & Specifications */}
      <div className="px-36 max-md:px-10 max-xl:px-10">
        <section className="pt-16">
          <SubTitle
            otherClass="mb-7"
            subTitle="Forex Contract & Specifications"
          />
        </section>
        <section className="grid grid-cols-2 gap-5 list-none max-md:list-item">
          {Contract.map((items) => (
            <div key={items.id} className="pb-5 max-md:pb-10">
              <section className="flex bg-gray-100 py-3 px-5 border-l-8 border-blue-700">
                <Description
                  otherClass="text-lg font-bold"
                  description={items.title}
                />
                <section className="flex items-center mx-2">
                  <MdArrowForwardIos />
                </section>
                <Description
                  otherClass="text-blue-700 text-lg font-bold"
                  description={items.amounts}
                />
              </section>
              <section className="mt-3">
                {/* <p>{items.description}</p> */}
                <Description
                  otherClass="text-md text-gray-500"
                  description={items.description}
                />
              </section>
            </div>
          ))}
        </section>
      </div>
      {/* End Forex Contract & Specifications */}

      {/* Axion Trade offers two types of spread to our clients: */}
      <div className="pt-16 max-md:pt-6">
        <SubTitle
          otherClass="text-center mx-96 px-40 max-md:px-10 max-md:mx-0 max-xl:px-48 max-xl:mx-0"
          subTitle="Axion Trade offers two types of spread to our clients:"
        />
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 pt-10 px-36 max-md:px-10 max-xl:px-10">
          <section className="px-10 max-md:px-0 max-md:mb-5 max-xl:px-5">
            <SubTitle
              otherClass="text-blue-700 font-normal text-center mb-5"
              subTitle="Variable Spreads"
            />
            <Description
              otherClass="text-center text-gray-500"
              description="Variable Spreads on the Axion Trade MT4 platform are derived from our Tier-1 Liquidity Providers in Equinix LD4 (a FX-specific data center in London). There are no commissions charged for trade execution, but a brokerage fee is collected from the spreads."
            />
          </section>
          <section className="px-10 max-md:px-0 max-xl:px-5">
            <SubTitle
              otherClass="text-blue-700 font-normal text-center mb-5"
              subTitle="ECN Spreads"
            />
            <Description
              otherClass="text-center text-gray-500"
              description="ECN Spreads are derived from an Electronic Communication Network (ECN) that is set up with multiple Liquidity Providers, including banks and hedge funds in Equinix LD4 (a FX-specific data center in London). Traders get to enjoy raw spreads for as low as 0.0 pips for EURUSD direct from the market participants at a flat fee of as low as 0.50 USD per lot in commission charged for Forex instruments."
            />
          </section>
        </div>
      </div>
      {/* End Axion Trade offers two types of spread to our clients: */}

      {/* Variable Spreads & ECN Spreads Comparison: */}
      <div className="pt-16 px-36 max-md:px-10 max-xl:px-10 max-md:hidden max-xl:hidden">
        <section>
          <SubTitle
            otherClass="pb-10"
            subTitle="Variable Spreads & ECN Spreads Comparison:"
          />
        </section>
        <div className="grid grid-cols-3 max-md:grid-cols-2 border-t-8 border-blue-700 py-10 px-7">
          <section className="max-md:hidden max-xl:hidden"></section>
          <section className="">
            <SubTitle otherClass="font-normal" subTitle="Variable Spreads" />
          </section>
          <section className="">
            <SubTitle otherClass="font-normal" subTitle="ECN Spreads" />
          </section>
        </div>
        <div className="">
          {/* Straight Through Processing (STP)  */}
          <section>
            {STP.map((items) => (
              <div key={items.id} className="grid grid-cols-3 px-7 py-10 bg-gray-100">
                <Description
                  otherClass="font-bold"
                  description="Straight Through Processing (STP)"
                />
                <Description
                  otherClass=""
                  description={items.VariableSpreads}
                />
                <Description otherClass="flex items-center" description={items.ECNSpreads} />
              </div>
            ))}
          </section>
          {/* End Straight Through Processing (STP)  */}

          {/* Pricing */}
          <section>
            {Pricing.map((items) => (
              <div className="grid grid-cols-3 px-7 py-7">
                <Description
                  otherClass="font-bold flex items-center"
                  description="Pricing"
                />
                <Description
                  otherClass="flex items-center"
                  description={items.VariableSpreads}
                />
                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>
          {/* End Pricing */}

          {/* Commission */}
          <section>
            {Commission.map((items) => (
              <div className="grid grid-cols-3 px-7 py-7 bg-gray-100">
                <Description
                  otherClass="font-bold flex items-center"
                  description="Commission"
                />
                <Description
                  otherClass="flex items-center"
                  description={items.VariableSpreads}
                />
                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>
          {/* End Commission */}

          {/* Brokerage Fee */}
          <section>
            {BrokerageFee.map((items) => (
              <div className="grid grid-cols-3 px-7 py-10">
                <Description
                  otherClass="font-bold"
                  description="Brokerage Fee"
                />
                <Description
                  otherClass=""
                  description={items.VariableSpreads}
                />
                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>
          {/* End Brokerage Fee */}

          {/* Advantage */}
          <section>
            {Advantage.map((items) => (
              <div className="grid grid-cols-3 px-7 py-10 bg-gray-100">
                <Description
                  otherClass="font-bold"
                  description="Advantage"
                />
                <Description
                  otherClass=""
                  description={items.VariableSpreads}
                />
                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>
          {/* End Advantage */}
        </div>
      </div>
      {/* End Variable Spreads & ECN Spreads Comparison: */}

      {/* Mobile Variable Spreads & ECN Spreads Comparison: */}
      <Tabs
        defaultValue="Variable Spreads"
        className="w-full pt-16 hidden max-md:contents max-xl:contents"
      >
        <section className="pt-16">
          <SubTitle
            otherClass="pb-10 max-md:px-10 max-xl:px-10 max-md:text-center max-xl:text-center"
            subTitle="Variable Spreads & ECN Spreads Comparison:"
          />
        </section>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Variable Spreads">Variable Spreads</TabsTrigger>
          <TabsTrigger value="ECN Spreads">ECN Spreads</TabsTrigger>
        </TabsList>

        {/* Variable Spreads */}
        <TabsContent className="mt-10" value="Variable Spreads">
          {/* Straight Through Processing (STP) */}
          <section>
            {STP.map((items) => (
              <div className="grid grid-cols-1 px-7 py-10 bg-gray-100">
                <Description
                  otherClass="font-bold"
                  description="Straight Through Processing (STP)"
                />
                <Description
                  otherClass=""
                  description={items.VariableSpreads}
                />
              </div>
            ))}
          </section>

          {/* Pricing */}
          <section>
            {Pricing.map((items) => (
              <div className="grid grid-cols-1 px-7 py-10">
                <Description otherClass="font-bold" description="Pricing" />
                <Description
                  otherClass=""
                  description={items.VariableSpreads}
                />
              </div>
            ))}
          </section>

          {/* Commission */}
          <section>
            {Commission.map((items) => (
              <div className="grid grid-cols-1 px-7 py-10 bg-gray-100">
                <Description otherClass="font-bold" description="Commission" />
                <Description
                  otherClass=""
                  description={items.VariableSpreads}
                />
              </div>
            ))}
          </section>

          {/* BrokerageFee */}
          <section>
            {BrokerageFee.map((items) => (
              <div className="grid grid-cols-1 px-7 py-10">
                <Description
                  otherClass="font-bold"
                  description="Brokerage Fee"
                />
                <Description
                  otherClass=""
                  description={items.VariableSpreads}
                />
              </div>
            ))}
          </section>

          {/* Advantage */}
          <section>
            {Advantage.map((items) => (
              <div className="grid grid-cols-1 px-7 py-10 bg-gray-100">
                <Description otherClass="font-bold" description="Advantage" />
                <Description
                  otherClass=""
                  description={items.VariableSpreads}
                />
              </div>
            ))}
          </section>
        </TabsContent>

        {/* ECN Spreads */}
        <TabsContent className="mt-10" value="ECN Spreads">
          {/* Straight Through Processing (STP)  */}
          <section>
            {STP.map((items) => (
              <div className="grid grid-cols-1 px-7 py-10 bg-gray-100">
                <Description
                  otherClass="font-bold"
                  description="Straight Through Processing (STP)"
                />

                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>

          {/* Pricing */}
          <section>
            {Pricing.map((items) => (
              <div className="grid grid-cols-1 px-7 py-10">
                <Description otherClass="font-bold" description="Pricing" />

                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>

          {/* Commission */}
          <section>
            {Commission.map((items) => (
              <div className="grid grid-cols-1 px-7 py-10 bg-gray-100">
                <Description otherClass="font-bold" description="Commission" />

                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>

          {/* BrokerageFee */}
          <section>
            {BrokerageFee.map((items) => (
              <div className="grid grid-cols-1 px-7 py-10">
                <Description
                  otherClass="font-bold"
                  description="Brokerage Fee"
                />

                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>
          <section>
            {/* Advantage */}
            {Advantage.map((items) => (
              <div className="grid grid-cols-1 px-7 py-10 bg-gray-100">
                <Description otherClass="font-bold" description="Advantage" />
                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>
          {/* End Straight Through Processing (STP)  */}
        </TabsContent>
      </Tabs>
      {/* End Mobile Variable Spreads & ECN Spreads Comparison: */}
    </div>
  );
}
