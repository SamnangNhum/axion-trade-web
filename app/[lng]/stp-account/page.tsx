import { MdArrowForwardIos } from "react-icons/md";
import Button from "../../shared/button";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import { useTranslation } from "@/app/i18n";

const STP = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  const AccountSettings = [
    {
      id: 0,
      title: t('account-leverage'),
      amounts:  t('up-to') + " 1:100",
      description: t('for-forex-and-commodities'),
    },
    {
      id: 1,
      title: t('commissions'),
      amounts: t('none'),
      description: t('commission-free-trading-applies-for-all-forex-and-commodity'),
    },
    {
      id: 2,
      title: t('spreads'),
      amounts: t('fixed-spread'),
      description:t('get-direct-access-to')
    },
    {
      id: 3,
      title: t('swaps'),
      amounts: t('none'),
      description: t('swaps-are-waived-for-stp-accounts')
    },
    {
      id: 4,
      title:  t('minimum-deposit'),
      amounts: t('usd-10'),
      description:
        t('the-minimum-deposit-required-to-open')
    },
    {
      id: 5,
      title: t('slippage-insurance'),
      amounts: "Guaranteed Price Requote",
      description:
        t('axion-trade-guarantees'),
    },
    {
      id: 6,
      title: t('negative-balance-protection'),
      amounts: "Yes",
      description:
        t('trade-without-worry'),
    },
  ];
  return (
    <div>
      {/* page-title */}
      <PageTitle
        title={
          t('stp-account')
        }
        description={
          t('enjoy-swap-free')
        }
      />
      {/* End page-title */}
      <section className="pt-16 text-center max-md:px-10 max-xl:px-10">
        <SubTitle otherClass="font-normal mb-3" subTitle={t('about-stp-account')} />
        <Description
          otherClass="mb-5 text-gray-500"
          description={
            t('all-cambodian-clients')
          }
        />
        <section className="flex justify-center">
          <Button otherClass="" button={
            t('register-now')
          } />
        </section>
      </section>

      <section className="py-16 px-36 max-md:px-5 max-xl:px-10">
        <SubTitle otherClass="font-normal mb-5" subTitle={
          t('account-settings')
        } />
        <section className="grid grid-cols-1 gap-5 list-none max-md:list-item">
          {AccountSettings.map((items) => (
            <div key={items.id} className="max-md:pb-10">
              <section className="bg-gray-100 py-5 px-5 border-l-8 border-blue-700">
                <section className="flex mb-2">
                  <Description
                    otherClass="text-lg font-bold"
                    description={items.title}
                  />
                  <section className="flex items-center mx-2">
                    <MdArrowForwardIos />
                  </section>
                  <Description
                    otherClass="text-blue-700 text-lg font-bold flex items-center"
                    description={items.amounts}
                  />
                </section>
                <section className="">
                  <Description
                    otherClass="text-md text-gray-500"
                    description={items.description}
                  />
                </section>
              </section>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};
export default STP;
