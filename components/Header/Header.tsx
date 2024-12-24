/* eslint-disable react-hooks/rules-of-hooks */
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
import * as SheetPrimitive from "@radix-ui/react-dialog";
import Description from "@/app/shared/description";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "@/app/i18n";

const Header = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  const componentServices: { title: string; href: string }[] = [
    { title: t("forex"), href: "/forex" },
    { title: t("commodities"), href: "/commodities" },
  ];

  const componentBlog: { title: string; href: string }[] = [
    { title: t("stp"), href: "/stp-account" },
  ];

  return (
    <header className="absolute grid grid-cols-3 gap-4 items-center py-4 w-full max-md:grid-cols-2 max-xl:grid-cols-2">
      {/* Logo */}
      <div className="flex justify-center">
        <Link href={`/${lng}`}>
          <Image
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
                {componentServices.map((component) => (
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
                otherClass="text-md px-6 pt-5"
              />
              <ul className="grid w-[230px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                {componentBlog.map((component) => (
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
            <NavigationMenuLink asChild>
              <Link href="/platforms" className={navigationMenuTriggerStyle()}>
                {t("platforms")}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Other */}
      <div className="flex justify-center items-center space-x-8">
        <div className="flex space-x-2 cursor-pointer max-md:hidden">
          <FaUserCircle size={25} color="white" />
          <span className="text-white">{t("client_portal")}</span>
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
              <nav className="my-5">
                <SubTitle subTitle={t("markets")} otherClass="my-2" />
                {componentServices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-black hover:text-black"
                  >
                    <SheetPrimitive.Close>{item.title}</SheetPrimitive.Close>
                  </Link>
                ))}
              </nav>
              <nav className="my-5">
                <SubTitle subTitle={t("accounts")} otherClass="my-2" />
                {componentBlog.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-black hover:text-black"
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
