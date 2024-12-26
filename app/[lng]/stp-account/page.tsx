import { MdArrowForwardIos } from "react-icons/md";
import Button from "../../shared/button";
import PageTitle from "../../shared/pages-title";
import { useTranslation } from "@/app/i18n";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

const STP = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  const AccountSettings = [
    {
      id: 0,
      title: t("account-leverage"),
      amounts: t("up-to") + " 1:100",
      description: t("for-forex-and-commodities"),
    },
    {
      id: 1,
      title: t("commissions"),
      amounts: t("none"),
      description: t(
        "commission-free-trading-applies-for-all-forex-and-commodity"
      ),
    },
    {
      id: 2,
      title: t("spreads"),
      amounts: t("fixed-spread"),
      description: t("get-direct-access-to"),
    },
    {
      id: 3,
      title: t("swaps"),
      amounts: t("none"),
      description: t("swaps-are-waived-for-stp-accounts"),
    },
    {
      id: 4,
      title: t("minimum-deposit"),
      amounts: t("usd-10"),
      description: t("the-minimum-deposit-required-to-open"),
    },
    {
      id: 5,
      title: t("slippage-insurance"),
      amounts: t("guaranteed-price-requote"),
      description: t("axion-trade-guarantees"),
    },
    {
      id: 6,
      title: t("negative-balance-protection"),
      amounts: t("yes"),
      description: t("trade-without-worry"),
    },
  ];
  return (
    <div>
      {/* page-title */}
      <PageTitle title={t("stp-account")} description={t("enjoy-swap-free")} />
      {/* End page-title */}
      <section className="pt-16 text-center max-md:px-10 max-xl:px-10">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("about-stp-account")}
            className="text-2xl font-bold max-md:text-lg"
          />
        </BlurFade>

        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("all-cambodian-clients")}
            className="text-md  text-gray-500 my-2"
          />
        </BlurFade>
        <section className="flex justify-center">
          <div className="relative justify-start mt-5 max-md:mt-5">
            <BlurFade delay={0.25 * 0.05} inView>
              <InteractiveHoverButton text={t("register-now")} />
            </BlurFade>
          </div>
        </section>
      </section>

      <section className="py-16 px-36 max-md:px-5 max-xl:px-10">
        <BlurFade delay={0.25 * 0.05} inView>
          <BlurIn
            word={t("account-settings")}
            className="text-2xl text-start font-normal my-2 max-md:text-lg"
          />
        </BlurFade>
        <BlurFade delay={0.25 * 0.05} inView>
          <section className="grid grid-cols-1 gap-5 list-none max-md:list-item">
            {AccountSettings.map((items) => (
              <div key={items.id} className="max-md:pb-10">
                <section className="bg-gray-100 py-5 px-5 border-l-8 border-blue-700">
                  <section className="flex mb-2">
                    <BlurFade delay={0.25 * 0.05} inView>
                      <BlurIn
                        word={t(items.title)}
                        className="text-md text-start  text-gray-500 my-2"
                      />
                    </BlurFade>

                    <section className="flex items-center mx-2">
                      <BlurFade delay={0.25 * 0.05} inView>
                        <MdArrowForwardIos />
                      </BlurFade>
                    </section>
                    <BlurFade delay={0.25 * 0.05} inView>
                      <BlurIn
                        word={t(items.amounts)}
                        className="text-md text-start font-bold  text-blue-700  my-2"
                      />
                    </BlurFade>
                  </section>
                  <section className="">
                    <BlurFade delay={0.25 * 0.05} inView>
                      <BlurIn
                        word={t(items.description)}
                        className="text-md text-start  text-gray-500 my-2"
                      />
                    </BlurFade>
                  </section>
                </section>
              </div>
            ))}
          </section>
        </BlurFade>
      </section>
    </div>
  );
};
export default STP;
