import { useTranslation } from "@/app/i18n";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import Image from "next/image";
import NumberCounter from "@/app/shared/number-counter";
import BlurIn from "@/components/ui/blur-in";
import BlurFade from "@/components/ui/blur-fade";

const OurEdge = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  const counts = [
    { number: 10000, description: t("clients") },
    { number: 10000000, description: t("trade-executed") },
    { number: 30, description: t("country") },
    { number: 100, description: t("employees-globally") },
  ];

  const layers = [
    {
      title: t("the-first-layer"),
      descriptions: [t("insurance-against-market-slippages")],
    },
    {
      title: t("the-second-layer"),
      descriptions: [t("corporate-funds-and-client")],
    },
    {
      title: t("the-third-layer"),
      descriptions: [t("client-funds-are-kept")],
    },
    {
      title: t("the-fourth-layer"),
      descriptions: [t("axion-trade-has-a-professional")],
    },
  ];

  return (
    <div>
      {/* PageTitle */}
      <PageTitle
        title={t("the-axion-edge")}
        description={t("why-axion-trade-should-be-your-preferred-brokerage")}
      />
      <section className="px-36 max-sm:px-10 max-md:px-10 max-xl:px-20 -translate-y-20 max-md:-translate-y-20">
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1 max-xl:grid-cols-2">
          {counts.map((count, index) => (
            <div
              key={index}
              className="text-center shadow-lg py-16 px-5 rounded-xl bg-white max-md:px-0 max-md:py-10"
            >
              {/* <Title
                title={count.title}
                otherClass={"font-bold max-xl:text-4xl"}
              /> */}
              <NumberCounter otherClass="text-white" number={count.number} />
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
              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={t("credibility-and-global-recognition")}
                  className="text-4xl font-bold  max-md:text-lg"
                />
              </BlurFade>
              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={t("axion-trade-has-over")}
                  className="text-md text-gray-500 px-40 my-2 max-md:px-10 max-xl:px-10"
                />
              </BlurFade>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <BlurFade key="/assets/images/earth.png" delay={0.25 * 0.05} inView>
              <Image
                src="/assets/images/earth.png"
                width={500}
                height={500}
                alt="Earth"
              />
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-10 px-36 max-md:px-10 max-xl:px-20">
        <div className="text-center">
          <BlurFade delay={0.25 * 0.05} inView>
            <BlurIn
              word={t("quadruple-fund-safety-mechanism")}
              className="text-4xl font-bold max-md:text-2xl"
            />
          </BlurFade>
          <BlurFade delay={0.25 * 0.05} inView>
            <BlurIn
              word={t("axion-trade-has-four-layers")}
              className="text-md text-gray-500 px-40 my-2 max-md:px-10 max-xl:px-10"
            />
          </BlurFade>
        </div>
        <div>
          {layers.map((layer, index) => (
            <div key={index} className="mt-5">
              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={t(layer.title)}
                  className="text-2xl font-bold text-start max-md:text-lg"
                />
              </BlurFade>
              {layer.descriptions.map((desc, descIndex) => (
                <BlurFade delay={0.25 * 0.05} inView>
                  <BlurIn
                    key={descIndex}
                    word={t(desc)}
                    className="text-md text-start text-gray-500 my-2 "
                  />
                </BlurFade>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className=" pb-16 px-36 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-4 pb-10 max-md:grid-cols-1">
          <div className="max-md:order-1">
            <div className="flex mb-3">
              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={t("ultra-speed")}
                  className="text-2xl font-bold text-start max-md:text-lg"
                />
              </BlurFade>

              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={t("execution")}
                  className="text-2xl text-blue-500 font-bold mx-2 text-start max-md:text-lg "
                />
              </BlurFade>
            </div>
            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("our-data-centres-are-located")}
                className="text-md text-start text-gray-500  my-2 "
              />
            </BlurFade>
            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("this-world-class-infrastructure")}
                className="text-md text-start text-gray-500 my-2 "
              />
            </BlurFade>
          </div>
          <div className="flex items-center justify-center  max-md:order-2">
            <BlurFade key="/assets/images/earth.png" delay={0.25 * 0.05} inView>
              <Image
                src="/assets/images/ultra-speed-execution.png"
                width={400}
                height={400}
                alt="Client Focused"
              />
            </BlurFade>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-10 max-md:grid-cols-1 mb-5 ">
          <div className="flex items-center justify-center  max-md:order-2">
            <BlurFade key="/assets/images/earth.png" delay={0.25 * 0.05} inView>
              <Image
                src="/assets/images/24-hour-dedicated-support.png"
                width={400}
                height={400}
                alt="Client Focused"
              />
            </BlurFade>
          </div>
          <div className="max-md:order-1">
            <div className="flex mb-3 max-md:list-item list-none">
              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={t("24-hour")}
                  className="text-2xl font-bold text-start max-md:text-lg"
                />
              </BlurFade>
              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={t("dedicated-support")}
                  className="text-2xl text-blue-500 font-bold text-start mx-2 max-md:text-lg max-md:mx-0"
                />
              </BlurFade>
            </div>
            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("all-clients-are-supported")}
                className="text-md text-start text-gray-500  my-2 "
              />
            </BlurFade>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4  max-md:grid-cols-1">
          <div className="max-md:order-1">
            <div className="flex mb-3">
              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={t("negative-balance")}
                  className="text-2xl font-bold text-start mx-2 max-md:text-lg"
                />
              </BlurFade>
              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={t("protection")}
                  className="text-2xl text-blue-500 font-bold text-start mx-2 max-md:text-lg"
                />
              </BlurFade>
            </div>

            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("in-an-increasingly-volatile-market")}
                className="text-md text-start text-gray-500  my-2 "
              />
            </BlurFade>
          </div>
          <div className="flex items-center justify-center  max-md:order-2">
            <BlurFade delay={0.25 * 0.05} inView>
              <Image
                src="/assets/images/negative-balance-protection.png"
                width={400}
                height={400}
                alt="Client Focused"
              />
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurEdge;
