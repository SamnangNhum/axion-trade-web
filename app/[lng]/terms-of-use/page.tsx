import { useTranslation } from "@/app/i18n";
import Description from "@/app/shared/description";
import PageTitle from "@/app/shared/pages-title";
import SubTitle from "@/app/shared/sub-title";
import { title } from "process";

export default async function TermOfUse({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  const descriptions = [
    {
      text: t("axion-trade-is-the-trading-name-of-axiontrade"),
      className: "text-gray-500",
    },
    {
      text: t("axiontrade-(cambodia)-Co-Ltd-is-registered-in-cambodia"),
      className: "text-gray-500 my-2",
    },
    {
      text: t(
        "clients-must-be-at-least-18-years-old-to-use-the-services-of-axion-trade"
      ),
      className: "text-gray-500",
    },
  ];

  const sections = [
    {
      title: t("intended-users-and-exclusion-of-services"),
      content: [
        t("the-services-of-Axion-trade-and-the-information-on-this-site"),
        t("axion-trade-adheres-to-the-fx-regulations"),
      ],
    },
    {
      title: t("usage-of-information-and-materials"),
      content: [
        t(
          "the-site-contains-links-to-websites-controlled-or-offered-by-third-parties"
        ),
        t("the-website(s)-is-offered-to-you-conditionally"),
      ],
    },
    {
      title: t("trademarks-and-intellectual-property-rights"),
      content: [t("The-axion-trade-website(s)-is-the-owner-of-the-copyright")],
    },
    {
      title: t("change-of-information-and-materials"),
      content: [t("all-information-and-materials-contained")],
    },
    {
      title: t("limitation-of-liability"),
      content: [
        t("axion-trade-does-not-provide-any-warranty-as-to-the-accuracy"),
        t("hyperlinks-to-other-internet-resources-are-followed-at-your-risk"),
        t(
          "axion-trade-shall-not-be-liable-for-a-any damages-losses-or-expenses"
        ),
        t("axion-Trade-shall-not-be-liable-for-any-damage-that-may-occur"),
      ],
    },
    {
      title: t("cookies"),
      content: [
        t("when-you-use-our-software"),
        t("the-cookies-do-not-contain-personally"),
        t("for-further-information-about-cookies"),
      ],
    },
    {
      title: t("third-party-links"),
      content: [t("our-website(s)-contain-links-to-websites")],
    },
    {
      title: t("personal-data"),
      content: [
        t("any-personal-data-that-will-be-collected"),
        t("you-the-user-of-this-website"),
        t("01-axion-trade-has-the-right"),
        t("02-axion-trade-will-not-communicate"),
        t("03-unless-otherwise-specifically"),
        t("04-You-are-aware"),
        t("05-he-above-will-apply"),
      ],
    },
    {
      title: t("governing-law"),
      content: [t("your-use-of-this-site-shall")],
    },
  ];

  return (
    <div>
      {/* Page Title */}
      <PageTitle
        title={t("terms-of-use")}
        description={t("please-read-the-terms-of-use")}
      />

      <section className="px-36 pt-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        {descriptions.map((desc, index) => (
          <Description
            key={index}
            description={desc.text}
            otherClass={desc.className}
          />
        ))}
      </section>

      <section className="pb-16">
        {/* Dynamic Section Rendering */}
        {sections.map((section, index) => (
          <section
            key={index}
            className="px-36 pt-8 max-sm:p-16 max-md:px-10 max-xl:px-20"
          >
            <SubTitle subTitle={section.title} otherClass="font-bold" />
            {section.content.map((item, idx) => (
              <Description
                key={idx}
                description={item}
                otherClass="text-gray-500 my-2"
              />
            ))}
          </section>
        ))}
      </section>
    </div>
  );
}
