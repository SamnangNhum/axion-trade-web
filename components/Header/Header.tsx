/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
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
import * as SheetPrimitive from "@radix-ui/react-dialog";
import Description from "@/app/shared/description";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "@/app/i18n";

const Header = ({ lng }: { lng: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [translations, setTranslations] = useState<any>(null);

  // Handle sticky behavior on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch translations
  useEffect(() => {
    const fetchTranslations = async () => {
      const { t } = await useTranslation(lng);
      setTranslations(() => t);
    };

    fetchTranslations();
  }, [lng]);

  if (!translations) return null; // Render nothing while loading translations

  const t = translations;

  const componentAffiliates: { title: string; href: string }[] = [
    { title: t("asset-manager"), href: `/${lng}/asset-manager` },
    {
      title: t("white-label-partnerships"),
      href: `/${lng}/white-label-partnerships`,
    },
  ];

  const componentCompany: { title: string; href: string }[] = [
    { title: t("our-edge"), href: "/our-edge" },
    { title: t("about-us"), href: "/about-us" },
    { title: t("posts-&-events"), href: "/posts-events" },
  ];

  const componentMarket: { title: string; href: string }[] = [
    { title: t("forex"), href: `/${lng}/forex` },
    { title: t("commodities"), href: `/${lng}/commodities` },
  ];

  const componentAccount: { title: string; href: string }[] = [
    { title: t("stp"), href: `/${lng}/stp-account` },
  ];

  const componentPlatforms: { title: string; href: string }[] = [
    { title: t("metatrader-5"), href: `/${lng}/metatrader5` },
  ];

  return (
    <header
      className={`${
        isScrolled
          ? "fixed top-0 left-0 z-50 bg-black py-4 shadow-md transition-all"
          : "absolute py-5"
      } grid grid-cols-3 gap-4 items-center w-full max-md:grid-cols-2 max-xl:grid-cols-2 max-md:px-7`}
    >
      {/* Logo */}
      <div className="flex justify-center max-md:justify-normal">
        <Link href={`/${lng}`}>
          <Image
            className="max-md:w-32"
            src="/assets/images/logo-axion-trade.png"
            width={150}
            height={150}
            alt="Axion Trade Logo"
          />
        </Link>
      </div>

      {/* Menu */}
      <NavigationMenu className="max-md:hidden max-xl:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={`/${lng}`} className={navigationMenuTriggerStyle()}>
                {t("home")}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>{t("markets")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[230px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                {componentMarket.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>{t("accounts")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Description
                description={t("classic")}
                otherClass="text-md px-6 pt-5 font-bold"
              />
              <ul className="grid w-[230px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                {componentAccount.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>{t("platforms")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[230px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                {componentPlatforms.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/platforms" className={navigationMenuTriggerStyle()}>
                {t("platforms")}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Other */}
      <div className="flex justify-center max-xl:justify-start max-md:justify-end items-center space-x-8">
        <div className="flex space-x-2 cursor-pointer max-md:hidden">
          <FaUserCircle size={25} color="white" />
          <span className="text-white">{t("client-portal")}</span>
        </div>
        {/* Language Switcher */}

        <LanguageSwitcher />
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger>
            <HiMenuAlt3 size={35} color="white" className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <SheetPrimitive.Close>
                    <Image
                      src="/assets/images/logo-axion-trades.png"
                      width={150}
                      height={150}
                      alt="Axion Trade Logo"
                    />
                  </SheetPrimitive.Close>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="my-12">
              <div className="flex space-x-2 cursor-pointer 2xl:hidden">
                <FaUserCircle size={25} color="black" />
                <span className="text-black">{t("client-portal")}</span>
              </div>
              <nav className="my-5">
                <SubTitle subTitle={t("affiliates")} otherClass="my-3" />
                {componentAffiliates.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-black hover:text-black flex my-1"
                  >
                    <SheetPrimitive.Close>{item.title}</SheetPrimitive.Close>
                  </Link>
                ))}
              </nav>
              <nav className="my-5">
                <SubTitle subTitle={t("company")} otherClass="my-3" />
                {componentCompany.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-black hover:text-black flex my-1"
                  >
                    <SheetPrimitive.Close>{item.title}</SheetPrimitive.Close>
                  </Link>
                ))}
              </nav>
              <nav className="my-5 2xl:hidden">
                <SubTitle subTitle={t("markets")} otherClass="my-3" />
                {componentMarket.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-black hover:text-black flex my-1"
                  >
                    <SheetPrimitive.Close>{item.title}</SheetPrimitive.Close>
                  </Link>
                ))}
              </nav>
              <nav className="my-5 2xl:hidden">
                <SubTitle subTitle={t("accounts")} otherClass="my-3" />
                <Description
                  description={t("classic")}
                  otherClass="text-md font-bold"
                />
                {componentAccount.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-black hover:text-black my-1"
                  >
                    <SheetPrimitive.Close>{item.title}</SheetPrimitive.Close>
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {
    title: string;
    children?: React.ReactNode;
    className?: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
export default Header;
