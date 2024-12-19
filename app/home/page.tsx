import Link from "next/link";
import Button from "../shared/button";
import Description from "../shared/description";
import SubTitle from "../shared/sub-title";
import Title from "../shared/title";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const items = [
    {
      date: "September 27, 2024",
      link: "/",
      linkText: "Press Release",
      imageSrc: "/nothing-image.jpg",
      despcription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
      date: "September 27, 2024",
      link: "/",
      linkText: "Press Release",
      imageSrc: "/nothing-image.jpg",
      despcription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
      date: "September 27, 2024",
      link: "/",
      linkText: "Press Release",
      imageSrc: "/nothing-image.jpg",
      despcription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
  ];

  const awards = [
    {
      image: "/awards-2015.png",
    },
    {
      image: "/awards-2016.png",
    },
    {
      image: "/awards-fx-2016.png",
    },
    {
      image: "/awards-2017.png",
    },
    {
      image: "/awards-2018.png",
    },
    {
      image: "/awards-broker-2018.png",
    },
    {
      image: "/awards-broker-fx.png",
    },
    {
      image: "/awards-2019.png",
    },
    {
      image: "/awards-broker-2019.png",
    },

  ];
  const counts = [
    { title: "10,000+", description: "Clients" },
    { title: "10,000,000+", description: "Trade Executed" },
    { title: "30+", description: "Country" },
    { title: "100+", description: "Employees Globally" },
  ];

  return (
    <div>
      {/* Page title */}
      <section className="text-center bg-[url('../assets/images/bg-axion-trade.png')] bg-cover bg-center w-full p-80 max-sm:p-16 max-md:p-32 max-xl:p-48">
        <Title title="Simple. Reliable. Innovative." otherClass="text-white max-md:mt-20" />
        <Description
          description="Get access to 100+ different markets with over 1,000+ market instruments when you trade with Axion Trade."
          otherClass="text-white p-3"
        />
      </section>

      <section className="px-36 max-sm:px-10 max-md:px-10 max-xl:px-20 -translate-y-28 max-md:-translate-y-12">
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1 max-xl:grid-cols-2">
          {counts.map((count, index) => (
            <div key={index} className="text-center shadow-lg py-10 px-16 rounded-xl bg-white max-md:px-0">
              <Title title={count.title} otherClass={"font-bold max-xl:text-4xl"} />
              <Description description={count.description} otherClass={"text-gray-500"} />
            </div>
          ))}
        </div>
      </section>

      {/*Be Your Preferred Brokerage Section*/}
      <section className="text-center pb-16 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle subTitle={"Why Axion Trade Should"} otherClass={"text-blue-700 max-md:text-lg"} />
        <Title title={"Be Your Preferred Brokerage"} otherClass={"max-md:text-3xl"} />

        <div className="grid grid-cols-2 gap-4 items-center justify-center max-md:grid-cols-1">
          <div className="flex justify-center items-center   max-md:order-1">
            <Image src="/client-focused.png" width={600} height={600} alt="Client Focused" />
          </div>
          <div className="max-md:order-2">
            <SubTitle subTitle={"Client Focused"} otherClass={"max-md:text-lg"} />
            <Description
              description={"Enjoy a comprehensive trading experience with us, trade anytime, anywhere"}
              otherClass={"text-gray-500"}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center justify-center max-md:grid-cols-1">
          <div className=" max-md:order-2">
            <SubTitle subTitle={"Superior Trading Experience"} otherClass={"max-md:text-lg"} />
            <Description
              description={"Quality trade execution, risk management and transparent pricing"}
              otherClass={"text-gray-500"}
            />
          </div>
          <div className="flex justify-center items-center max-md:order-1">
            <Image src="/superior-trading-experience.png" width={600} height={600} alt="Superior Trading Experience" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center justify-center max-md:grid-cols-1">
          <div className="flex justify-center items-center max-md:order-1">
            <Image src="/convenient-withdrawals.png" width={600} height={600} alt="Convenient Withdrawals" />
          </div>
          <div className="max-md:order-2">
            <SubTitle subTitle={"Convenient Withdrawals"} otherClass={"max-md:text-lg"} />
            <Description description={"Fast and easy, secured payments and withdrawals"} otherClass={"text-gray-500"} />
          </div>
        </div>
      </section>

      {/* Trade Instruments Section*/}
      <section className="text-center bg-[url('../assets/images/bg-axion-trade.png')] bg-cover bg-center w-full p-28 max-md:p-10 max-xl:p-20">
        <Title
          title={"Trade Your Favourite Instruments From Around The World"}
          otherClass={"text-white max-md:text-3xl px-96 max-md:px-0 max-xl:px-0"}
        />
        <div className="grid grid-cols-2 gap-4 items-center justify-center max-md:grid-cols-1">
          <div className="flex flex-col justify-center items-center">
            <Image src="/forex-pairs.png" width={200} height={200} alt="Forex Pairs" />
            <SubTitle subTitle={"Forex Pairs"} otherClass={"text-white max-md:text-lg"} />
            <Description
              description={"Trade on the strength of one currency versus another on the largest and most liquid market in the world."}
              otherClass={"text-white px-40 my-2 max-md:px-10 max-xl:px-10"}
            />
            <Button button={"Learn More"} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src="/commodities.png" width={200} height={200} alt="Commodities" />
            <SubTitle subTitle={"Commodities"} otherClass={"text-white max-md:text-lg"} />
            <Description
              description={"Speculate on the price of all the most popular commodities, including gold, silver, oil, and natural gas."}
              otherClass={"text-white px-40 my-2 max-md:px-10 max-xl:px-10"}
            />
            <Button button={"Learn More"} />
          </div>
        </div>
      </section>

      {/* Logo-Partner Section*/}
      <section className="bg-gray-200">
        <div className="grid grid-cols-6 gap-4 items-center justify-center max-md:grid-cols-1">
          {[
            { src: "/bussiness-insider-logo.png", alt: "Business Insider Logo" },
            { src: "/forbes-logo.png", alt: "Forbes Logo" },
            { src: "/benzinga-logo.png", alt: "Benzinga Logo" },
            { src: "/smile-logo.png", alt: "Smile Logo" },
            { src: "/sahu-logo.png", alt: "Sahu Logo" },
            { src: "/bloomberg-logo.png", alt: "Bloomberg Logo" },
          ].map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={logo.src} width={200} height={200} alt={logo.alt} />
            </div>
          ))}
        </div>
      </section>


      {/* News & Events Section*/}
      <section className="px-36 pt-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 my-2">
          <div>
            <Title title={"News & Events"} otherClass={"max-md:text-3xl max-md:text-center"} />
            <Description
              description={"Get updated on our latest activities and events."}
              otherClass={"text-gray-500 my-2 max-md:px-0 max-md:text-center max-xl:px-0"}
            />
          </div>
          <div className="flex justify-end max-md:justify-center">
            <Button button={"View All"} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-20 max-md:grid-cols-1 max-md:gap-5">
          {items.map((item, index) => (
            <div key={index}>
              <Image src={item.imageSrc} width={500} height={500} alt="Image description" />
              <div className="grid grid-cols-2 gap-4 my-2">
                <Description description={item.date} otherClass={""} />
                <div className="flex justify-end">
                  <Link className="text-blue-500" href={item.link}>{item.linkText}</Link>
                </div>
              </div>
              <Description description={item.despcription} otherClass={""} />
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section*/}
      <section className="text-center py-16 px-36 max-md:px-10 max-xl:px-20">
        <Title title={"Our Awards"} otherClass={"max-md:text-3xl"} />
        <Description
          description={"The achievements we've earned throughout the journey with Axion Trade."}
          otherClass={"text-gray-500 my-2 max-md:px-0 max-xl:px-10"}
        />
        <Carousel opts={{ align: "start" }} className="w-full mt-10">
          <CarouselContent>
            {awards.map((award, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <Image src={award.image} width={600} height={600} alt={`Award ${index + 1}`} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
