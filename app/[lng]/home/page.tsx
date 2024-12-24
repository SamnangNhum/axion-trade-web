import Link from "next/link";
import Button from "../../shared/button";
import Description from "../../shared/description";
import SubTitle from "../../shared/sub-title";
import Title from "../../shared/title";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/app/i18n";
import { NewAndEventSection } from "./new-events-section";

const Home = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  const items = [
    {
      date: "September 27, 2024",
      link: "/",
      linkText: t("press-release"),
      imageSrc: "/assets/images/nothing-image.jpg",
      despcription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
      date: "September 27, 2024",
      link: "/",
      linkText: t("press-release"),
      imageSrc: "/assets/images/nothing-image.jpg",
      despcription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
    {
      date: "September 27, 2024",
      link: "/",
      linkText: t("press-release"),
      imageSrc: "/assets/images/nothing-image.jpg",
      despcription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed ",
    },
  ];

  const awards = [
    {
      image: "/assets/images/awards-2015.png",
    },
    {
      image: "/assets/images/awards-2016.png",
    },
    {
      image: "/assets/images/awards-fx-2016.png",
    },
    {
      image: "/assets/images/awards-2017.png",
    },
    {
      image: "/assets/images/awards-2018.png",
    },
    {
      image: "/assets/images/awards-broker-2018.png",
    },
    {
      image: "/assets/images/awards-broker-fx.png",
    },
    {
      image: "/assets/images/awards-2019.png",
    },
    {
      image: "/assets/images/awards-broker-2019.png",
    },
  ];
  const counts = [
    { title: "10,000+", description: t("clients") },
    { title: "10,000,000+", description: t("trade-executed") },
    { title: "30+", description: t("country") },
    { title: "100+", description: t("employees-globally") },
  ];

  return (
    <div>
      {/* Page title */}
      <section
        className="text-center bg-[url('/assets/images/bg-axion-trade.png')]
 bg-cover bg-center w-full p-80 max-sm:p-16 max-md:p-32 max-xl:p-48"
      >
        <Title
          title={
            t("simple") + ". " + t("reliable") + ". " + t("innovative") + "."
          }
          otherClass="text-white max-md:mt-20"
        />
        <Description
          description={t("get-access-to")}
          otherClass="text-white p-3"
        />
      </section>

      <section className="px-36 max-sm:px-10 max-md:px-10 max-xl:px-20 -translate-y-28 max-md:-translate-y-12">
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1 max-xl:grid-cols-2">
          {counts.map((count, index) => (
            <div
              key={index}
              className="text-center shadow-lg py-16 max-md:py-10 px-5 rounded-xl bg-white max-md:px-0"
            >
              <Title
                title={count.title}
                otherClass={"font-bold max-xl:text-4xl"}
              />
              <Description
                description={count.description}
                otherClass={"text-gray-500"}
              />
            </div>
          ))}
        </div>
      </section>

      {/*Be Your Preferred Brokerage Section*/}
      <section
        className="text-center pb-16 px-36 max-md:px-10 max-xl:px-20 
"
      >
        <div className="pb-16">
          <SubTitle
            subTitle={t("why-axion-trade")}
            otherClass={"text-blue-700 max-md:text-lg"}
          />
          <Title
            title={t("should-be-your-preferred-brokerage")}
            otherClass={"max-md:text-3xl"}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pb-10 items-center justify-center max-md:grid-cols-1">
          <div className="flex justify-center items-center   max-md:order-1">
            <Image
              src="/assets/images/client-focused.png"
              width={750}
              height={750}
              alt="Client Focused"
            />
          </div>
          <div className="max-md:order-2">
            <SubTitle
              subTitle={t("client-focused")}
              otherClass={"max-md:text-lg"}
            />
            <Description
              description={t("enjoy-a-comprehensive")}
              otherClass={"text-gray-500"}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-10 items-center justify-center max-md:grid-cols-1">
          <div className=" max-md:order-2">
            <SubTitle
              subTitle={t("superior-trading-experience")}
              otherClass={"max-md:text-lg"}
            />
            <Description
              description={t("quality-trade-execution")}
              otherClass={"text-gray-500"}
            />
          </div>
          <div className="flex justify-center items-center max-md:order-1">
            <Image
              src="/assets/images/superior-trading-experience.png"
              width={750}
              height={750}
              alt="Superior Trading Experience"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center justify-center max-md:grid-cols-1">
          <div className="flex justify-center items-center max-md:order-1">
            <Image
              src="/assets/images/convenient-withdrawals.png"
              width={500}
              height={500}
              alt="Convenient Withdrawals"
            />
          </div>
          <div className="max-md:order-2">
            <SubTitle
              subTitle={t("convenient-withdrawals")}
              otherClass={"max-md:text-lg"}
            />
            <Description
              description={t("fast-and-easy")}
              otherClass={"text-gray-500"}
            />
          </div>
        </div>
      </section>

      {/* Trade Instruments Section*/}
      <section className="text-center bg-[url('/assets/images/bg-axion-trade.png')] bg-cover bg-center w-full p-28 max-md:p-10 max-xl:p-20">
        <Title
          title={t("trade-your-favourite-instruments-from-around-the-world")}
          otherClass={
            "text-white max-md:text-3xl px-96 max-md:px-0 max-xl:px-0"
          }
        />
        <div className="grid grid-cols-2 gap-4 items-center justify-center max-md:grid-cols-1">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/images/forex-pairs.png"
              width={200}
              height={200}
              alt="Forex Pairs"
            />
            <SubTitle
              subTitle={t("forex-pairs")}
              otherClass={"text-white max-md:text-lg"}
            />
            <Description
              description={t("trade-on-the-strength")}
              otherClass={"text-white px-40 my-2 max-md:px-10 max-xl:px-10"}
            />
            <Button button={t("learn-more")} otherClass="mt-5 max-md:mt-5" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/images/commodities.png"
              width={200}
              height={200}
              alt="Commodities"
            />
            <SubTitle
              subTitle={t("commodities")}
              otherClass={"text-white max-md:text-lg"}
            />
            <Description
              description={t("spectate-on-the-price")}
              otherClass={"text-white px-40 my-2 max-md:px-10 max-xl:px-10"}
            />
            <Button button={t("learn-more")} otherClass="mt-5 max-md:mt-5" />
          </div>
        </div>
      </section>

      {/* Logo-Partner Section*/}
      <section className="bg-gray-200 max-md:py-3">
        <div className="grid grid-cols-6 gap-4 items-center justify-center max-md:grid-cols-3 max-md:gap-2">
          {[
            {
              src: "/assets/images/bussiness-insider-logo.png",
              alt: "/assets/images/Business Insider Logo",
            },
            { src: "/assets/images/forbes-logo.png", alt: "Forbes Logo" },
            { src: "/assets/images/benzinga-logo.png", alt: "Benzinga Logo" },
            { src: "/assets/images/smile-logo.png", alt: "Smile Logo" },
            { src: "/assets/images/sahu-logo.png", alt: "Sahu Logo" },
            { src: "/assets/images/bloomberg-logo.png", alt: "Bloomberg Logo" },
          ].map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={logo.src} width={200} height={200} alt={logo.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* News & Events Section*/}
      <section className="px-36 pt-16 max-sm:pt-16 max-md:px-10 max-xl:px-10">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 my-2 max-md:pb-10">
          <div>
            <Title
              title={t("news") + " & " + t("events")}
              otherClass={"max-md:text-3xl max-md:text-center"}
            />
            <Description
              description={t("get-updated-to")}
              otherClass={
                "text-gray-500 my-2 max-md:px-0 max-md:text-center max-xl:px-0"
              }
            />
          </div>
          <div className="flex justify-end max-md:justify-center max-md:hidden">
            <Link href={`/posts-events`}>
              <Button button={t("view-all")} />
            </Link>
          </div>
        </div>
        <section className="max-md:flex-col-reverse">
          <NewAndEventSection />{" "}
          <Link href={`/posts-events`} className="2xl:hidden max-xl:hidden max-md:flex max-md:justify-center mt-7">
            <Button button={t("view-all")} />
          </Link>
        </section>
      </section>

      {/* Awards Section*/}
      <section className="text-center py-16 px-36 max-md:px-10 max-xl:px-20">
        <Title title={t("our-awards")} otherClass={"max-md:text-3xl"} />
        <Description
          description={t("the-achivements-we-earnt")}
          otherClass={"text-gray-500 my-2 max-md:px-0 max-xl:px-10"}
        />
        <Carousel opts={{ align: "start" }} className="w-full mt-10">
          <CarouselContent>
            {awards.map((award, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <Image
                        src={award.image}
                        width={600}
                        height={600}
                        alt={`Award ${index + 1}`}
                      />
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
};
export default Home;
