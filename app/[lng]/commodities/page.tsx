import PageTitle from "../../shared/pages-title";
import Image from "next/image";
import SubTitle from "../../shared/sub-title";
import Description from "../../shared/description";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdArrowForwardIos } from "react-icons/md";
import { useTranslation } from "@/app/i18n";

const Commodities = async ({
  params,
}: {
  params: Promise<{ lng: string }>;
}) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  const Commodities = [
    {
      id: 0,
      icon: "/assets/images/23-hour-trading-icon.png",
      title:t('23-hour-trading'),
      description:
        t('many-commodities-are-open-23-hours'),
    },
    {
      id: 1,
      icon: "/assets/images/trading-opportunities-icon.png",
      title: t('trading-opportunities'),
      description:
        t('media-and-analysts-present-regular'),
    },
    {
      id: 2,
      icon: "/assets/images/trade-on-diverse-sectors-icon.png",
      title: t('trade-on-diverse-sectors'),
      description:
        t('commodities-benefit-from-market-movement'),
    },
    {
      id: 3,
      icon: "/assets/images/global-opportunities-icon.png",
      title: t('global-pportunities'),
      description:
        t('trade-on-price-movement-of-major'),
    },
    {
      id: 4,
      icon: "/assets/images/short-the-markets-icon.png",
      title: t('short-the-markets'),
      description:
        t('trade-on-falling-markets'),
    },
    {
      id: 5,
      icon: "/assets/images/trade-anytime-anywhere-icon.png",
      title: t('trade-anytime-anywhere'),
      description:
       t('trade-on-desktop'),
    },
  ];

  //  Commodities available on Axion Trade
  //   Gold
  const Gold = [
    {
      id: 0,
      title: t('contract-size'),
      amounts: "100",
      description:
        t('1-standard-Lot-contract-size-on-axion-trade-is-equivalent-to-100-ounces-(oz)-of-gold.'),
    },
    {
      id: 1,
      title: t('minimum-lot'),
      amounts: "0.01",
      description:
        t('the-minimum-lot-size-on-Axion-Trade-is-0.01-which-is-equivalent-to-1-ounce-(oz) of-gold.'),
    },
    {
      id: 2,
      title: t('incremental-steps'),
      amounts: "0.01",
      description:
        t('the-minimum-incremental-lot-size-on-axion-trade-is-0.01-which-is-equivalent-to 1-ounce-(oz)-of-gold.'),
    },
    {
      id: 3,
      title: t('maximum-lot'),
      amounts: "100",
      description:
        t('the-maximum-lot-size-per-trade-on-axion-trade-is-100-by-default-which-is-equivalent-to-10,000-ounces-(oz)-of-gold.'),
    },
  ];

  //  Silver
  const Silver = [
    {
      id: 0,
      title: t('contract-size'),
      amounts: "5,000",
      description:
        t('1-standard-lot-ontract-size-on-axion-trade-is-equivalent-to-5,000-ounces-(oz)-of-silver.'),
    },
    {
      id: 1,
      title: t('minimum-lot'),
      amounts: "0.01",
      description:
        t('the-minimum-lot-size-on-axion-trade-is-0.01-which-is-equivalent-to-50-ounces-(oz)-of-Silver.'),
    },
    {
      id: 2,
      title: t('incremental-steps'),
      amounts: "0.01",
      description:
       t('the-minimum-incremental-lot-size-on-axion-trade-is-0.01-which-is-equivalent-to-50-ounce-(oz)-of-silver.'),
    },
    {
      id: 3,
      title: t('maximum-lot'),
      amounts: "100",
      description:
        t('the-maximum-lot-size-per-trade-on-axion-trade-is-100-by-default-which-is-equivalent-to-500,000-ounces-(oz)-of-silver.'),
    },
  ];

  //  BrentCrudeOil
  const BrentCrudeOil = [
    {
      id: 0,
      title: t('contract-size'),
      amounts: "1,000",
      description:
        t('1-standard-lot-contract-size-on-axion-trade-is-equivalent-to-1,000-barrels-of-crude-oil.'),
    },
    {
      id: 1,
      title: t('minimum-lot'),
      amounts: "0.01",
      description:
        t('the-minimum-lot-size-on-axion-trade-is-0.01-which-is-equivalent-to-10-barrels-of-crude-oil.'),
    },
    {
      id: 2,
      title: t('incremental-steps'),
      amounts: "0.01",
      description:
        t('the-minimum-incremental-lot-size-on-axion-trade-is-0.01-which-is-equivalent-to-10-barrels-of-crude-oil.'),
    },
    {
      id: 3,
      title: t('maximum-lot'),
      amounts: "100",
      description:
        t('the-maximum-lot-size-per-trade-on-axion-trade-is-100-by-default-which-is-equivalent-to-100,000-barrels-of-crude-oil.'),
    },
  ];

  //  WTICrudeOil
  const WTICrudeOil = [
    {
      id: 0,
      title: t('contract-size'),
      amounts: "1,000",
      description:
        t('1-standard-lot-contract-size-on-axion-trade-is-equivalent-to-1,000-barrels-of-crude-oil.'),
    },
    {
      id: 1,
      title: t('minimum-lot'),
      amounts: "0.01",
      description:
        t('the-minimum-lot-size-on-axion-trade-is-0.01-which-is-equivalent-to-10-barrels-of-crude-oil.'),
    },
    {
      id: 2,
      title: t('incremental-steps'),
      amounts: "0.01",
      description:
       t('the-minimum-incremental-lot-size-on-axion-trade-is-0.01-which-is-equivalent-to-10-barrels-of-crude-oil.'),
    },
    {
      id: 3,
      title: t('maximum-lot'),
      amounts: "100",
      description:
      t('the-maximum-lot-size-per-trade-on-axion-trade-is-100-by-default-which-is-equivalent-to-100,000-barrels-of-crude-oil.'),
    },
  ];
  // End Commodities available on Axion Trade

  return (
    <div>
      <section className="">
        <PageTitle
          otherClass=""
          title={t('commodities')}
          description={t('trade-popular-commodities-from-around-the-world')}
        />
      </section>
      <div className="-translate-y-20">
        <section className="grid grid-cols-3 max-md:list-item max-xl:grid-cols-2 text-center px-28 max-md:px-10 max-xl:px-10">
          {Commodities.map((items) => (
            <div
              key={items.id}
              className="bg-white m-5 max-md:mx-0 px-5 pt-10 pb-14 shadow-lg rounded-xl"
            >
              <section className="flex justify-center">
                <Image
                  className=""
                  src={items.icon}
                  width={150}
                  height={150}
                  alt={""}
                />
              </section>
              <SubTitle otherClass="mb-3" subTitle={items.title} />
              <Description
                otherClass="text-gray-500"
                description={items.description}
              />
            </div>
          ))}
        </section>
      </div>

      {/* Commodities available on Axion Trade */}
      <section className="max-md:mt-0 pb-16 max-md:pb-6">
        <Tabs defaultValue="Gold" className="w-full">
          <section className="">
            <SubTitle
              otherClass="pb-10 max-md:px-10 text-center"
              subTitle={t('commodities-available-on-axion-trade')}
            />
          </section>
          <section className="mx-36 max-md:mx-10 max-xl:mx-10">
            <TabsList className="grid grid-cols-4 max-md:grid-cols-1 pb-16 bg-gray-100 max-md:bg-transparent">
              <TabsTrigger value="Gold">{t('gold')}</TabsTrigger>
              <TabsTrigger value="Silver">{t('silver')}</TabsTrigger>
              <TabsTrigger value="Brent Crude Oil">{t('brent-crude-oil')}</TabsTrigger>
              <TabsTrigger value="WTI Crude Oil">{t('wti-crude-oil')}</TabsTrigger>
            </TabsList>
          </section>

          {/* gold */}
          <TabsContent
            className="mt-10 max-md:mt-48 px-36 max-md:px-10 max-xl:px-10"
            value="Gold"
          >
            <SubTitle
              otherClass="font-normal text-center mb-10 max-md:pt-5"
              subTitle={t('spot-gold-(xauusd)-contract-&-specifications')}
            />
            <section className="grid grid-cols-2 gap-5 list-none max-md:list-item">
              {Gold.map((items) => (
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
          </TabsContent>

              {/* silver */}
          <TabsContent
            className="mt-10 max-md:mt-48 px-36 max-md:px-10 max-xl:px-10"
            value="Silver"
          >
            <SubTitle
              otherClass="font-normal text-center mb-10 max-md:pt-5"
              subTitle={t('Spot-Silver-(xagusd)-Contract-&-Specifications')}
            />
            <section className="grid grid-cols-2 gap-5 list-none max-md:list-item">
              {Silver.map((items) => (
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
          </TabsContent>

              {/* brent crude oil */}
          <TabsContent
            className="mt-10 max-md:mt-48 px-36 max-md:px-10 max-xl:px-10"
            value="Brent Crude Oil"
          >
            <SubTitle
              otherClass="font-normal text-center mb-10"
              subTitle={t('brent-(UK)-Crude-Oil-(ukoil)-contract-&-specifications')}
            />
            <section className="grid grid-cols-2 gap-5 list-none max-md:list-item">
              {BrentCrudeOil.map((items) => (
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
          </TabsContent>

              {/* WTI crude oil */}
          <TabsContent
            className="mt-10 max-md:mt-48 px-36 max-md:px-10 max-xl:px-10"
            value="WTI Crude Oil"
          >
            <SubTitle
              otherClass="font-normal text-center mb-10"
              subTitle={t('west-texas-intermediate-(us)-Crude-Oil-(xtiusd)-contract-&-specifications')}
            />
            <section className="grid grid-cols-2 gap-5 list-none max-md:list-item">
              {WTICrudeOil.map((items) => (
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
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};
export default Commodities;
