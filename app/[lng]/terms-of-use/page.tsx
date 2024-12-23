import { useTranslation } from "@/app/i18n";
import Description from "@/app/shared/description";
import PageTitle from "@/app/shared/pages-title";
import SubTitle from "@/app/shared/sub-title";

const descriptions = [
  {
    text: "Axion Trade is the trading name of Axiontrade (Cambodia) Co., Ltd.",
    className: "text-gray-500",
  },
  {
    text: "Axiontrade (Cambodia) Co., Ltd. is registered in Cambodia with Company Registration Number 1000179787, and is approved by the Securities and Exchange Regulator (SERC) of Cambodia to operate under a Derivative Broker License (in-principle approval of License No. 038).",
    className: "text-gray-500 my-2",
  },
  {
    text: "Clients must be at least 18 years old to use the services of Axion Trade.",
    className: "text-gray-500",
  },
];

const sections = [
  {
    title: "Intended Users and Exclusion of Services",
    content: [
      "The services of Axion Trade and the information on this site are exclusively directed at citizens of Cambodia. Axion Trade does not offer services to citizens or residents of any other countries, including Japan, Hong Kong, Singapore, the United Kingdom, and the United States.",
      "Axion Trade adheres to the FX regulations applicable in Cambodia and does not accept clients solicited from outside Cambodia. This list of excluded countries is not exhaustive and may be updated as required. Customers should familiarize themselves with the FX rules applicable in their own countries before deciding to use Axion Trade's services. The information and services provided by Axion Trade are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.",
    ],
  },
  {
    title: "Usage of Information and Materials",
    content: [
      "The site contains links to websites controlled or offered by third parties. Axion Trade has not reviewed and hereby disclaims responsibility for any information or materials posted at any of the sites linked to this site. By creating a link to a third party website, Axion Trade does not endorse or recommend any products or services offered on that website. The information contained on this site is intended for information purposes only. Therefore, it should not be regarded as an offer or solicitation to any person in any jurisdiction in which such an offer or solicitation is not authorised or to any person to whom it would be unlawful to make such an offer or solicitation, nor regarded as recommendation to buy, sell or otherwise deal with any particular currency or precious metal trade. If you are not sure about your local currency and spot metals trading regulations, then you should leave this site immediately.",
      "The website(s) is offered to you conditionally on your acceptance without modification of the terms, conditions and notices contained herein (the 'Terms of Use'). Your use of the website(s) constitutes your agreement to comply with these Terms of Use.",
    ],
  },
  {
    title: "Trademarks and Intellectual Property Rights",
    content: [
      "The Axion Trade website(s) is the owner of the Copyright in the pages and in the screens displaying this website, and in the information and material therein and in their arrangement, unless otherwise indicated. Axion Trade holds the exclusive rights or license to use or any other license for all kinds of trade names and trademarks contained and/or appearing in this website.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Axion Trade does not provide any warranty as to the accuracy, adequacy or completeness of the information and materials contained in its website(s) and expressly rejects any liability for any errors and/or omissions in this regard. Axion Trade does not provide any warranty of any kind implied expressed or statutory, including but not limited to the warranties of non-infringement of third party rights, title, merchantability, fitness for a particular purpose and freedom from computer virus, in conjunction with the information and materials thereof.",
      "Hyperlinks to other internet resources are followed at your risk; the content, accuracy, opinions expressed and other links provided by these resources are not controlled, investigated, verified, monitored and/or endorsed by Axion Trade.",
      "Axion Trade shall not be liable for a) any damages, losses or expenses which arise in connection to this website or its use or inability to use by any person or in connection to the inability to execute an order, error, omission, interruption, fault, delay in operation or transmission, computer viruses, communication failure or line or system failure, even if Axion Trade or its representatives have been informed about the possibility of such damages, losses or costs and b) for errors or inaccuracies in the transmission process of data and/or Orders in trading margined FX or any instructions from the client/visitor of the site, interference, fraudulent impersonation, breaking of secret access codes, erroneous recording or transmission of message or system failure due to force majeure or for whatever other reason which is not due to breach of the above either by Axion Trade.",
      "Axion Trade shall not be liable for any damage that may occur to the hardware or software of the user that may arise as a result of the use of this website and/or in connection of this website with other websites/hypertext links or internet resources.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "When you use our software, it will enable us to use cookies in relation to your access to our website. Cookies are small files of information, which often include a unique identification number or value, which are stored on your computer’s hard drive as a result of you using this trading software and accessing the website. The purpose of this information is to provide you with a more relevant and effective experience on the website, including presenting websites according to your needs or preferences. Cookies are frequently used on many websites on the internet and you can choose if and how a cookie will be accepted by changing your preferences and options in your browser. Some of our business partners (e.g. advertisers) use cookies on our website(s). We have no access to, or control over, these cookies.",
      "The cookies do not contain personally identifying information nor are they used to identify you. You may choose to disable the cookies. However, you may not be able to access some parts of this website if you choose to disable the cookie acceptance in your browser, particularly the secure parts of the website.",
      "For further information about cookies and how to disable them, please refer to www.allaboutcookies.org.",
    ],
  },
  {
    title: "Third Party Links",
    content: [
      "Our website(s) contain links to websites operated by other parties. We provide the links for your convenience, but we do not review, control or monitor the privacy or other practices of websites operated by other third parties. We are not responsible for the performance of websites operated by third parties or for your business dealings with them",
    ],
  },
  {
    title: "Personal Data",
    content: [
      "Any personal Data that will be collected by Axion Trade through this website, shall be processed according to the relevant jurisdictional laws and regulations, as amended or replaced from time to time.",
      "You, the user of this website, hereby agree that:",
      "01. Axion Trade has the right to process Personal Data in order to support, promote and realize our relations.",
      "02. Axion Trade will not communicate or disclose such Personal Data to any third party, unless pertaining to: (i) a company/companies to which Axion Trade has partly or fully assigned the realization of the processing of such data in accordance with the law, (ii) such communication or disclosure which may be required by law or by a court decision and (iii) where you are a client of Axion Trade according to the Privacy Policy which also applies to you.",
      "03. Unless otherwise specifically instructed by me, Axion Trade will have the right to use such personal data, with the exception of Sensitive Personal Data, in order to remotely promote its financial products and/or any products/services provided by other affiliated companies.",
      "04. You are aware that you are at any time entitled to update or refuse any further processing of my Personal Data pursuant to the relevant jurisdictional laws and regulations, passed by the relevant Government body as amended or replaced from time to time.",
      "05. The above will apply both to current Clients of Axion Trade and to applicants for any service, irrespective of whether their application may be accepted or rejected. The Privacy Policy will also apply to all Clients of Axion Trade.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "Your use of this site shall be subject to all applicable laws and regulations. Axion Trade may enforce the Terms of Use in the jurisdiction of any users or affiliates of Axion Trade. By accessing the Axion Trade website and any pages linked thereto, you agree to be bound by the terms and conditions as described above.",
    ],
  },
];

export default async function TermOfUse({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return (
    <div>
      {/* Page Title */}
      <PageTitle
        title="Terms Of Use"
        description="Please read the Terms of Use before you use the services of Axion Trade."
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
