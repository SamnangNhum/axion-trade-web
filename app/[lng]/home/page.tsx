import Link from "next/link";
import Button from "../../shared/button";
import Description from "../../shared/description";
import Title from "../../shared/title";
import Image from "next/image";
import NumberCounter from "../../shared/number-counter";
import BlurIn from "@/components/ui/blur-in";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Marquee from "@/components/ui/marquee";
import BlurFade from "@/components/ui/blur-fade";
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

export const metadata = {
  title: "Axion Trade",
  description: "Simple. Reliable. Innovative.",
  openGraph: {
    title: "Axion Trade",
    description: "Simple. Reliable. Innovative.",
    url: "https://www.axiontrade.net",
    images: [
      {
        url: "/assets/images/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "Axion Trade - Simple. Reliable. Innovative.",
      },
    ],
  },
};
const Home = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  const items = [
    {
      date: "September 27, 2024",
      link: "/",
      linkText: t("press-release"),
      imageSrc: "/assets/images/nothing-image.jpg",
      despcription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
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
    { title: 10000, description: t("clients") },
    { title: 10000000, description: t("trade-executed") },
    { title: 30, description: t("country") },
    { title: 100, description: t("employees-globally") },
  ];

  const logos = [
    {
      src: "/assets/images/bussiness-insider-logo.png",
      alt: "Business Insider Logo",
    },
    { src: "/assets/images/forbes-logo.png", alt: "Forbes Logo" },
    { src: "/assets/images/benzinga-logo.png", alt: "Benzinga Logo" },
    { src: "/assets/images/smile-logo.png", alt: "Smile Logo" },
    { src: "/assets/images/sahu-logo.png", alt: "Sahu Logo" },
    { src: "/assets/images/bloomberg-logo.png", alt: "Bloomberg Logo" },
  ];

  const firstRow = logos.slice(0, logos.length / 2);

  const LogoCard = ({ src, alt }: { src: string; alt: string }) => (
    <div className="flex items-center justify-center">
      <Image src={src} width={200} height={200} alt={alt} />
    </div>
  );

  return (
    <div>
      {/* Page title */}

      <section
        className="text-center bg-[url('/assets/images/bg-axion-trade.png')]
 bg-cover bg-center w-full p-80 max-sm:p-16 max-md:p-32 max-xl:p-48"
      >
        <BlurFade
          key="/assets/images/client-focused.png"
          delay={0.25 * 0.05}
          inView
        >
          <BlurIn
            word={`${t("simple")}. ${t("reliable")}. ${t("innovative")}.`}
            className="text-white  max-md:mt-20 font-display text-center text-5xl font-bold tracking-normal dark:text-white max-xl:text-4xl max-md:text-4xl md:leading-[4rem]"
          />

          <BlurIn
            word={t("get-access-to")}
            className="-mt-1 p-3 text-md text-white"
          />
        </BlurFade>
      </section>

      <section className="px-36 max-sm:px-10 max-md:px-10 max-xl:px-20 -translate-y-28 max-md:-translate-y-12">
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1 max-xl:grid-cols-2">
          {counts.map((count, index) => (
            <div
              key={index}
              className="text-center shadow-lg py-16 max-md:py-10 px-5 rounded-xl bg-white max-md:px-0"
            >
              <NumberCounter otherClass="text-white" number={count.title} />
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
          <BlurFade
            key="/assets/images/client-focused.png"
            delay={0.25 * 0.05}
            inView
          >
            <BlurIn
              word={t("why-axion-trade")}
              className="font-bold text-2xl max-md:text-lg text-blue-700"
            />
            <BlurIn
              word={t("should-be-your-preferred-brokerage")}
              className="font-bold text-4xl max-md:text-2xl max-xl:text-3xl"
            />
          </BlurFade>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-10 items-center justify-center max-md:grid-cols-1">
          <div className="flex justify-center items-center max-md:order-1">
            <BlurFade
              key="/assets/images/client-focused.png"
              delay={0.25 * 0.05}
              inView
            >
              <Image
                src="/assets/images/client-focused.png"
                width={750}
                height={750}
                alt="Client Focused"
              />
            </BlurFade>
          </div>
          <div className="max-md:order-2">
            <BlurFade
              key="/assets/images/client-focused.png"
              delay={0.25 * 0.05}
              inView
            >
              <BlurIn
                word={t("client-focused")}
                className="font-bold text-2xl max-md:text-lg"
              />

              <BlurIn
                word={t("enjoy-a-comprehensive")}
                className="text-md text-gray-500 max-xl:text-md"
              />
            </BlurFade>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-10 items-center justify-center max-md:grid-cols-1">
          <div className=" max-md:order-2">
            <BlurFade
              key="/assets/images/client-focused.png"
              delay={0.25 * 0.05}
              inView
            >
              <BlurIn
                word={t("superior-trading-experience")}
                className="font-bold text-2xl max-md:text-lg"
              />

              <BlurIn
                word={t("quality-trade-execution")}
                className="text-md text-gray-500 max-xl:text-md"
              />
            </BlurFade>
          </div>
          <div className="flex justify-center items-center max-md:order-1">
            <BlurFade
              key="/assets/images/superior-trading-experience.png"
              delay={0.25 * 0.05}
              inView
            >
              <Image
                src="/assets/images/superior-trading-experience.png"
                width={750}
                height={750}
                alt="Client Focused"
              />
            </BlurFade>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center justify-center max-md:grid-cols-1">
          <div className="flex justify-center items-center max-md:order-1">
            <BlurFade
              key="/assets/images/convenient-withdrawals.png"
              delay={0.25 * 0.05}
              inView
            >
              <Image
                src="/assets/images/convenient-withdrawals.png"
                width={500}
                height={500}
                alt="Client Focused"
              />
            </BlurFade>
          </div>

          <div className="max-md:order-2">
            <BlurFade
              key="/assets/images/client-focused.png"
              delay={0.25 * 0.05}
              inView
            >
              <BlurIn
                word={t("convenient-withdrawals")}
                className="font-bold text-2xl max-md:text-lg"
              />

              <BlurIn
                word={t("fast-and-easy")}
                className="text-md text-gray-500 max-xl:text-md"
              />
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Trade Instruments Section*/}
      <section className="text-center bg-[url('/assets/images/bg-axion-trade.png')] bg-cover bg-center w-full p-28 max-md:p-10 max-xl:p-20">
        <BlurFade
          key="/assets/images/forex-pairs.png"
          delay={0.25 * 0.05}
          inView
        >
          <BlurIn
            word={t("trade-your-favourite-instruments-from-around-the-world")}
            className="text-4xl font-bold text-white max-md:text-2xl max-xl:text-3xl max-2xl:text-4xl px-96 max-md:px-0 max-xl:px-0"
          />
        </BlurFade>
        <div className="grid grid-cols-2 gap-4 items-center justify-center max-md:grid-cols-1">
          <div className="flex flex-col justify-center items-center">
            <BlurFade
              key="/assets/images/forex-pairs.png"
              delay={0.25 * 0.05}
              inView
            >
              <Image
                src="/assets/images/forex-pairs.png"
                width={200}
                height={200}
                alt="Client Focused"
              />
            </BlurFade>

            <BlurFade
              key="/assets/images/client-focused.png"
              delay={0.25 * 0.05}
              inView
            >
              <BlurIn
                word={t("forex-pairs")}
                className="text-white font-bold text-2xl max-md:text-xl"
              />

              <BlurIn
                word={t("trade-on-the-strength")}
                className="text-white px-40 my-2 max-md:px-10 max-xl:px-10 text-md max-xl:text-md"
              />
            </BlurFade>
            <div className="relative justify-center mt-5 max-md:mt-5">
              <Link href={"/forex"}>
                <InteractiveHoverButton text={t("learn-more")} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BlurFade
              key="/assets/images/commodities.png"
              delay={0.25 * 0.05}
              inView
            >
              <Image
                src="/assets/images/commodities.png"
                width={200}
                height={200}
                alt="Client Focused"
              />
            </BlurFade>

            <BlurFade
              key="/assets/images/client-focused.png"
              delay={0.25 * 0.05}
              inView
            >
              <BlurIn
                word={t("commodities")}
                className="text-2xl text-white font-bold max-md:text-lg"
              />
              <BlurIn
                word={t("spectate-on-the-price")}
                className=" text-white px-40 my-2 max-md:px-10 max-xl:px-10 max-md:text-[16px] max-xl:text-md"
              />
            </BlurFade>
            <div className="relative justify-center mt-5 max-md:mt-5">
              <Link href={"/commodities"}>
                <InteractiveHoverButton text={t("learn-more")} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logo-Partner Section*/}
      <section className="bg-gray-200 max-md:py-3">
        <div className="relative flex h-[150px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:15s]">
            {firstRow.map((logo, index) => (
              <LogoCard key={index} {...logo} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </section>

      {/* News & Events Section*/}
      <section className="px-36 pt-16 max-sm:pt-16 max-md:px-10 max-xl:px-10">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 my-2 max-md:pb-3">
          <div className="mb-3">
            <BlurFade
              key="/assets/images/client-focused.png"
              delay={0.25 * 0.05}
              inView
            >
              <BlurIn
                word={t("news") + " & " + t("events")}
                className="text-5xl text-start max-md:text-center font-bold max-md:text-2xl max-xl:text-3xl px-0 2xl:text-start max-md:px-0 max-xl:px-0"
              />
              <BlurIn
                word={t("get-updated-to")}
                className="text-lg text-start max-md:text-center px-0 2xl:text-start my-2 max-md:px-10 max-xl:text-md max-md:p-0"
              />
            </BlurFade>
          </div>
          <div className="flex justify-end max-md:justify-center max-md:hidden">
            <Link href={`/posts-events`}>
              <div className="relative justify-center mt-5 max-md:mt-5">
                <BlurFade
                  key="/assets/images/client-focused.png"
                  delay={0.25 * 0.05}
                  inView
                >
                  <InteractiveHoverButton text={t("view-all")} />
                </BlurFade>
              </div>
              {/* <Button button={t("view-all")} /> */}
            </Link>
          </div>
        </div>
        <section className="max-md:flex-col-reverse">
          <BlurFade
            key="/assets/images/client-focused.png"
            delay={0.25 * 0.05}
            inView
          >
            <NewAndEventSection />{" "}
          </BlurFade>
          <Link
            href={`/posts-events`}
            className="2xl:hidden max-xl:hidden max-md:flex max-md:justify-center mt-7"
          >
            {/* <Button button={t("view-all")} /> */}
            <div className="relative justify-center mt-5 max-md:mt-5 max-2xl:hidden max-md:contents">
              <BlurFade
                key="/assets/images/client-focused.png"
                delay={0.25 * 0.05}
                inView
              >
                <InteractiveHoverButton text={t("view-all")} />
              </BlurFade>
            </div>
          </Link>
        </section>
      </section>

      {/* Awards Section*/}
      <section className="text-center py-16 px-36 max-md:px-10 max-xl:px-20">
        <BlurFade
          key="/assets/images/client-focused.png"
          delay={0.25 * 0.05}
          inView
        >
          <BlurIn
            word={t("our-awards")}
            className="text-5xl font-bold max-md:text-2xl max-xl:text-3xl px-96 max-md:px-0 max-xl:px-0"
          />

          {/* <Title title={t("our-awards")} otherClass={"max-md:text-3xl"} /> */}
          <Description
            description={t("the-achivements-we-earnt")}
            otherClass={"text-gray-500 my-2 max-md:px-0 max-xl:px-10"}
          />
        </BlurFade>
        <Carousel opts={{ align: "start" }} className="w-full mt-10">
          <BlurFade
            key="/assets/images/client-focused.png"
            delay={0.25 * 0.05}
            inView
          >
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
          </BlurFade>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};
export default Home;
