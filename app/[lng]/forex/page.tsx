import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import { MdArrowForwardIos } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "@/app/i18n";

import type { Metadata } from "next";
import BlurIn from "@/components/ui/blur-in";
import BlurFade from "@/components/ui/blur-fade";

export const metadata: Metadata = {
  title: "Forex",
};

const Forex = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  const Contract = [
    {
      id: 0,
      title: t("contract-size"),
      amounts: "100,000",
      description: t("1-standard-lot-contract"),
    },
    {
      id: 1,
      title: t("minimum-lot"),
      amounts: "0.01",
      description: t("the-minimum-lot-size"),
    },
    {
      id: 2,
      title: t("incremental-steps"),
      amounts: "0.01",
      description: t("the-minimum-incremental"),
    },
    {
      id: 3,
      title: t("maximum-lot"),
      amounts: "100",
      description: t("the-maximum-lot-size-per"),
    },
  ];
  // End Forex Contract & Specifications

  // Variable Spreads & ECN Spreads Comparison
  const STP = [
    {
      id: 0,
      VariableSpreads: t("tier-one-liquidty-providers"),
      ECNSpreads: t("electronic-communication-network-(ECN)"),
    },
  ];
  const Pricing = [
    {
      id: 0,
      VariableSpreads: t("variable-spreads"),
      ECNSpreads: t(
        "raw-ecn-spread-direct-from-market-as-low-as-0.0-pips-for-eur-usd"
      ),
    },
  ];
  const Commission = [
    {
      id: 0,
      VariableSpreads: t("no-commission-charged"),
      ECNSpreads: t(
        "flat-fee-as-low-as-0.50-usd-per-lot-commission-for-forex-instruments"
      ),
    },
  ];
  const BrokerageFee = [
    {
      id: 0,
      VariableSpreads: t("fees-are-included-in-the-spread"),
      ECNSpreads: t("no-additional-markups-on-the-spread"),
    },
  ];
  const Advantage = [
    {
      id: 0,
      VariableSpreads: t("no-additional-fees-are-charged"),
      ECNSpreads: t("raw-spreads-direct-from-the-market"),
    },
  ];
  // End Variable Spreads & ECN Spreads Comparison

  return (
    <div>
      {/* page-title */}
      <PageTitle
        title="Forex"
        description={t("trade-popular-forex-pairs-like-eur/usd-and-gbp/usd!")}
      />

      {/* End page-title */}

      {/* Forex Contract & Specifications */}
      <div className="px-36 max-md:px-10 max-xl:px-10">
        <BlurFade delay={0.25 * 0.05} inView>
          <section className="pt-16">
            <BlurIn
              word={t("forex-contract-&-specifications")}
              className="text-4xl max-md:text-2xl max-xl:text-4xl mb-7 font-bold px-0 2xl:text-start max-xl:text-start max-md:text-start max-md:px-0 max-xl:px-0"
            />
          </section>
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <section className="grid grid-cols-2 gap-5 list-none max-md:list-item">
            {Contract.map((items) => (
              <div key={items.id} className="pb-5 max-md:pb-10">
                <section className="flex bg-gray-100 py-3 px-5 border-l-8 border-blue-700">
                  <BlurIn word={items.title} className="text-lg font-bold" />

                  <section className="flex items-center mx-2">
                    <MdArrowForwardIos />
                  </section>
                  <BlurIn
                    word={items.amounts}
                    className="text-blue-700 text-lg font-bold flex items-center"
                  />
                </section>
                <section className="mt-3">
                  <BlurIn
                    word={items.description}
                    className="text-md text-gray-500 text-start max-xl:text-md"
                  />
                </section>
              </div>
            ))}
          </section>
        </BlurFade>
      </div>
      {/* End Forex Contract & Specifications */}

      {/* Axion Trade offers two types of spread to our clients: */}
      <div className="pt-16 max-md:pt-6">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("axion-trade-offers-two-types-of-spread-to-our-clients")}
            className="text-center text-4xl max-md:text-2xl font-bold mx-96 px-40 max-md:px-10 max-md:mx-0 max-xl:px-48 max-xl:mx-0 max-xl:text-md"
          />
        </BlurFade>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 pt-10 px-36 max-md:px-10 max-xl:px-10">
          <BlurFade delay={0.25 * 0.05} inView>
            <section className="px-10 max-md:px-0 max-md:mb-5 max-xl:px-5">
              <BlurIn
                word={t("variable-spreads")}
                className="text-3xl text-blue-700 font-normal text-center mb-5"
              />

              <BlurIn
                word={t("variable-spreads-on-the-axion-trade")}
                className="text-center text-gray-500 max-xl:text-md"
              />
            </section>
          </BlurFade>
          <BlurFade
            key="/assets/images/client-focused.png"
            delay={0.25 * 0.05}
            inView
          >
            <section className="px-10 max-md:px-0 max-xl:px-5">
              <BlurIn
                word={t("ecn-spreads")}
                className="text-3xl text-blue-700 font-normal text-center mb-5"
              />

              <BlurIn
                word={t("ecn-spreads-are-derived")}
                className="text-center text-gray-500 max-xl:text-md"
              />
            </section>
          </BlurFade>
        </div>
      </div>
      {/* End Axion Trade offers two types of spread to our clients: */}

      {/* Variable Spreads & ECN Spreads Comparison: */}
      <div className="py-16 px-36 max-md:px-10 max-xl:px-10 max-md:hidden max-xl:hidden">
        <BlurFade delay={0.25 * 0.05} inView>
          <section>
            <BlurIn
              word={t("variable-spreads-&-ecn-spreads-comparison")}
              className="text-start text-4xl max-md:text-2xl font-bold pb-10 max-md:px-10 max-md:mx-0 max-xl:px-48 max-xl:mx-0"
            />
          </section>
        </BlurFade>
        <div className="grid grid-cols-3 max-md:grid-cols-2 border-t-8 border-blue-700 py-10 px-7">
          <section className="max-md:hidden max-xl:hidden"></section>
          <BlurFade delay={0.25 * 0.05} inView>
            <section className="">
              <BlurIn
                word={t("variable-spreads")}
                className="text-3xl text-start"
              />
            </section>
          </BlurFade>
          <BlurFade delay={0.25 * 0.05} inView>
            <section className="">
              <BlurIn word={t("ecn-spreads")} className="text-3xl text-start" />
            </section>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 0.05} inView>
          <div className="">
            {/* Straight Through Processing (STP)  */}

            <section>
              {STP.map((items) => (
                <div
                  key={items.id}
                  className="grid grid-cols-3 px-7 py-10 bg-gray-100"
                >
                  <BlurIn
                    word={t("straight-through-processing")}
                    className="text-start font-bold"
                  />

                  <BlurIn word={items.VariableSpreads} className="text-start" />

                  <BlurIn word={items.ECNSpreads} className="text-start" />
                </div>
              ))}
            </section>
            {/* End Straight Through Processing (STP)  */}

            {/* Pricing */}
            <section>
              {Pricing.map((items) => (
                <div key={items.id} className="grid grid-cols-3 px-7 py-7">
                  <BlurIn
                    word={t("pricing")}
                    className="text-start font-bold"
                  />
                  <BlurIn word={items.VariableSpreads} className="text-start" />
                  <BlurIn word={items.ECNSpreads} className="text-start" />
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
                  <BlurIn
                    word={t("commission")}
                    className="text-start font-bold"
                  />
                  <BlurIn word={items.VariableSpreads} className="text-start" />
                  <BlurIn word={items.ECNSpreads} className="text-start" />
                </div>
              ))}
            </section>
            {/* End Commission */}

            {/* Brokerage Fee */}
            <section>
              {BrokerageFee.map((items) => (
                <div key={items.id} className="grid grid-cols-3 px-7 py-10">
                  <BlurIn
                    word={t("brokerage-fee")}
                    className="text-start font-bold"
                  />
                  <BlurIn word={items.VariableSpreads} className="text-start" />
                  <BlurIn word={items.ECNSpreads} className="text-start" />
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
                  <BlurIn
                    word={t("advantage")}
                    className="text-start font-bold"
                  />
                  <BlurIn word={items.VariableSpreads} className="text-start" />
                  <BlurIn word={items.ECNSpreads} className="text-start" />
                </div>
              ))}
            </section>
            {/* End Advantage */}
          </div>
        </BlurFade>
      </div>
      {/* End Variable Spreads & ECN Spreads Comparison: */}

      {/* Mobile Variable Spreads & ECN Spreads Comparison: */}
      <BlurFade delay={0.25 * 0.05} inView>
        <Tabs
          defaultValue="Variable Spreads"
          className="w-full pt-16 hidden max-md:contents max-xl:contents"
        >
          <section className="pt-16">
            <BlurIn
              word={t("variable-spreads-&-ecn-spreads-comparison")}
              className=" text-4xl max-md:text-2xl font-bold pb-10 max-md:px-10 max-md:mx-0 max-xl:px-48 max-xl:mx-0"
            />
          </section>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Variable Spreads">
              {t("variable-spreads")}
            </TabsTrigger>
            <TabsTrigger value="ECN Spreads">{t("ecn-spreads")}</TabsTrigger>
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
                  <BlurIn
                    word={t("straight-through-processing")}
                    className="text-start font-bold max-xl:text-md"
                  />
                  <BlurIn
                    word={items.VariableSpreads}
                    className="text-start max-xl:text-md"
                  />
                </div>
              ))}
            </section>

            {/* Pricing */}
            <section>
              {Pricing.map((items) => (
                <div key={items.id} className="grid grid-cols-1 px-7 py-10">
                  <BlurIn
                    word={t("pricing")}
                    className="text-start font-bold max-xl:text-md"
                  />
                  <BlurIn
                    word={items.VariableSpreads}
                    className="text-start max-xl:text-md"
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
                  <BlurIn
                    word={t("commission")}
                    className="text-start font-bold max-xl:text-md"
                  />
                  <BlurIn
                    word={items.VariableSpreads}
                    className="text-start max-xl:text-md"
                  />
                </div>
              ))}
            </section>

            {/* BrokerageFee */}
            <section>
              {BrokerageFee.map((items) => (
                <div key={items.id} className="grid grid-cols-1 px-7 py-10">
                  <BlurIn
                    word={t("brokerage-fee")}
                    className="text-start font-bold max-xl:text-md"
                  />
                  <BlurIn
                    word={items.VariableSpreads}
                    className="text-start max-xl:text-md"
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
                  <BlurIn
                    word={t("advantage")}
                    className="text-start font-bold max-xl:text-md"
                  />
                  <BlurIn
                    word={items.VariableSpreads}
                    className="text-start max-xl:text-md"
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
                  <BlurIn
                    word={t("straight-through-processing")}
                    className="text-start font-bold max-xl:text-md"
                  />
                  <BlurIn
                    word={items.ECNSpreads}
                    className="text-start max-xl:text-md"
                  />
                </div>
              ))}
            </section>

            {/* Pricing */}
            <section>
              {Pricing.map((items) => (
                <div key={items.id} className="grid grid-cols-1 px-7 py-10">
                  <BlurIn
                    word={t("pricing")}
                    className="text-start font-bold max-xl:text-md"
                  />
                  <BlurIn
                    word={items.ECNSpreads}
                    className="text-start max-xl:text-md"
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
                  <BlurIn
                    word={t("commission")}
                    className="text-start font-bold max-xl:text-md"
                  />
                  <BlurIn
                    word={items.ECNSpreads}
                    className="text-start max-xl:text-md"
                  />
                </div>
              ))}
            </section>

            {/* BrokerageFee */}
            <section>
              {BrokerageFee.map((items) => (
                <div key={items.id} className="grid grid-cols-1 px-7 py-10">
                  <BlurIn
                    word={t("brokerage-fee")}
                    className="text-start font-bold max-xl:text-md"
                  />
                  <BlurIn
                    word={items.ECNSpreads}
                    className="text-start max-xl:text-md"
                  />
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
                  <BlurIn
                    word={t("advantage")}
                    className="text-start font-bold max-xl:text-md"
                  />
                  <BlurIn
                    word={items.ECNSpreads}
                    className="text-start max-xl:text-md"
                  />
                </div>
              ))}
            </section>
            {/* End Straight Through Processing (STP)  */}
          </TabsContent>
        </Tabs>
      </BlurFade>
      {/* End Mobile Variable Spreads & ECN Spreads Comparison: */}
    </div>
  );
};
export default Forex;
