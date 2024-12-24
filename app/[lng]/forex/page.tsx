import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import { MdArrowForwardIos } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "@/app/i18n";

const Forex = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  const Contract = [
    {
      id: 0,
      title:t('contract-size'),
      amounts: "100,000",
      description:
        t('1-standard-lot-contract'),
    },
    {
      id: 1,
      title:t('minimum-lot'),
      amounts: "0.01",
      description:
        t('the-minimum-lot-size'),
    },
    {
      id: 2,
      title: t('incremental-steps'),
      amounts: "0.01",
      description:
        t('the-minimum-incremental'),
    },
    {
      id: 3,
      title: t('maximum-lot'),
      amounts: "100",
      description:
        t('the-maximum-lot-size-per'),
    },
  ];
  // End Forex Contract & Specifications

  // Variable Spreads & ECN Spreads Comparison
  const STP = [
    {
      id: 0,
      VariableSpreads:t('tier-one-liquidty-providers'),
      ECNSpreads: t('electronic-communication-network-(ECN)'),
    },
  ];
  const Pricing = [
    {
      id: 0,
      VariableSpreads:t('variable-spreads'),
      ECNSpreads:
        t('raw-ecn-spread-direct-from-market-as-low-as-0.0-pips-for-eur-usd'),
    },
  ];
  const Commission = [
    {
      id: 0,
      VariableSpreads: t('no-commission-charged'),
      ECNSpreads:
        t('flat-fee-as-low-as-0.50-usd-per-lot-commission-for-forex-instruments'),
    },
  ];
  const BrokerageFee = [
    {
      id: 0,
      VariableSpreads: t('fees-are-included-in-the-spread'),
      ECNSpreads: t('no-additional-markups-on-the-spread'),
    },
  ];
  const Advantage = [
    {
      id: 0,
      VariableSpreads: t('no-additional-fees-are-charged'),
      ECNSpreads: t('raw-spreads-direct-from-the-market'),
    },
  ];
  // End Variable Spreads & ECN Spreads Comparison

  return (
    <div>
      {/* page-title */}
      <PageTitle
        title="Forex"
        description={t('trade-popular-forex-pairs-like-eur/usd-and-gbp/usd!')}
      />
      {/* End page-title */}

      {/* Forex Contract & Specifications */}
      <div className="px-36 max-md:px-10 max-xl:px-10">
        <section className="pt-16">
          <SubTitle
            otherClass="mb-7"
            subTitle={t('forex-contract-&-specifications')}
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
          subTitle={t('axion-trade-offers-two-types-of-spread-to-our-clients')}
        />
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 pt-10 px-36 max-md:px-10 max-xl:px-10">
          <section className="px-10 max-md:px-0 max-md:mb-5 max-xl:px-5">
            <SubTitle
              otherClass="text-blue-700 font-normal text-center mb-5"
              subTitle={t('variable-spreads')}
            />
            <Description
              otherClass="text-center text-gray-500"
              description={t('variable-spreads-on-the-axion-trade')}
            />
          </section>
          <section className="px-10 max-md:px-0 max-xl:px-5">
            <SubTitle
              otherClass="text-blue-700 font-normal text-center mb-5"
              subTitle={t('ecn-spreads')}
            />
            <Description
              otherClass="text-center text-gray-500"
              description={t('ecn-spreads-are-derived')}
            />
          </section>
        </div>
      </div>
      {/* End Axion Trade offers two types of spread to our clients: */}

      {/* Variable Spreads & ECN Spreads Comparison: */}
      <div className="py-16 px-36 max-md:px-10 max-xl:px-10 max-md:hidden max-xl:hidden">
        <section>
          <SubTitle
            otherClass="pb-10"
            subTitle={t('variable-spreads-&-ecn-spreads-comparison')}
          />
        </section>
        <div className="grid grid-cols-3 max-md:grid-cols-2 border-t-8 border-blue-700 py-10 px-7">
          <section className="max-md:hidden max-xl:hidden"></section>
          <section className="">
            <SubTitle otherClass="font-normal" subTitle={t('variable-spreads')}/>
          </section>
          <section className="">
            <SubTitle otherClass="font-normal" subTitle={t('ecn-spreads')} />
          </section>
        </div>
        <div className="">
          {/* Straight Through Processing (STP)  */}
          <section>
            {STP.map((items) => (
              <div
                key={items.id}
                className="grid grid-cols-3 px-7 py-10 bg-gray-100"
              >
                <Description
                  otherClass="font-bold"
                  description={t('straight-through-processing')}
                />
                <Description
                  otherClass=""
                  description={items.VariableSpreads}
                />
                <Description
                  otherClass="flex items-center"
                  description={items.ECNSpreads}
                />
              </div>
            ))}
          </section>
          {/* End Straight Through Processing (STP)  */}

          {/* Pricing */}
          <section>
            {Pricing.map((items) => (
              <div key={items.id} className="grid grid-cols-3 px-7 py-7">
                <Description
                  otherClass="font-bold flex items-center"
                  description={t('pricing')}
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
              <div
                key={items.id}
                className="grid grid-cols-3 px-7 py-7 bg-gray-100"
              >
                <Description
                  otherClass="font-bold flex items-center"
                  description={t('commission')}
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
              <div key={items.id} className="grid grid-cols-3 px-7 py-10">
                <Description
                  otherClass="font-bold"
                  description={t('brokerage-fee')}
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
              <div
                key={items.id}
                className="grid grid-cols-3 px-7 py-10 bg-gray-100"
              >
                <Description otherClass="font-bold" description={t('advantage')}/>
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
        <TabsContent className="mt-10 max-md:mb-16" value="Variable Spreads">
          {/* Straight Through Processing (STP) */}
          <section>
            {STP.map((items) => (
              <div
                key={items.id}
                className="grid grid-cols-1 px-7 py-10 bg-gray-100"
              >
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
              <div key={items.id} className="grid grid-cols-1 px-7 py-10">
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
              <div
                key={items.id}
                className="grid grid-cols-1 px-7 py-10 bg-gray-100"
              >
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
              <div key={items.id} className="grid grid-cols-1 px-7 py-10">
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
              <div
                key={items.id}
                className="grid grid-cols-1 px-7 py-10 bg-gray-100"
              >
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
        <TabsContent className="mt-10 max-md:mb-16" value="ECN Spreads">
          {/* Straight Through Processing (STP)  */}
          <section>
            {STP.map((items) => (
              <div
                key={items.id}
                className="grid grid-cols-1 px-7 py-10 bg-gray-100"
              >
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
              <div key={items.id} className="grid grid-cols-1 px-7 py-10">
                <Description otherClass="font-bold" description="Pricing" />

                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>

          {/* Commission */}
          <section>
            {Commission.map((items) => (
              <div
                key={items.id}
                className="grid grid-cols-1 px-7 py-10 bg-gray-100"
              >
                <Description otherClass="font-bold" description="Commission" />

                <Description otherClass="" description={items.ECNSpreads} />
              </div>
            ))}
          </section>

          {/* BrokerageFee */}
          <section>
            {BrokerageFee.map((items) => (
              <div key={items.id} className="grid grid-cols-1 px-7 py-10">
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
              <div
                key={items.id}
                className="grid grid-cols-1 px-7 py-10 bg-gray-100"
              >
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
};
export default Forex;
