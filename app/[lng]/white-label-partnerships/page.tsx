import { TbPointFilled } from "react-icons/tb";
import Description from "../../shared/description";
import PageTitle from "../../shared/pages-title";
import SubTitle from "../../shared/sub-title";
import Image from "next/image";
import { IoKeyOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { useTranslation } from "@/app/i18n";

const WhiteLabelPartnerships = async ({
  params,
}: {
  params: Promise<{ lng: string }>;
}) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  const firstKeyFeatures = [
    [
      t('access-to-deep-liquidity')
    ],
    [ t('co-branded-MT4/MT5')

    ],
    [
      t('super-fast-execution-of-large-orders')
    ],
    [
      t('flexible-connectivity-options')
    ],
    [
      t('margin-rates-from-1%-calculated-on-a-portfolio-basis')
    ],
    [
      t('competitive-commissions-rates')
    ]
  ];

  const secondKeyFeatures = [
    [
      t('access-to-deep-liquidity')
    ],
    [ t('multi-bank-aggregated-price-feed')

    ],
    [
      t('super-fast-execution-of-large-orders')
    ],
    [
      t('flexible-connectivity-options')
    ],
    [
      t('margin-rates-from-1%-calculated-on-a-portfolio-basis')
    ],
    [
      t('competitive-commissions-rates')
    ]
  ];

  const requirements = [
    [
      t('minimum-monthly-volume-of-$200-million')
    ],
    [
      t('established-client-base')
    ]
    
  ];
  const secondRequirements = [
    [
      t('minimum-monthly-volume-of-$500-million')
    ]
  ];
  return (
    <div>
      {/* PageTitle */}
      <PageTitle
        title={t('white-label-partnerships')}
        description={
          t('the-axionTrade-white-label-partnership-program')
        }
      />

      <section className="px-36 pt-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="">
            <SubTitle
              subTitle={t('the-axionTrade-white-label-partnership-program')}
              otherClass={"font-bold"}
            />
            <Description
              description={
                t('the-axiontrade-white-label-partnership-program-is-a-turnkey-solution-giving-clients')
               }
              otherClass={"text-gray-500 my-5"}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/white-label-partnership.png"
              width={400}
              height={400}
              alt="White Label Partnerships"
            />
          </div>
        </div>
      </section>
      {/* Fully Branded White Label Solution Section */}
      <section>
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <SubTitle
            subTitle={
              t('fully-branded-white-label-solution')
            }
            otherClass="font-bold"
          />
          <Description
            description={t('our-white-label-program-has been-designed')}
            otherClass="text-gray-500 mt-2"
          />
        </section>
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <IoKeyOutline />
            </span>
            <SubTitle subTitle={
              t('key-features')
            } otherClass="font-bold" />
          </div>

          <div className="mt-8">
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {firstKeyFeatures.map((feature, index) => (
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
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <LuNotebookPen />
            </span>
            <SubTitle subTitle={
              t('requirements') 
            }  
            otherClass="font-bold" />
          </div>
          <div className="mt-8">
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex mb-4">
                  <span className="text-blue-500 text-2xl mr-4">
                    <TbPointFilled />
                  </span>
                  <span className="text-gray-500">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
      {/* Strategic Partnerships Section */}
      <section>
        <section className="pt-16 px-36 max-md:px-10 max-xl:px-20">
          <SubTitle subTitle={
            t('strategics-partnerships') 
          }
          otherClass="font-bold" />
          <Description
            description="The AxionTrade liquidity solution is ideal for institutional and high volume clients looking to access market leading spread at affordable prices. Clients leverage off AxionTrade’ existing liquidity, technology and banking relationships with the benefit of dealing with one counterparty and receiving market leading pricing at a competitive volume based fee."
            otherClass="text-gray-500 mt-2"
          />
        </section>
        <section className="pt-8 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <IoKeyOutline />
            </span>
            <SubTitle subTitle={ t('key-features')}
            otherClass="font-bold" />
          </div>

          <div className="mt-8">
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {secondKeyFeatures.map((feature, index) => (
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
        <section className="pt-8 pb-16 px-36 max-md:px-10 max-xl:px-20">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">
              <LuNotebookPen />
            </span>
            <SubTitle subTitle={
              
              t('requirements') 
            }  
             otherClass="font-bold" />
          </div>
          <div className="mt-8">
            <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
              {secondRequirements.map((requirement, index) => (
                <li key={index} className="flex mb-4">
                  <span className="text-blue-500 text-2xl mr-4">
                    <TbPointFilled />
                  </span>
                  <span className="text-gray-500">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};
export default WhiteLabelPartnerships;
