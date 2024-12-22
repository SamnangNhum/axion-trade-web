import Button from "../../shared/button";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      {/* PageTitle */}
      <PageTitle title="About Us" description="Simple. Reliable. Innovative." />
      {/* AboutUs */}
      <section className="px-36 pt-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="">
            <SubTitle subTitle={"The Axion Trade"} otherClass={"font-bold"} />
            <Description
              description={
                "Axion Trade was incorporated in 2022 in Cambodia under the name Axiontrade (Cambodia) Co., Ltd., with Company Registration Number 1000179787, and is approved by the Securities and Exchange Regulator (SERC) of Cambodia to operate under a Derivative Broker License No. 037"
              }
              otherClass={"text-gray-500 my-5"}
            />
            <Button button={"Contact Us"} />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={"/assets/images/about-us.png"}
              width={500}
              height={500}
              alt="About Us"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
