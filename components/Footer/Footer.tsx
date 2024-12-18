"use client";
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

const Footer = () => {
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
        className="mx-36 m-20 max-xl:mx-10 max-xl:my-16 max-md:mx-5 max-md:my-16 bg-center bg-cover rounded-3xl"
        style={{ backgroundImage: "url('/footer-bg.png')" }}
      >
        <div className="py-28 max-xl:py-16 px-20 max-xl:px-10">
          <Title
            title="Embrace a path to success with us"
            otherClass="pb-5 text-white"
          />
          <Description
            description="Become a collaborator in Asia's economic future.Invest in the Axion Trade"
            otherClass="text-white pb-8"
          />
          <div className="flex max-md:list-item">
            <Button
              button="Call us now"
              otherClass="mr-3 max-sm:text-sm max-md:mb-3"
            />
            <Button
              button="Let’s talk about everything"
              otherClass="bg-transparent border-2 border-blue-600 max-sm:text-sm"
            />
          </div>
        </div>
      </div>
      {/* End Banner */}

      {/* Footer Menu */}
      <div className="w-full bg-black flex grid-cols-4 max-md:list-item py-20 px-32 max-xl:px-5 max-md:px-10">
        {/* Logo */}
        <div className="w-full">
          <div>
            <a href="/">
              <Image
                className="max-xl:w-48 max-md:w-full"
                src="/logo-axion-trade.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </a>
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
            <SubTitle subTitle="MARKETS" otherClass="mb-5 text-xl text-white" />
            <Link
              className="my-1 text-lg text-white list-item list-none"
              href="/Forex"
            >
              Forex
            </Link>
            <Link className="text-lg text-white" href="/Commodities">
              Commodities
            </Link>
          </div>
          <div>
            <SubTitle
              subTitle="AFFILIATES"
              otherClass="mb-5 text-xl text-white"
            />
            <Link
              className="my-1 text-lg text-white list-item list-none"
              href="/Asset Manager"
            >
              Asset Manager
            </Link>
            <Link
              className="text-lg text-white"
              href="/White Label Partnerships"
            >
              White Label Partnerships
            </Link>
          </div>
        </div>
        {/* Right Menu */}
        <div className="w-full max-md:my-10">
          <SubTitle subTitle="COMPANY" otherClass="mb-5 text-xl text-white" />
          <Link
            className="my-1 text-lg text-white list-item list-none"
            href="/Our Edge"
          >
            Our Edge
          </Link>
          <Link className="text-lg text-white" href="/About Us">
            About Us
          </Link>
        </div>
        {/* End Menu */}

        {/* Location and Contact */}
        <div className="w-full">
          <SubTitle
            subTitle="GET IN TOUCH"
            otherClass="mb-5 text-xl text-white"
          />
          <Description
            description="accounts@axiontrade.com.kh"
            otherClass="text-lg text-white"
          />
          <Description
            description="Ler, 899-901, St 93, Preah"
            otherClass="my-1 text-lg text-white"
          />
          <Description
            description="Monivong Blvd (93), Phnom Penh"
            otherClass="text-lg text-white"
          />
          <Description
            description="+855 098750005"
            otherClass="my-1 text-lg text-white"
          />
          <Description
            description="+855 023238024"
            otherClass="text-lg text-white"
          />
        </div>
        {/* End Location and Contact */}
      </div>
      {/* End Footer Menu */}

      {/* Copyright */}
      <div className="flex bg-black pb-14 px-32 max-md:list-item flex-row-reverse max-xl:px-10 max-md:px-10 max-md:text-center">
        <div className="w-full pt-14 flex justify-end border-t-2 border-gray-600">
          <Link className=" text-white" href="/Terms of use">
            Terms of use
          </Link>
          <Link className="mx-5 text-white" href="/Privacy Policy">
            Privacy Policy
          </Link>
          <Link className="text-white" href="/Cookies Policy">
            Cookies Policy
          </Link>
        </div>
        <div className="w-full pt-14 border-t-2 border-gray-600 max-md:border-none">
          <p className="text-white">
            Copyright © 2024 Axion Trade ALL RIGHTS RESERVED All rights
            reserved.
          </p>
        </div>
      </div>
      {/* End Copyright */}
    </footer>
  );
};

export default Footer;
