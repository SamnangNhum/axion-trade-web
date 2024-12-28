import { useTranslation } from "@/app/i18n";
import Description from "@/app/shared/description";
import PageTitle from "@/app/shared/pages-title";
import SubTitle from "@/app/shared/sub-title";
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
      description:
        t('when-you-use-axion-trade’s-website'),
      otherClass:
        "",
    },
    {
      subTitle: null,
      description:
        t('this-cookie-policy-provides-you-with-comprehensive'),
      otherClass:
        "",
    },
    {
      subTitle: t('what-is-a-cookie?'),
      description:
        t('cookies-are-small-files-of-information'),
      otherClass: "mt-3",
    },
    {
      subTitle: null,
      description:
       t('cookies-are-frequently-used-on-many-websites'),
      otherClass: "my-3",
    },
    {
      subTitle: null,
      description:
        t('the-cookies-do-not-contain-personally-identifying'),
      otherClass: "",
    },
    {
      subTitle: t('how-to-delete-and-block-cookies'),
      description:
        t('you-can-choose-to-accept-or-decline-cookies'),
        otherClass: "my-3",
    },
    {
      subTitle: t('your-consent'),
      description:
        t('by-continuing-to-use-our-website'),
        otherClass: "my-3",
    },
  ];
  
  const sessionCookies = [
    t('to-allow-you-to-carry-information'),
    t('within-registration-to-allow'),
    t('non-personal-data-for-tagging-purposes'),
  ];
  const persistentCookies = [
   t('to-help-us-recognise-you-as-a-unique-visitor'),
    t('to-compile-anonymous-aggregated-statistics'),
    t('to-internally-identify-you-by-account-name'),
    t('to-differentiate-users-who-are-on-the-same-network'),
    t('within-research-surveys-to-ensure'),
  ];
  const thirdPartyCookies = [
    t('to-serve-advertisements-on-our-site'),
    t('to-control-how-often'),
    t('to-tailor-content-to-your-preferences.'),
    t('to-count-the-number-of-anonymous'),
    t('for-website-usage-analysis'),
  ];
  return (
    <div>
      {/* Page Title */}
      <PageTitle
        title={t('cookies-policy')}
        description={t('Please-read-the-cookies-policy')}
      />
      <section className="px-36 pt-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
        {policySections.map((section, index) => (
          <div key={index} className="pt-3">
            {/* Render SubTitle only if available */}
            {section.subTitle && (
              <SubTitle subTitle={section.subTitle} otherClass="font-bold pt-5" />
            )}

            {/* Render Description */}
            <Description
              description={section.description}
              otherClass={section.otherClass}
            />
          </div>
        ))}
      </section>
      <section className="px-36 pt-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle={t('the-way-in-which-we-use-cookies')}
          otherClass="font-bold"
        />
         <SubTitle
          subTitle={t('session-cookies')}
          otherClass="font-bold mt-5"
        />
        <Description
          description={t('We-use-session-cookies')}
          otherClass={"text-gray-500 my-2 "}
        />
        <div className="mt-3">
          <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
            {sessionCookies.map((sessionCookie, index) => (
              <li key={index} className="flex mb-4">
                <span className="text-blue-500 text-2xl mr-4">
                  <TbPointFilled />
                </span>
                <span className="text-gray-500">{sessionCookie}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-36 pt-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle={t('persistent-cookies')}
          otherClass="font-bold"
        />
        <Description
          description={t('we-use-persistent-cookies')}
          otherClass={"text-gray-500 my-2 "}
        />
        <div className="mt-3">
          <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
            {persistentCookies.map((persistentCookie, index) => (
              <li key={index} className="flex mb-4">
                <span className="text-blue-500 text-2xl mr-4">
                  <TbPointFilled />
                </span>
                <span className="text-gray-500">{persistentCookie}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-36 py-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle={t('third-party-cookies')}
          otherClass="font-bold"
        />
        <Description
          description={t('third-parties-serve-cookies-via-this-site')}
          otherClass={"text-gray-500 my-2 "}
        />
        <div className="mt-3">
          <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
            {thirdPartyCookies.map((thirdPartyCookie, index) => (
              <li key={index} className="flex mb-4">
                <span className="text-blue-500 text-2xl mr-4">
                  <TbPointFilled />
                </span>
                <span className="text-gray-500">{thirdPartyCookie}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-36 pb-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle={t('use-of-web-beacons')}
          otherClass={"font-bold"}
        />
        <Description
          description={
            t('some-of-our-web-pages-may-contain-electronic')
          }
          otherClass={"text-gray-500 my-5"}
        />
        <span>
         <Description description={t('if-you-wish-to-know-more-about-cookies')} otherClass="text-md text-gray-500"/>
         <a className="text-black" href="">
            www.allaboutcookies.org.{" "}
          </a>
        </span>
        
          <span>
         <Description description={t('if-you-have-any-questions')} otherClass="text-md text-gray-500 mt-3"/>
         <a className="text-black" href="">
            accounts@axiontrade.com.kh
          </a>
        </span>
       
      </section>
    </div>
  );
}
