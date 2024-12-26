import { TbPointFilled } from "react-icons/tb";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import Image from "next/image";
import { IoKeyOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { useTranslation } from "@/app/i18n";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";

const WhiteLabelPartnerships = async ({
  params,
}: {
  params: Promise<{ lng: string }>;
}) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  const firstKeyFeatures = [
    [t("access-to-deep-liquidity")],
    [t("co-branded-MT4/MT5")],
    [t("super-fast-execution-of-large-orders")],
    [t("flexible-connectivity-options")],
    [t("margin-rates-from-1%-calculated-on-a-portfolio-basis")],
    [t("competitive-commissions-rates")],
  ];

  const secondKeyFeatures = [
    [t("access-to-deep-liquidity")],
    [t("multi-bank-aggregated-price-feed")],
    [t("super-fast-execution-of-large-orders")],
    [t("flexible-connectivity-options")],
    [t("margin-rates-from-1%-calculated-on-a-portfolio-basis")],
    [t("competitive-commissions-rates")],
  ];

  const requirements = [
    [t("minimum-monthly-volume-of-$200-million")],
    [t("established-client-base")],
  ];
  const secondRequirements = [[t("minimum-monthly-volume-of-$500-million")]];
  return (
    <div>
      {/* PageTitle */}
      <PageTitle
        title={t("white-label-partnerships")}
        description={t("the-axiontrade-white-label-partnership-program")}
      />

      <section className="px-36 pt-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="">
            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("the-axiontrade-white-label-partnership-program")}
                className="text-2xl font-bold text-start max-md:text-lg"
              />
            </BlurFade>
            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t(
                  "the-axiontrade-white-label-partnership-program-is-a-turnkey-solution-giving-clients"
                )}
                className="text-md text-start text-gray-500 my-2"
              />
            </BlurFade>
          </div>
          <div className="flex justify-center items-center">
            <BlurFade delay={0.25 * 0.05} inView>
              <Image
                src="/assets/images/white-label-partnership.png"
                width={400}
                height={400}
                alt="White Label Partnerships"
              />
            </BlurFade>
          </div>
        </div>
      </section>
      {/* Fully Branded White Label Solution Section */}
      <section>
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <BlurFade delay={0.25 * 0.05} inView>
            <BlurIn
              word={t("fully-branded-white-label-solution")}
              className="text-2xl font-bold text-start max-md:text-lg"
            />
          </BlurFade>
          <BlurFade delay={0.25 * 0.05} inView>
            <BlurIn
              word={t("our-white-label-program-has been-designed")}
              className="text-md text-start text-gray-500 my-2"
            />
          </BlurFade>
        </section>
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <BlurFade delay={0.25 * 0.05} inView>
                <IoKeyOutline />
              </BlurFade>
            </span>
            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("key-features")}
                className="text-2xl font-bold text-start max-md:text-lg"
              />
            </BlurFade>
          </div>
          <div className="mt-8">
            <BlurFade delay={0.25 * 0.05} inView>
              <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
                {firstKeyFeatures.map((feature, index) => (
                  <li key={index} className="flex mb-4 items-center">
                    <span className="text-blue-500 text-2xl mr-4">
                      <TbPointFilled />
                    </span>
                    <BlurFade delay={0.25 * 0.05} inView>
                      <BlurIn
                        word={t(feature)}
                        className="text-md text-start text-gray-500 my-2"
                      />
                    </BlurFade>
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <BlurFade delay={0.25 * 0.05} inView>
                <LuNotebookPen />
              </BlurFade>
            </span>
            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("requirements")}
                className="text-2xl font-bold text-start max-md:text-lg"
              />
            </BlurFade>
          </div>
          <div className="mt-8">
            <BlurFade delay={0.25 * 0.05} inView>
              <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
                {requirements.map((requirements, index) => (
                  <li key={index} className="flex mb-4 items-center">
                    <span className="text-blue-500 text-2xl mr-4">
                      <TbPointFilled />
                    </span>
                    <BlurFade delay={0.25 * 0.05} inView>
                      <BlurIn
                        word={t(requirements)}
                        className="text-md text-start text-gray-500 my-2"
                      />
                    </BlurFade>
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      </section>
      {/* Strategic Partnerships Section */}
      <section>
        <section className="pt-16 px-36 max-md:px-10 max-xl:px-20">
          <BlurFade delay={0.25 * 0.05} inView>
            <BlurIn
              word={t("strategics-partnerships")}
              className="text-2xl font-bold text-start max-md:text-lg"
            />
          </BlurFade>
          <BlurFade delay={0.25 * 0.05} inView>
            <BlurIn
              word={t("the-axiontrade-liquidity-solution-is-ideal")}
              className="text-md text-start text-gray-500 my-2"
            />
          </BlurFade>
       
        </section>
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <BlurFade delay={0.25 * 0.05} inView>
                <IoKeyOutline />
              </BlurFade>
            </span>

            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("key-features")}
                className="text-2xl font-bold text-start max-md:text-lg"
              />
            </BlurFade>
          </div>

          <div className="mt-8">
            <BlurFade delay={0.25 * 0.05} inView>
              <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
                {secondKeyFeatures.map((feature, index) => (
                  <li key={index} className="flex mb-4 items-center">
                    <span className="text-blue-500 text-2xl mr-4">
                      <TbPointFilled />
                    </span>
                    <BlurFade delay={0.25 * 0.05} inView>
                      <BlurIn
                        word={t(feature)}
                        className="text-md text-start text-gray-500 my-2"
                      />
                    </BlurFade>
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section className="pt-8 pb-16 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <BlurFade delay={0.25 * 0.05} inView>
                <LuNotebookPen />
              </BlurFade>
            </span>
            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("requirements")}
                className="text-2xl font-bold text-start max-md:text-lg"
              />
            </BlurFade>
          </div>
          <div className="mt-8">
            <BlurFade delay={0.25 * 0.05} inView>
              <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
                {secondRequirements.map((requirements, index) => (
                  <li key={index} className="flex mb-4 items-center">
                    <span className="text-blue-500 text-2xl mr-4">
                      <TbPointFilled />
                    </span>

                    <BlurFade delay={0.25 * 0.05} inView>
                      <BlurIn
                        word={t(requirements)}
                        className="text-md text-start text-gray-500 my-2"
                      />
                    </BlurFade>
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      </section>
    </div>
  );
};
export default WhiteLabelPartnerships;
