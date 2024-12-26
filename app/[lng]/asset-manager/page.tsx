import { TbPointFilled } from "react-icons/tb";
import PageTitle from "../../shared/pages-title";
import { useTranslation } from "@/app/i18n";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";

const AssetManager = async ({
  params,
}: {
  params: Promise<{ lng: string }>;
}) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  const managerFeatures = [
    t("customisable-trading-conditions-including-spread"),
    t("automatic-calculation-of-commissions"),
    t("ability-to-add-and/or-remove"),
    t("professional-reporting-analytics"),
    t("diverse-product-range"),
    t("solutions-for-ea-and-manual-traders"),
    t("earn-commission-rebate"),
  ];

  const benefits = [
    t("charge-clients-based-on-your-preferences"),
    t("flexibility-with-withdrawing-commissions"),
    t("keep-investors-happy-by-allowing"),
    t("get-access-to-more-opportunities"),
    t("greater-transparency-between-axiontrade"),
  ];

  // const allocationMethods = [
  //     "Fixed lot size allocation (MAM)",
  //     "Proportional by balance (PAMM)",
  //     "Proportional by equity (PAMM)",
  // ];

  const generalFeatures = [
    t("3-allocation-methods"),
    t("trade-sizes-from-0.01-lots"),
    t("expert-advisors-(ea)-allowed"),
    t("unlimited-number-of-investor-accounts"),
    t("trading-account-provided-to-investor"),
    t("all-usual-order-types-accepted"),
    t("diverse-product-range"),
    t("fast-and-reliable-MT4-servers"),
  ];

  return (
    <div>
      {/* Page Title */}
      <PageTitle
        title={t("asset-manager")}
        description={t("trade-and-manage-multiple-accounts")}
      />

      {/* Manager Features Section */}
      <section className="pt-16 px-36 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("asset-manager-features")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("our-raw-pricing-model-with-tight-spreads")}
            className="text-md text-start text-gray-500 my-2"
          />
        </BlurFade>
        <div className="mt-8">
          <BlurFade delay={0.25 * 0.05} inView>
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {managerFeatures.map((feature, index) => (
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

      {/* Multi Account Manager Section */}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("what-is-a-multi-account-manager?")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("a-multi-account-manager-is-quite-simply")}
            className="text-md text-start text-gray-500 my-2"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("who-can-use-the-mam")}
            className="text-md text-start text-gray-500 my-2"
          />
        </BlurFade>
      </section>

      {/* Benefits Section */}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("asset-manager-benefits")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <ul className="mt-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex mb-4 items-center">
                <span className="text-blue-500 text-2xl mr-4">
                  <TbPointFilled />
                </span>
                <BlurFade delay={0.25 * 0.05} inView>
                  <BlurIn
                    word={t(benefit)}
                    className="text-md text-start text-gray-500 my-2"
                  />
                </BlurFade>
                {/* <BlurIn
                  word={benefit}
                  className="text-md text-start text-gray-500 my-2"
                /> */}
              </li>
            ))}
          </ul>
        </BlurFade>
      </section>

      {/* General Features and Allocation Methods Section*/}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("benefits-and-features-of-the-multi-account-manager")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <ul className="mt-8">
            {generalFeatures.map((feature, index) => (
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
      </section>

      {/* Customisable Section */}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("customisable-trading-conditions")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("commissions-from-mark-ups-are-credited")}
            className="text-md text-start text-gray-500 my-2"
          />
        </BlurFade>
      </section>

      {/* Add/Remove Funds  Section */}
      <section className="pt-8 pb-16 px-36 max-md:px-10 max-xl:px-20">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("add/remove-funds-without-affecting-trading-activity")}
            className="text-2xl font-bold text-start max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("we-recognise-that-some-withdrawals")}
            className="text-md text-start text-gray-500 my-2"
          />
        </BlurFade>
      </section>
    </div>
  );
};
export default AssetManager;
