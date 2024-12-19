"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SubTitle from "@/app/shared/sub-title";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Description from "@/app/shared/description";

const NAVIGATION_DATA = [
  {
    title: "Home",
    href: "/",
    type: "link",
  },
  {
    title: "Markets",
    type: "submenu",
    items: [
      { title: "Forex", href: "/forex" },
      { title: "Commodities", href: "/commodities" },
    ],
  },
  {
    title: "Accounts",
    type: "submenu",
    items: [
      { title: "STP", href: "/stp-account" },
    ],
    description: "Classic",
  },
  {
    title: "Platforms",
    href: "/platforms",
    type: "link",
  },
];

const SHEET_NAVIGATION = [
  {
    title: "Market",
    items: [
      { title: "Forex", href: "/forex" },
      { title: "Commodities", href: "/commodities" },
    ],
  },
  {
    title: "Account",
    description: "Classic",
    items: [{ title: "STP", href: "/stp-account" }],
  },
  {
    title: "Affiliates",
    items: [
      { title: "Asset Manager", href: "/asset-manager" },
      { title: "White Label Partnerships", href: "/white-label-partnerships" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "Our Edge", href: "/our-edge" },
      { title: "About Us", href: "/about-us" },
      { title: "Posts & Events", href: "/posts&events" },
    ],
  },
];

const Header = () => {
  return (
    <header className="absolute grid grid-cols-3 gap-4 items-center py-4 w-full max-md:grid-cols-2 max-xl:grid-cols-2">
      {/* Logo */}
      <div className="flex justify-center">
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
      <NavigationMenu className="max-md:hidden max-xl:hidden">
        <NavigationMenuList>
          {NAVIGATION_DATA.map((item, index) => {
            if (item.type === "link") {
              return (
                <NavigationMenuItem key={index}>
                  <Link ref={item.href} legacyBehavior passHref href={""}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            }
            if (item.type === "submenu") {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.description && (
                      <Description
                        description={item.description}
                        otherClass={"text-md px-7 pt-5"}
                      />
                    )}
                    <ul className="grid w-[230px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                      {item.items?.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          title={subItem.title}
                          href={subItem.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            }
            return null;
          })}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Other */}
      <div className="flex justify-center items-center space-x-8">
        <div className="flex space-x-2 cursor-pointer max-md:hidden">
          <FaUserCircle size={25} color="white" />
          <span className="text-white hover:text-white">Client Portal</span>
        </div>
        <GrLanguage size={25} color="white" className="cursor-pointer" />
        <Sheet>
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
              {SHEET_NAVIGATION.map((section, index) => (
                <nav className="my-5" key={index}>
                  <SubTitle subTitle={section.title} otherClass={"my-2"} />
                  {section.description && (
                    <Description
                      description={section.description}
                      otherClass={"text-black"}
                    />
                  )}
                  {section.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-black hover:text-black text-md flex flex-wrap"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

const ListItem = ({ title, href }: { title: string; href: string }) => (
  <li>
    <Link
      href={href}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      )}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
    </Link>
  </li>
);

export default Header;
