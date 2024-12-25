import { TbPointFilled } from "react-icons/tb";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import Description from "../../shared/description";
import { useTranslation } from "@/app/i18n";

const AssetManager = async ({
  params,
}: {
  params: Promise<{ lng: string }>;
}) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  const managerFeatures = [
    t('customisable-trading-conditions-including-spread'),
    t('automatic-calculation-of-commissions'),
    t('ability-to-add-and/or-remove'),
    t('professional-reporting-analytics'),
    t('diverse-product-range'),
    t('solutions-for-ea-and-manual-traders'),
    t('earn-commission-rebate'),
  ];

  const benefits = [
    t('charge-clients-based-on-your-preferences'),
    t('flexibility-with-withdrawing-commissions'),
    t('keep-investors-happy-by-allowing'),
    t('get-access-to-more-opportunities'),
    t('greater-transparency-between-axiontrade'),
  ];

  // const allocationMethods = [
  //     "Fixed lot size allocation (MAM)",
  //     "Proportional by balance (PAMM)",
  //     "Proportional by equity (PAMM)",
  // ];

  const generalFeatures = [
    t('3-allocation-methods'),
    t('trade-sizes-from-0.01-lots'),
    t('expert-advisors-(ea)-allowed'),
    t('unlimited-number-of-investor-accounts'),
    t('trading-account-provided-to-investor'),
    t('all-usual-order-types-accepted'),
    t('diverse-product-range'),
    t('fast-and-reliable-MT4-servers'),
  ];

  return (
    <div>
      {/* Page Title */}
      <PageTitle
        title={t('asset-manager')}
        description={t('trade-and-manage-multiple-accounts')}
      />

      {/* Manager Features Section */}
      <section className="pt-16 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle subTitle={t('asset-manager-features')} otherClass="font-bold" />
        <Description
          description={t('our-raw-pricing-model-with-tight-spreads')}
          otherClass="text-gray-500 mt-2"
        />
        <div className="mt-8">
          <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
            {managerFeatures.map((feature, index) => (
              <li key={index} className="flex mb-4">
                <span className="text-blue-500 text-2xl mr-4">
                  <TbPointFilled />
                </span>
                <span className="text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Multi Account Manager Section */}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle={t('what-is-a-multi-account-manager?')}
          otherClass="font-bold"
        />
        <Description
          description={t('a-multi-account-manager-is-quite-simply')}
          otherClass="text-gray-500 mt-2"
        />
        <Description
          description={t('who-can-use-the-mam')}
          otherClass="text-gray-500"
        />
      </section>

      {/* Benefits Section */}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle subTitle={t('asset-manager-benefits')} otherClass="font-bold"/>
        <ul className="mt-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex mb-4">
              <span className="text-blue-500 text-2xl mr-4">
                <TbPointFilled />
              </span>
              <span className="text-gray-500">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* General Features and Allocation Methods Section*/}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle={t('benefits-and-features-of-the-multi-account-manager')}
          otherClass="font-bold"
        />
        <ul className="mt-8">
          {generalFeatures.map((feature, index) => (
            <li key={index} className="flex mb-4">
              <span className="text-blue-500 text-2xl mr-4">
                <TbPointFilled />
              </span>
              <span className="text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Customisable Section */}
      <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle={t('customisable-trading-conditions')}
          otherClass="font-bold"
        />
        <Description
          description={t('commissions-from-mark-ups-are-credited')}
          otherClass="text-gray-500 mt-2"
        />
      </section>

      {/* Add/Remove Funds  Section */}
      <section className="pt-8 pb-16 px-36 max-md:px-10 max-xl:px-20">
        <SubTitle
          subTitle={t('add/remove-funds-without-affecting-trading-activity')}
          otherClass="font-bold"
        />
        <Description
          description={t('we-recognise-that-some-withdrawals')}
          otherClass="text-gray-500 mt-2"
        />
      </section>
    </div>
  );
};
export default AssetManager;
