import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { FaUserCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <header className="grid grid-cols-3 gap-4 items-center p-4 pb-96 bg-[url('../assets/images/bg-axion-trade.png')] bg-cover bg-center">
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
      <nav className="flex justify-center space-x-10">
        <Link href="/" className="text-white hover:text-white ">
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

      <div className="flex justify-center items-center space-x-8">
        <div className="flex space-x-2">
          <FaUserCircle size={25} color="white" />
          <span className="text-white hover:text-white">Client Portal</span>
        </div>
        <GrLanguage size={25} color="white" />
        <HiMenuAlt3 size={35} color="white" />
      </div>
    </header>
  );
};

export default Header;
