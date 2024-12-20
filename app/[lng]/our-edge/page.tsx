import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import Title from "../../shared/title";
import Image from "next/image";

export default function OurEdge() {
  const counts = [
    { title: "10,000+", description: "Clients" },
    { title: "10,000,000+", description: "Trade Executed" },
    { title: "30+", description: "Country" },
    { title: "100+", description: "Employees Globally" },
  ];

  const layers = [
    {
      title: "The First Layer",
      descriptions: [
        "Insurance against market slippages. Axion Trade provides insurance against market slippages due to trading periods associated with high volatility (market news, black swan events, etc.), limiting a Client’s trade losses to a maximum of 2.0 pips between their stop-loss price setting and executed fill price, a feature for our Pro and Institutional account holders. For our Standard account holders, Axion Trade guarantees a better price requote should the market slippage be more than 2.0 pips due to a stop-loss execution.",
        "This service is provided by Axion Trade’s legal partner (FSE Law) which ensures a legal framework for any trade disputes that may arise due to volatile market conditions. This guarantees that Clients can trade without worry or fear of potential market manipulation by our liquidity providers (LPs) or electronic communications network (ECN) providers. All trade disputes are handled in a timely manner, ensuring Clients receive rightful refunds for trade losses arising from market slippages.",
      ],
    },
    {
      title: "The Second Layer",
      descriptions: [
        "Corporate funds and client funds are kept in separate bank accounts. This ensures brokerage operational expenses are not mixed with client funds, adding a layer of safety for our Clients.",
      ],
    },
    {
      title: "The Third Layer",
      descriptions: [
        "Client funds are held in a third-party custodian account, managed by an independent board of directors and audited by PKF Littlejohn, our strategic partner and auditor. This prevents any conflict of interest between Axion Trade's operations and Client funds.",
      ],
    },
    {
      title: "The Fourth Layer",
      descriptions: [
        "Axion Trade has professional crime and indemnity insurance facilitated by FSE Law through an S&P Rated “AAA” insurance company. This insurance protects our Clients against the risk of crime and fraud from third-party custodians. Clients are insured up to USD 10 million per individual, safeguarding them from potential breaches of fund safety or custodial misconduct. For more information on the insurance policy, please check out the link here.",
      ],
    },
  ];

  return (
    <div>
      {/* PageTitle */}
      <PageTitle
        title="The Axion Edge"
        description="Why Axion Trade should be your brokerage of choice."
      />
      <section className="px-36 max-sm:px-10 max-md:px-10 max-xl:px-20 -translate-y-20 max-md:-translate-y-20">
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1 max-xl:grid-cols-2">
          {counts.map((count, index) => (
            <div
              key={index}
              className="text-center shadow-lg py-16 px-5 rounded-xl bg-white max-md:px-0"
            >
              <Title
                title={count.title}
                otherClass={"font-bold max-xl:text-4xl"}
              />
              <Description
                description={count.description}
                otherClass={"text-gray-500"}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-36  max-sm:px-16 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="flex items-center justify-center ">
            <div>
              <SubTitle
                subTitle={"Trusted Worldwide, Recognized Everywhere"}
                otherClass={"font-bold text-blue-500"}
              />
              <Title title={"Credibility and Global Recognition"} />

              <Description
                description={
                  "Axion Trade has over 10,000 clients from 30 different countries"
                }
                otherClass={"text-gray-500 my-5"}
              />
            </div>
          </div>
          <div className="flex justify-end items-center">
            <Image src="/earth.png" width={500} height={500} alt="earth" />
          </div>
        </div>
      </section>

      <section className="pt-16 pb-10 px-36 max-md:px-10 max-xl:px-20">
        <div className="text-center">
          <Title title="Quadruple Fund Safety Mechanism" />
          <Description
            description="Axion Trade has four layers of fund safety to ensure that our Clients have peace of mind when trading with Axion Trade."
            otherClass="text-gray-500 my-5"
          />
        </div>
        <div>
          {layers.map((layer, index) => (
            <div key={index} className="mt-5">
              <SubTitle
                subTitle={layer.title}
                otherClass="font-bold mb-3 max-md:text-2xl"
              />
              {layer.descriptions.map((desc, descIndex) => (
                <Description
                  key={descIndex}
                  description={desc}
                  otherClass="text-gray-500"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className=" pb-16 px-36 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-4 pb-10 max-md:grid-cols-1">
          <div className="max-md:order-1">
            <div className="flex mb-3">
              <SubTitle
                subTitle={"Ultra-Speed"}
                otherClass={"max-md:text-2xl"}
              />
              <SubTitle
                subTitle={"Execution"}
                otherClass={"max-md:text-2xl text-blue-500 mx-1"}
              />
            </div>

            <Description
              description={
                "Our data centres are located in prime locations all around the Europe and Asia & Pacific region to ensure a seamless trading experience. The data centres are then connected to ultra-high speed servers located in London – the world’s largest financial centre. Through our partnerships with tier-one banks and Equinix, a multibillion-dollar public company listed on NASDAQ, we have spared no expense in ensuring low latency connectivity to our dedicated servers in London. This has ensured network speeds of less than one millisecond."
              }
              otherClass={"text-gray-500"}
            />
            <Description
              description={
                "This world-class infrastructure is set up to ensure that all clients receive a trading experience like no other. Ultra-speed execution and low latency connection accessible anytime, anywhere."
              }
              otherClass={"text-gray-500"}
            />
          </div>
          <div className="flex items-center justify-center  max-md:order-2">
            <Image
              src="/ultra-speed-execution.png"
              width={400}
              height={400}
              alt="Client Focused"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-10 max-md:grid-cols-1 mb-5 ">
          <div className="flex items-center justify-center  max-md:order-2">
            <Image
              src="/24-hour-dedicated-support.png"
              width={400}
              height={400}
              alt="Client Focused"
            />
          </div>
          <div className="max-md:order-1">
            <div className="flex mb-3">
              <SubTitle subTitle={"24-Hour "} otherClass={"max-md:text-2xl"} />
              <SubTitle
                subTitle={"Dedicated Support"}
                otherClass={"max-md:text-2xl text-blue-500 mx-1"}
              />
            </div>

            <Description
              description={
                "All clients are supported with a professional team of dedicated customer relationship managers. We place utmost priority in training our customer relationship managers to provide world-class support to all our clients. We ensure our customer relationship managers are patient, understanding and equipped with the right knowledge and skills to resolve clients’ issues in the shortest possible time. Our team is contactable 24 hours a day, five days a week via our online live chat platform. Our support languages include English, Chinese, French, German, Malay, Tagalog & Vietnamese"
              }
              otherClass={"text-gray-500"}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4  max-md:grid-cols-1">
          <div className="max-md:order-1">
            <div className="flex mb-3">
              <SubTitle
                subTitle={"Negative Balance"}
                otherClass={"max-md:text-2xl"}
              />
              <SubTitle
                subTitle={"Protection"}
                otherClass={"max-md:text-2xl text-blue-500 mx-1"}
              />
            </div>

            <Description
              description={
                "In an increasingly volatile market, there may be rare scenarios where clients may face losses exceeding their capital. To protect clients’ interests, Axion Trade has introduced Negative Balance Protection which allows affected clients to remove any negative balance on their trading accounts. Trade without worry on unintended trade losses exceeding your available trading capital."
              }
              otherClass={"text-gray-500"}
            />
          </div>
          <div className="flex items-center justify-center  max-md:order-2">
            <Image
              src="/negative-balance-protection.png"
              width={400}
              height={400}
              alt="Client Focused"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
