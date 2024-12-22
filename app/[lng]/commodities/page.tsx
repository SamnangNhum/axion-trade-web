import PageTitle from "../../shared/pages-title";
import Image from "next/image";
import SubTitle from "../../shared/sub-title";
import Description from "../../shared/description";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdArrowForwardIos } from "react-icons/md";

export default function Commodities() {
  const Commodities = [
    {
      id: 0,
      icon: "/assets/images/23-hour-trading-icon.png",
      title: "23-Hour Trading",
      description:
        "Many Commodities are open 23 hours a day and do not have restricted trading hours.",
    },
    {
      id: 1,
      icon: "/assets/images/trading-opportunities-icon.png",
      title: "Trading Opportunities",
      description:
        "Media and analysts present regular trading opportunities on Commodities.",
    },
    {
      id: 2,
      icon: "/assets/images/trade-on-diverse-sectors-icon.png",
      title: "Trade on Diverse Sectors",
      description:
        "Commodities benefit from market movement across a greater variety of sectors.",
    },
    {
      id: 3,
      icon: "/assets/images/global-opportunities-icon.png",
      title: "Global Opportunities",
      description:
        "Trade on price movement of major Commodities from the Europe and Asia.",
    },
    {
      id: 4,
      icon: "/assets/images/short-the-markets-icon.png",
      title: "Short the Markets",
      description:
        "Trade on falling markets (going short) as well as rising markets.",
    },
    {
      id: 5,
      icon: "/assets/images/trade-anytime-anywhere-icon.png",
      title: "Trade Anytime, Anywhere",
      description:
        "Trade on desktop, close on mobile, our accounts work on multiple devices.",
    },
  ];

  //  Commodities available on Axion Trade
  //   Gold
  const Gold = [
    {
      id: 0,
      title: "Contract Size",
      amounts: "100",
      description:
        "1 Standard Lot Contract Size on Axion Trade is equivalent to 100 ounces (oz) of Gold.",
    },
    {
      id: 1,
      title: "Minimum Lot",
      amounts: "0.01",
      description:
        "The minimum lot size on Axion Trade is 0.01 which is equivalent to 1 ounce (oz) of Gold.",
    },
    {
      id: 2,
      title: "Incremental Steps",
      amounts: "0.01",
      description:
        "The minimum incremental lot size on Axion Trade is 0.01 which is equivalent to 1 ounce (oz) of Gold.",
    },
    {
      id: 3,
      title: "Maximum Lot",
      amounts: "100",
      description:
        "The maximum lot size per trade on Axion Trade is 100 by default which is equivalent to 10,000 ounces (oz) of Gold.",
    },
  ];

  //  Silver
  const Silver = [
    {
      id: 0,
      title: "Contract Size",
      amounts: "5,000",
      description:
        "1 Standard Lot Contract Size on Axion Trade is equivalent to 5,000 ounces (oz) of Silver.",
    },
    {
      id: 1,
      title: "Minimum Lot",
      amounts: "0.01",
      description:
        "The minimum lot size on Axion Trade is 0.01 which is equivalent to 50 ounces (oz) of Silver.",
    },
    {
      id: 2,
      title: "Incremental Steps",
      amounts: "0.01",
      description:
        "The minimum incremental lot size on Axion Trade is 0.01 which is equivalent to 50 ounce (oz) of Silver.",
    },
    {
      id: 3,
      title: "Maximum Lot",
      amounts: "100",
      description:
        "The maximum lot size per trade on Axion Trade is 100 by default which is equivalent to 500,000 ounces (oz) of Silver.",
    },
  ];

  //  BrentCrudeOil
  const BrentCrudeOil = [
    {
      id: 0,
      title: "Contract Size",
      amounts: "1,000",
      description:
        "1 Standard Lot Contract Size on Axion Trade is equivalent to 1,000 barrels of crude oil",
    },
    {
      id: 1,
      title: "Minimum Lot",
      amounts: "0.01",
      description:
        "The minimum lot size on Axion Trade is 0.01 which is equivalent to 10 barrels of crude oil.",
    },
    {
      id: 2,
      title: "Incremental Steps",
      amounts: "0.01",
      description:
        "The minimum incremental lot size on Axion Trade is 0.01 which is equivalent to 10 barrels of crude oil.",
    },
    {
      id: 3,
      title: "Maximum Lot",
      amounts: "100",
      description:
        "The maximum lot size per trade on Axion Trade is 100 by default which is equivalent to 100,000 barrels of crude oil.",
    },
  ];

  //  WTICrudeOil
  const WTICrudeOil = [
    {
      id: 0,
      title: "Contract Size",
      amounts: "1,000",
      description:
        "1 Standard Lot Contract Size on Axion Trade is equivalent to 1,000 barrels of crude oil.",
    },
    {
      id: 1,
      title: "Minimum Lot",
      amounts: "0.01",
      description:
        "The minimum lot size on Axion Trade is 0.01 which is equivalent to 10 barrels of crude oil.",
    },
    {
      id: 2,
      title: "Incremental Steps",
      amounts: "0.01",
      description:
        "The minimum incremental lot size on Axion Trade is 0.01 which is equivalent to 10 barrels of crude oil.",
    },
    {
      id: 3,
      title: "Maximum Lot",
      amounts: "100",
      description:
        "The maximum lot size per trade on Axion Trade is 100 by default which is equivalent to 100,000 barrels of crude oil.",
    },
  ];
  // End Commodities available on Axion Trade

  return (
    <div>
      <section className="">
        <PageTitle
          otherClass=""
          title="Commodities"
          description="Trade popular commodities from around the world such as gold, oil and silver!"
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
              subTitle="Commodities available on Axion Trade"
            />
          </section>
          <section className="mx-36 max-md:mx-10 max-xl:mx-10">
            <TabsList className="grid grid-cols-4 max-md:grid-cols-1 pb-16 bg-gray-100 max-md:bg-transparent">
              <TabsTrigger value="Gold">Gold</TabsTrigger>
              <TabsTrigger value="Silver">Silver</TabsTrigger>
              <TabsTrigger value="Brent Crude Oil">Brent Crude Oil</TabsTrigger>
              <TabsTrigger value="WTI Crude Oil">WTI Crude Oil</TabsTrigger>
            </TabsList>
          </section>

          <TabsContent
            className="mt-10 max-md:mt-48 px-36 max-md:px-10 max-xl:px-10"
            value="Gold"
          >
            <SubTitle
              otherClass="font-normal text-center mb-10 max-md:pt-5"
              subTitle="Spot Gold (XAUUSD) Contract & Specifications"
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

          <TabsContent
            className="mt-10 max-md:mt-48 px-36 max-md:px-10 max-xl:px-10"
            value="Silver"
          >
            <SubTitle
              otherClass="font-normal text-center mb-10 max-md:pt-5"
              subTitle="Spot Silver (XAGUSD) Contract & Specifications"
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

          <TabsContent
            className="mt-10 max-md:mt-48 px-36 max-md:px-10 max-xl:px-10"
            value="Brent Crude Oil"
          >
            <SubTitle
              otherClass="font-normal text-center mb-10"
              subTitle="Brent (UK) Crude Oil (UKOIL) Contract & Specifications"
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

          <TabsContent
            className="mt-10 max-md:mt-48 px-36 max-md:px-10 max-xl:px-10"
            value="WTI Crude Oil"
          >
            <SubTitle
              otherClass="font-normal text-center mb-10"
              subTitle="West Texas Intermediate (US) Crude Oil (XTIUSD) Contract & Specifications"
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
}
