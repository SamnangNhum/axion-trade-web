import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import Title from "@/app/shared/title";
import Description from "@/app/shared/description";
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import SubTitle from "@/app/shared/sub-title";



const Header = () => {
  return (
    <header className="absolute grid grid-cols-3 gap-4 items-center p-4 w-full">
      {/* Logo */}
      <div className="flex justify-center ">
        <Link href="/">
          <Image
            src="/logo-axion-trade.png"
            width={150}
            height={150}
            alt="Axion Trade Logo"
          />
        </Link>
      </div>

      {/* Menu */}
      <nav className="hidden md:flex justify-center space-x-10   ">
        <Link href="/" className="text-white hover:text-white">
          Home
        </Link>
        <Link href="/markets" className="text-white hover:text-white">
          Markets
        </Link>
        <Link href="/accounts" className="text-white hover:text-white">
          Accounts
        </Link>
        <Link href="/platforms" className="text-white hover:text-white">
          Platforms
        </Link>
      </nav>

      {/* Other */}
      <div className="flex justify-center items-center space-x-8 ">
        <div className="flex space-x-2 cursor-pointer">
          <FaUserCircle size={25} color="white" />
          <span className="text-white hover:text-white">Client Portal</span>
        </div>
        {/* Translate */}
        <GrLanguage size={25} color="white" className="cursor-pointer" />
        {/* Menu slide */}
        {/* <Sheet>
          <SheetTrigger>
            <HiMenuAlt3 size={35} color="white" className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <Image
                    src="/logo-axion-trades.png"
                    width={150}
                    height={150}
                    alt="Axion Trade Logo"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="my-12">

            <nav className="my-5 md:hidden">
              <SubTitle subTitle={"Menu "} otherClass={"my-2"}/>
                <Link href="/asset-manager" className="text-black hover:text-black text-md flex flex-wrap">
                  Home
                </Link>
                <Link href="/white-label-partnerships" className="text-black hover:text-black text-md flex flex-wrap">
                  Market
                </Link>
              </nav>

              
              <nav className="my-5">
              <SubTitle subTitle={"Affiliates"} otherClass={"my-2"}/>
                <Link href="/asset-manager" className="text-black hover:text-black text-md flex flex-wrap">
                  Asset Manager
                </Link>
                <Link href="/white-label-partnerships" className="text-black hover:text-black text-md flex flex-wrap">
                  White Label Partnerships
                </Link>
              </nav>
              <nav className="my-5">
              <SubTitle subTitle={"Company"} otherClass={"my-2"}/>
                <Link href="/our-edge" className="text-black hover:text-black text-md flex flex-wrap">
                  Our Edge
                </Link>
                <Link href="/about-us" className="text-black hover:text-black text-md flex flex-wrap ">
                  About Us
                </Link>
                <Link href="/posts&events" className="text-black hover:text-black text-md flex flex-wrap">
                  Posts & Events
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet> */}
      </div>
    </header>
  );
};

export default Header;
