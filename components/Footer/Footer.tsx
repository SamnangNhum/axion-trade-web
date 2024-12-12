import React from "react";
import Image from "next/image";
import SubTitle from "@/app/shared/sub-title";

const Footer = () => {
  return (
    <footer className="w-full flex grid-cols-4 gap-52 bg-black p-20">
      <div className="">
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
        <SubTitle subTitle="MARKET" otherClass="text-white"/>
      </div>
      <div>
      <SubTitle subTitle="COMPANY" otherClass="text-white"/>
      </div>
      <div>
      <SubTitle subTitle="GET IN TOUCH" otherClass="text-white"/>
      </div>
    </footer>
  );
};

export default Footer;
