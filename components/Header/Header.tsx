import React from "react";
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div>
        <Image
          src="/logo-axion-trade.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="bg-black"
        />
      </div>
      {/* Menu */}
      <nav>
        <ul>
          <li>

          </li>
        </ul>
      </nav>

      <div>

      </div>
    </header>
  );
};

export default Header;
