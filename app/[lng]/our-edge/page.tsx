import { useTranslation } from "@/app/i18n";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import Title from "../../shared/title";
import Image from "next/image";

const OurEdge = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  const counts = [
    { title: "10,000+", description: t('clients') },
    { title: "10,000,000+", description: t('trade-executed') },
    { title: "30+", description: t('country')},
    { title: "100+", description: t('employees-globally') },
  ];

  const layers = [
    {
      title: t('the-first-layer'),
      descriptions: [
        t('insurance-against-market-slippages')
      ],
    },
    {
      title: t('the-second-layer'),
      descriptions: [
        t('corporate-funds-and-client')
      ],
    },
    {
      title: t('the-third-layer'),
      descriptions: [
        t('client-funds-are-kept')
        
      ],
    },
    {
      title: t('the-fourth-layer'),
      descriptions: [
        t('axion-trade-has-a-professional')
        
      ],
    },
  ];

  return (
    <div>
      {/* PageTitle */}
      <PageTitle
        title={t('the-axion-edge')}
        description={t('why-axion-trade-should-be-your-preferred-brokerage')}
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
              {/* <SubTitle
                subTitle={"Trusted Worldwide, Recognized Everywhere"}
                otherClass={"font-bold text-blue-500"}
              /> */}
              <Title title={t('credibility-and-global-recognition')} />

              <Description
                description={
                  t('axion-trade-has-over')
                }
                otherClass={"text-gray-500 my-5"}
              />
            </div>
          </div>
          <div className="flex justify-end items-center">
            <Image
              src="/assets/images/earth.png"
              width={500}
              height={500}
              alt="earth"
            />
          </div>
        </div>
      </section>

      <section className="pt-16 pb-10 px-36 max-md:px-10 max-xl:px-20">
        <div className="text-center">
          <Title title={t('quadruple-fund-safety-mechanism')} />
          <Description
            description={t('axion-trade-has-four-layers')}
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
                subTitle={t('execution')}
                otherClass={"max-md:text-2xl"}
              />
              <SubTitle
                subTitle={t('ultra-speed')}
                otherClass={"max-md:text-2xl text-blue-500 mx-1"}
              />
            </div>

            <Description
              description={
                t('our-data-centres-are-located')
              }
              otherClass={"text-gray-500"}
            />
            <Description
              description={
               t('this-world-class-infrastructure')
              }
              otherClass={"text-gray-500"}
            />
          </div>
          <div className="flex items-center justify-center  max-md:order-2">
            <Image
              src="/assets/images/ultra-speed-execution.png"
              width={400}
              height={400}
              alt="Client Focused"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-10 max-md:grid-cols-1 mb-5 ">
          <div className="flex items-center justify-center  max-md:order-2">
            <Image
              src="/assets/images/24-hour-dedicated-support.png"
              width={400}
              height={400}
              alt="Client Focused"
            />
          </div>
          <div className="max-md:order-1">
            <div className="flex mb-3">
              <SubTitle subTitle={t('dedicated-support')}otherClass={"max-md:text-2xl"} />
              <SubTitle
                subTitle={t('24-hour')}
                otherClass={"max-md:text-2xl text-blue-500 mx-1"}
              />
            </div>

            <Description
              description={
                t('all-clients-are-supported')  
              }
              otherClass={"text-gray-500"}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4  max-md:grid-cols-1">
          <div className="max-md:order-1">
            <div className="flex mb-3">
              <SubTitle
                subTitle={t('protection')}
                otherClass={"max-md:text-2xl"}
              />
              <SubTitle
                subTitle={t('negative-balance')}
                otherClass={"max-md:text-2xl text-blue-500 mx-1"}
              />
            </div>

            <Description
              description={
                t('in-an-increasingly-volatile-market')  
              }
              otherClass={"text-gray-500"}
            />
          </div>
          <div className="flex items-center justify-center  max-md:order-2">
            <Image
              src="/assets/images/negative-balance-protection.png"
              width={400}
              height={400}
              alt="Client Focused"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurEdge;
