import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
import * as SheetPrimitive from "@radix-ui/react-dialog"
import Description from "@/app/shared/description";

const Header = () => {
  const componentServices: { title: string; href: string; }[] = [
    {
      title: "Forex",
      href: "/forex",

    },
    {
      title: "Commodities",
      href: "/commodities",

    },
  ];
  const componentBlog: { title: string; href: string; }[] = [
    {
      title: "STP",
      href: "/stp-account",
    },
  ];
  return (
    <header className="absolute grid grid-cols-3 gap-4 items-center py-4 w-full max-md:grid-cols-2 max-xl:grid-cols-2">
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
      <NavigationMenu className=" max-md:hidden max-xl:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>

          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Markets </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[230px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                {componentServices.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Accounts </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Description description={"Classic"} otherClass={"text-md px-6 pt-5"}/>
              <ul className="grid w-[230px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                {componentBlog.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/platforms " legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Platforms
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      {/* Other*/}
      <div className="flex justify-center items-center space-x-8 ">
        <div className="flex space-x-2 cursor-pointer max-md:hidden">
          <FaUserCircle size={25} color="white" />
          <span className="text-white hover:text-white">Client Portal</span>
        </div>
        {/* Translate */}
        <GrLanguage size={25} color="white" className="cursor-pointer " />
        {/* Menu slide */}
        <Sheet>
          <SheetTrigger>
            <HiMenuAlt3 size={35} color="white" className="cursor-pointer" />

          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <SheetPrimitive.Close >
                    <Image
                      src="/logo-axion-trades.png"
                      width={150}
                      height={150}
                      alt="Axion Trade Logo"
                    />
                  </SheetPrimitive.Close>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="my-12">
              <div className="flex space-x-2 cursor-pointer md:hidden">
                <FaUserCircle size={25} color="black" />
                <span className="text-black hover:text-black">Client Portal</span>
              </div>

              <nav className="my-5 md:hidden">
              <Link href="/" className="text-black hover:text-black text-md flex flex-wrap">
                  <SheetPrimitive.Close >
                    Home
                  </SheetPrimitive.Close>
                </Link>
                <SubTitle subTitle={" Market "} otherClass={"my-2 max-md:text-2xl"} />
                <Link href="/forex" className="text-black hover:text-black text-md flex flex-wrap">
                  <SheetPrimitive.Close >
                    Forex
                  </SheetPrimitive.Close>
                </Link>
                <Link href="/commodities " className="text-black hover:text-black text-md flex flex-wrap">

                  <SheetPrimitive.Close >
                    Commodities
                  </SheetPrimitive.Close>
                </Link>
              </nav>
              <nav className="my-5 md:hidden">
                <SubTitle subTitle={" Account "} otherClass={"my-2 max-md:text-2xl"} />
                <Description description={"Classic"} otherClass={"text-black"} />
                <Link href="/stp-account" className="text-black hover:text-black text-md flex flex-wrap">
                  <SheetPrimitive.Close >
                    STP
                  </SheetPrimitive.Close>
                </Link>
              </nav>

              <nav className="my-5">
                <SubTitle subTitle={"Affiliates"} otherClass={"my-2 max-md:text-2xl"} />
                <Link href="/asset-manager" className="text-black hover:text-black text-md flex flex-wrap">
                  <SheetPrimitive.Close >
                    Asset Manager
                  </SheetPrimitive.Close>
                </Link>
                <Link href="/white-label-partnerships" className="text-black hover:text-black text-md flex flex-wrap">
                  <SheetPrimitive.Close >
                    White Label Partnerships
                  </SheetPrimitive.Close>
                </Link>
              </nav>

              <nav className="my-5">
                <SubTitle subTitle={"Company"} otherClass={"my-2 max-md:text-2xl"} />
                <Link href="/our-edge" className="text-black hover:text-black text-md flex flex-wrap">
                  <SheetPrimitive.Close >
                    Our Edge
                  </SheetPrimitive.Close>
                </Link>
                <Link href="/about-us" className="text-black hover:text-black text-md flex flex-wrap ">
                  <SheetPrimitive.Close >
                    About Us
                  </SheetPrimitive.Close>
                </Link>
                <Link href="/posts&events" className="text-black hover:text-black text-md flex flex-wrap">
                  <SheetPrimitive.Close >
                    Posts & Events
                  </SheetPrimitive.Close>
                </Link>
              </nav>

            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default Header;
