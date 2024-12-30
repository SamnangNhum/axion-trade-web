import Description from "@/app/shared/description";
import PageTitle from "@/app/shared/pages-title";
import SubTitle from "@/app/shared/sub-title";
import { useTranslation } from "@/app/i18n";
import { TbPointFilled } from "react-icons/tb";
import { t } from "i18next";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";

export default async function PrivacyProlicy({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  const privacyNotices = [
    t("provided-during-the-account-application-process"),
    t("acquired-as-a-result-of-the-transactions"),
    t("received-from-consumer-reporting-agencies."),
    t("collected-through-internet-“cookies.”"),
  ];

  const clientConfidentialities = [
    t("we-do-not-sell-or-license-lists"),
    t("we-restrict-access-to-the-personal"),
    t("we-maintain-strict-employment-policies"),
    t("we-take-substantial-precautions-to-safeguard-your-personal"),
  ];

  // export default function PrivacyProlicy(){
  return (
    <div>
      {/* Page Title */}
      <PageTitle
        title={t('privacy-policy')}
        description={t('please-read-the-privacy-policy')}
      />

      {/* Gerneral Statement */}
      <section className="px-36 pt-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("1-general-statement")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t(
              "axiontrade-(cambodia)-Co-Ltd-(hereinafter-called-the-company)"
            )}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("the-company-understands-that-confidentiality")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("by-opening-an-account-with-the-company")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("the-services-of-axion-trade-and-the-information")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
      </section>

      {/* Privacy Notice */}
      <section className="px-36 pt-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("2-privacy-notice")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        {/* <Description
          description={
            "The Company does not sell customer lists or customer email addresses to third party marketers."
          }
          otherClass={"text-gray-500 my-4"}
        /> */}
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("the-company-does-not-sell-customer")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("in-order-to-provide-brokerag-services")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <div className="my-4">
          <BlurFade delay={0.25 * 0.05} inView>
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {privacyNotices.map((privacyNotice, index) => (
                <li key={index} className="flex mb-4 items-center">
                  <span className="text-blue-500 text-2xl mr-4">
                    <TbPointFilled />
                  </span>

                  <BlurFade delay={0.25 * 0.05} inView>
                    <BlurIn
                      word={privacyNotice}
                      className="text-md text-start text-gray-500 my-4"
                    />
                  </BlurFade>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("cookies-are-bits-of-textual-information")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
      </section>

      {/* Client Confidentiality */}
      <section className="px-36 pt-8 pb-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        {/* <SubTitle
          subTitle={"3. CLIENT CONFIDENTIALITY"}
          otherClass={"font-bold "}
        /> */}
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("3-client-confidentiality")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        {/* <Description
          description={
            "The Company safeguards the confidentiality of your information in a number of ways. For example:"
          }
          otherClass={"text-gray-500 my-4"}
        /> */}
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("the-company-safeguards-the-confidentiality")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("in-order-to-provide-brokerage-services")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <div className="my-4">
          <BlurFade delay={0.25 * 0.05} inView>
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {clientConfidentialities.map((clientConfidentiality, index) => (
                <li key={index} className="flex mb-4 items-center">
                  <span className="text-blue-500 text-2xl mr-4">
                    <TbPointFilled />
                  </span>
                  <BlurFade delay={0.25 * 0.05} inView>
                    <BlurIn
                      word={clientConfidentiality}
                      className="text-md text-start text-gray-500 my-4"
                    />
                  </BlurFade>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("we-do-not-disclose-personal")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("finally-if-you-choose-to-subscribe")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
      </section>
    </div>
  );
}
