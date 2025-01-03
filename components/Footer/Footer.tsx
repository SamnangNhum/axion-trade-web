// "use client";
import React from "react";
import Image from "next/image";
import SubTitle from "@/app/shared/sub-title";
import Title from "@/app/shared/title";
import Link from "next/link";
import Button from "@/app/shared/button";
import Description from "@/app/shared/description";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslation } from "@/app/i18n";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import BlurFade from "../ui/blur-fade";

const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  // SocialLink
  const SocialLink = [
    {
      id: "0",
      icon: FaFacebookF,
      title: "Facebook",
    },
    {
      id: "1",
      icon: FaInstagram,
      title: "Instagram",
    },
    {
      id: "2",
      icon: FaTiktok,
      title: "TikTok",
    },
    {
      id: "3",
      icon: FaYoutube,
      title: "Youtube",
    },
    {
      id: "4",
      icon: FaLinkedinIn,
      title: "LinkedIn",
    },
  ];
  // End SocialLink

  return (
    <footer className="">
      {/* Banner */}
      <div
        className="mx-36 mb-20 max-xl:mx-10 max-xl:mb-16 max-md:mx-5 max-md:mb-16 bg-center bg-cover rounded-3xl"
        style={{ backgroundImage: "url('/assets/images/footer-bg.png')" }}
      >
        <BlurFade
          key="/assets/images/client-focused.png"
          delay={0.25 * 0.05}
          inView
        >
          <div className="py-24 max-xl:py-16 px-20 max-xl:px-10">
            <Title
              title={t("embrace-a-path-to-success-with-us")}
              otherClass="pb-5 text-white text-5xl md:text-2xl xl:text-3xl 2xl:text-4xl"
            />
            <Description
              description={t(
                "become-a-collaborator-in-asia-economic-future.Invest-in-the-Axion-Trade"
              )}
              otherClass="text-white pb-8"
            />
            <div className="flex max-md:list-item">
              <div className="relative justify-center mr-3 max-sm:text-xs max-md:mb-3">
                <Link href={"tel:+855098750005"}>
                  <InteractiveHoverButton text={t("call-us-now")} />
                </Link>
              </div>

              <div className="relative justify-center mr-3 max-sm:text-xs max-md:mb-3">
                <Link href={"mailto:accounts@axiontrade.com.kh"}>
                  <InteractiveHoverButton
                    text={t("Let’s-talk-about-everything")}
                  />
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
      {/* End Banner */}

      {/* Footer Menu */}
      <div className="w-full bg-black flex grid-cols-4 max-md:list-item py-20 px-32 max-xl:px-5 max-md:px-10">
        {/* Logo */}
        <div className="w-full">
          <div>
            <Link href="/">
              <Image
                className="max-xl:w-48 max-md:w-full"
                src="/assets/images/logo-axion-trade.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Link>
          </div>
          {/* SocialLink */}
          <div className="flex mt-10">
            {SocialLink.map((items) => (
              <div
                key={items.id}
                className="text-2xl cursor-pointer max-xl:text-sm max-md:text-xl mx-1 p-2 text-black bg-white rounded-full"
              >
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <items.icon />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p id={items.id}>{items.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
          {/* End SocialLink */}
        </div>
        {/* End Logo */}

        {/* Menu */}
        {/* Left Menu */}
        <div className="w-full pl-32 max-xl:pl-10 max-md:pl-0">
          <div className="mb-10 max-md:mt-10">
            <SubTitle
              subTitle={t("markets")}
              otherClass="mb-5 text-xl text-white"
            />
            <Link
              className="my-1 text-white list-item list-none"
              href={`/${lng}/forex`}
            >
              Forex
            </Link>
            <Link className=" text-white" href={`/${lng}/commodities`}>
              {t("commodities")}
            </Link>
          </div>
          <div>
            <SubTitle
              subTitle={t("affiliates")}
              otherClass="mb-5 text-xl text-white"
            />
            <Link
              className="my-1 text-white list-item list-none"
              href={`/${lng}/asset-manager`}
            >
              {t("asset-manager")}
            </Link>
            <Link
              className="text-white"
              href={`/${lng}/white-label-partnerships`}
            >
              {t("white-label-partnerships")}
            </Link>
          </div>
        </div>
        {/* Right Menu */}
        <div className="w-full max-md:my-10">
          <SubTitle
            subTitle={t("company")}
            otherClass="mb-5 text-xl text-white"
          />
          <Link
            className="my-1 text-white list-item list-none"
            href={`/${lng}/forex/our-edge`}
          >
            {t("our-edge")}
          </Link>
          <Link className=" text-white" href={`/${lng}/about-us`}>
            {t("about-us")}
          </Link>
        </div>
        {/* End Menu */}

        {/* Location and Contact */}
        <div className="w-full">
          <SubTitle
            subTitle={t("get-in-touch")}
            otherClass="mb-5 text-xl text-white"
          />
          <Description
            description="accounts@axiontrade.com.kh"
            otherClass="text-white"
          />
          <Description
            description="Ler, 899-901, St 93, Preah"
            otherClass="my-1 text-white"
          />
          <Description
            description={t("monivong-blvd-(93)-phnom-penh")}
            otherClass=" text-white"
          />
          <Description
            description="+855 098750005"
            otherClass="my-1 text-white"
          />
          <Description description="+855 023238024" otherClass=" text-white" />
        </div>
        {/* End Location and Contact */}
      </div>
      {/* End Footer Menu */}

      {/* Copyright */}
      <div className="flex bg-black pb-14 px-32 max-md:list-item flex-row-reverse max-xl:px-10 max-md:px-5 max-md:text-center">
        <div className="w-full pt-14 flex justify-end border-t-2 border-gray-600">
          <div className="max-md:w-full max-md:grid max-md:grid-cols-3 max-md:text-sm max-xl:flex max-xl:items-center">
            <Link className="text-white" href={`/${lng}/terms-of-use`}>
              {t("terms-of-use")}
            </Link>
            <Link
              className="mx-5 max-md:mx-0 text-white"
              href={`/${lng}/privacy-policy`}
            >
              {t("privacy-policy")}
            </Link>
            <Link className="text-white" href={`/${lng}/cookies-policy`}>
              {t("cookies-policy")}
            </Link>
          </div>
        </div>
        <div className="w-full pt-14 border-t-2 border-gray-600 max-md:border-none">
          <Description
            otherClass="text-white"
            description={t("copyright-©-2024")}
          />
        </div>
      </div>
      {/* End Copyright */}
    </footer>
  );
};

export default Footer;
