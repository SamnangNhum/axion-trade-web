import React from "react";
import Image from "next/image";
import SubTitle from "@/app/shared/sub-title";

const Footer = () => {
  return (
    <footer className="flex grid-cols-4 gap-5">
      <div className="bg-black">
        <div>
        <Image
          src="/logo-axion-trade.png"
          width={300}
          height={500}
          alt="Picture of the author"
        />
        </div>
        <div>

        </div>
       
      </div>
      <div>
        <SubTitle subTitle="MARKET"/>
      </div>
      <div>
      <SubTitle subTitle="COMPANY"/>
      </div>
      <div>
      <SubTitle subTitle="GET IN TOUCH"/>
      </div>
    </footer>
  );
};

export default Footer;
