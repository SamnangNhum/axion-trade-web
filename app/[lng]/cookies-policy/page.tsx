import { useTranslation } from "@/app/i18n";
import Description from "@/app/shared/description";
import PageTitle from "@/app/shared/pages-title";
import SubTitle from "@/app/shared/sub-title";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";
import { t } from "i18next";
import { LuNotebookPen } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";

export default async function CookiesPolicy({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  const policySections = [
    {
      subTitle: null,
      description: t("when-you-use-axion-trade’s-website"),
      otherClass: "",
    },
    {
      subTitle: null,
      description: t("this-cookie-policy-provides-you-with-comprehensive"),
      otherClass: "",
    },
    {
      subTitle: t("what-is-a-cookie?"),
      description: t("cookies-are-small-files-of-information"),
      otherClass: "mt-3",
    },
    {
      subTitle: null,
      description: t("cookies-are-frequently-used-on-many-websites"),
      otherClass: "my-3",
    },
    {
      subTitle: null,
      description: t("the-cookies-do-not-contain-personally-identifying"),
      otherClass: "",
    },
    {
      subTitle: t("how-to-delete-and-block-cookies"),
      description: t("you-can-choose-to-accept-or-decline-cookies"),
      otherClass: "my-3",
    },
    {
      subTitle: t("your-consent"),
      description: t("by-continuing-to-use-our-website"),
      otherClass: "my-3",
    },
  ];

  const sessionCookies = [
    t("to-allow-you-to-carry-information"),
    t("within-registration-to-allow"),
    t("non-personal-data-for-tagging-purposes"),
  ];
  const persistentCookies = [
    t("to-help-us-recognise-you-as-a-unique-visitor"),
    t("to-compile-anonymous-aggregated-statistics"),
    t("to-internally-identify-you-by-account-name"),
    t("to-differentiate-users-who-are-on-the-same-network"),
    t("within-research-surveys-to-ensure"),
  ];
  const thirdPartyCookies = [
    t("to-serve-advertisements-on-our-site"),
    t("to-control-how-often"),
    t("to-tailor-content-to-your-preferences."),
    t("to-count-the-number-of-anonymous"),
    t("for-website-usage-analysis"),
  ];
  return (
    <div>
      {/* Page Title */}
      <PageTitle
        title={t("cookies-policy")}
        description={t("Please-read-the-cookies-policy")}
      />
      <section className="px-36 pt-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
        {policySections.map((section, index) => (
          <div key={index} className="pt-3">
            {/* Render SubTitle only if available */}
            {section.subTitle && (
              <BlurFade delay={0.25 * 0.05} inView>
                <BlurIn
                  word={section.subTitle}
                  className="text-2xl font-bold text-start max-md:text-lg"
                />
              </BlurFade>
            )}

            {/* Render Description */}

            <BlurFade delay={0.25 * 0.05} inView>
              <BlurIn
                word={section.description}
                className="text-md text-start text-gray-500 my-4"
              />
            </BlurFade>
          </div>
        ))}
      </section>
      <section className="px-36 pt-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("the-axion-trade")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        {/* <SubTitle subTitle={t("session-cookies")} otherClass="font-bold mt-5" /> */}
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("session-cookies")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>

        {/* <Description
          description={t("We-use-session-cookies")}
          otherClass={"text-gray-500 my-2 "}
        /> */}
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("We-use-session-cookies")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <div className="mt-3">
          <BlurFade delay={0.25 * 0.05} inView>
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {sessionCookies.map((sessionCookie, index) => (
                <li key={index} className="flex mb-4 items-center">
                  <span className="text-blue-500 text-2xl mr-4">
                    <TbPointFilled />
                  </span>
                  <BlurFade delay={0.25 * 0.05} inView>
                    <BlurIn
                      word={sessionCookie}
                      className="text-md text-start text-gray-500 my-4"
                    />
                  </BlurFade>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section className="px-36 pt-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("persistent-cookies")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("we-use-persistent-cookies")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <div className="mt-3">
          <BlurFade delay={0.25 * 0.05} inView>
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {persistentCookies.map((persistentCookie, index) => (
                <li key={index} className="flex mb-4 items-center">
                  <span className="text-blue-500 text-2xl mr-4">
                    <TbPointFilled />
                  </span>
                  <BlurFade delay={0.25 * 0.05} inView>
                    <BlurIn
                      word={persistentCookie}
                      className="text-md text-start text-gray-500 my-4"
                    />
                  </BlurFade>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section className="px-36 py-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("third-party-cookies")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("third-parties-serve-cookies-via-this-site")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <div className="mt-3">
          <BlurFade delay={0.25 * 0.05} inView>
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {thirdPartyCookies.map((thirdPartyCookie, index) => (
                <li key={index} className="flex mb-4 items-center">
                  <span className="text-blue-500 text-2xl mr-4">
                    <TbPointFilled />
                  </span>
                  <BlurFade delay={0.25 * 0.05} inView>
                    <BlurIn
                      word={thirdPartyCookie}
                      className="text-md text-start text-gray-500 my-4"
                    />
                  </BlurFade>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section className="px-36 pb-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        {/* <SubTitle subTitle={t("use-of-web-beacons")} otherClass={"font-bold"} /> */}
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("use-of-web-beacons")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("some-of-our-web-pages-may-contain-electronic")}
            className="text-md text-start text-gray-500 my-4"
          />
        </BlurFade>
        <span>
          <BlurFade delay={0.25 * 0.05} inView>
            <BlurIn
              word={t("if-you-wish-to-know-more-about-cookies")}
              className="text-md text-start text-gray-500 my-4"
            />
          </BlurFade>
          <BlurFade delay={0.25 * 0.05} inView>
            <a className="text-black" href="">
              www.allaboutcookies.org.{" "}
            </a>
          </BlurFade>
        </span>
        <span>
          <BlurFade delay={0.25 * 0.05} inView>
            <BlurIn
              word={t("if-you-have-any-questions")}
              className="text-md text-start text-gray-500 my-4"
            />
          </BlurFade>
          <BlurFade delay={0.25 * 0.05} inView>
            <a className="text-black" href="">
              accounts@axiontrade.com.kh
            </a>
          </BlurFade>
        </span>
      </section>
    </div>
  );
}
