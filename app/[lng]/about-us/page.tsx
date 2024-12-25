import { useTranslation } from "@/app/i18n";
import Button from "../../shared/button";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import Image from "next/image";

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
            <SubTitle
              subTitle={t("the-axion-trade")}
              otherClass={"font-bold"}
            />
            <Description
              description={t("axion-trade-was-incorporated")}
              otherClass={"text-gray-500 my-5 max-md:mb-5"}
            />
            <Button button={t("contact-us")} />
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
};
export default AboutUs;
