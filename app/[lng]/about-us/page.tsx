import { useTranslation } from "@/app/i18n";
import Button from "../../shared/button";
import PageTitle from "../../shared/pages-title";
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

const AboutUs = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return (
    <div>
      {/* PageTitle */}
      <PageTitle
        title={t("about-us")}
        description={t("simple") + "." + t("reliable") + "." + t("innovative")}
      />
      {/* AboutUs */}
      <section className="px-36 py-16 max-sm:p-10 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div>
            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("the-axion-trade")}
                className="text-2xl font-bold text-start max-md:text-lg"
              />
            </BlurFade>
            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={t("axion-trade-was-incorporated")}
                className="text-md text-start text-gray-500 my-4"
              />
            </BlurFade>
            <div className="relative justify-start mt-5 max-md:mt-5">
              <InteractiveHoverButton text={t("learn-more")} />
            </div>
            {/* <Button button={t("contact-us")} /> */}
          </div>
          <div className="flex justify-center items-center">
            <BlurFade delay={0.25 * 0.05} inView>
              <Image
                src={"/assets/images/about-us.png"}
                width={500}
                height={500}
                alt="About Us"
              />
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
