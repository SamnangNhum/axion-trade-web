import Description from "@/app/shared/description";
import PageTitle from "@/app/shared/pages-title";
import SubTitle from "@/app/shared/sub-title";
import { TbPointFilled } from "react-icons/tb";

const privacyNotices = [
    "Provided during the account application process (e.g., your name, e-mail address, telephone number, birth date, social security number, investment object.",
    "Acquired as a result of the transactions you conduct through the trading system.",
    "Received from consumer-reporting agencies.",
    "Collected through Internet “cookies.",
];

const clientConfidentialities = [
    "We do not sell or license lists of our customers or the personal, non-public information that you provide to us.",
    "We restrict access to the personal, non-public information that you have shared with us to the Company’s employees, agents and affiliates who need to know such information in connection with the services that the Company provides to you.",
    "We maintain strict employment policies that prohibit employees who have access to your personal, non-public information from using or disclosing such information except for business purposes.",
    "We take substantial precautions to safeguard your personal, non-public information. For example, the Company’s system can only be accessed by authorised personnel via valid usernames and passwords. In addition, our Internet-based systems include security measures such as encryption and firewalls.",
];

export default function PrivacyProlicy() {
    return (
        <div>
            {/* Page Title */}
            <PageTitle
                title="Privacy Policy"
                description="Please read the Privacy Policy of Axion Trade before you use our services."
            />

            {/* Gerneral Statement */}
            <section className="px-36 pt-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
                <SubTitle subTitle={"1. GENERAL STATEMENT"}
                    otherClass={"font-bold "} />
                <Description description={"Axiontrade (Cambodia) Co., Ltd. (hereinafter called the “Company”) is registered in Cambodia with Company Registration Number 1000179787, and is approved by the Securities and Exchange Regulator (SERC) of Cambodia to operate under a Derivative Broker License (in-principle approval of License No. 038)."}
                    otherClass={"text-gray-500 my-4"} />
                <Description description={"The Company understands that confidentiality and security of your personal information is important. That is why we have developed specific policies and practices designed to protect the privacy of your personal information."}
                    otherClass={"text-gray-500 my-4"} />
                <Description description={"By opening an account with the Company or by utilising the products and services available through the Company, you have consented to the collection and use of your personal information in accordance with the privacy notice set forth below. We encourage you to read this privacy notice carefully."}
                    otherClass={"text-gray-500 my-4"} />
                <Description description={"The services of Axion Trade and the information on this site are not directed at citizens/residents of Japan, Hong Kong, Singapore, the United Kingdom and the United States. Axion Trade subscribes to the rules of FX regulated jurisdictions in the above-mentioned countries and does not accept solicited clients from these countries. This is not an exhaustive list of countries from which Axion Trade does not accept solicited clients and is updated as required. Customers should familiarize themselves with the FX rules applicable in their country’s before deciding to use Axion Trade’s services. It is also not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation."}
                    otherClass={"text-gray-500 my-4"} />
            </section>

            {/* Privacy Notice */}
            <section className="px-36 pt-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
                <SubTitle subTitle={"2. PRIVACY NOTICE"}
                    otherClass={"font-bold "} />
                <Description description={"The Company does not sell customer lists or customer email addresses to third party marketers."}
                    otherClass={"text-gray-500 my-4"} />
                <Description description={"In order to provide brokerage services and to comply with regulatory requirements, the Company collects certain personal, non-public information from you. This includes information:"}
                    otherClass={"text-gray-500 my-4"} />
                <div className="my-4">
                    <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
                        {privacyNotices.map((privacyNotice, index) => (
                            <li key={index} className="flex mb-4">
                                <span className="text-blue-500 text-2xl mr-4">
                                    <TbPointFilled />
                                </span>
                                <span className="text-gray-500">{privacyNotice}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Description description={"Cookies are bits of textual information that are sent electronically from a web server to your browser and are stored on your computer. They do not identify you individually or contain personal information about you, unless you have identified yourself or provided the information by, for example, opening an account or registering for an online service. The Company may use cookies to measure and identify website traffic patterns and to track the performance of web features and advertisements. By providing the Company with a better understanding of how you and others use the Company’s website and other web services, cookies enable the Company to improve the navigation and functionality of its website and to present you with the most useful information and offers. The Company may share information obtained from cookies with its employees, agents, and affiliates, but does not sell such information to unaffiliated third parties. The Company may permit other companies or their third party ad servers to set cookies on your browser when you visit the Company’s website. Such companies generally use these cookies as we do. We also use cookies to improve the performance of our advertising on other websites. From time to time, we may use third party vendors, such as Google and DoubleClick, to display our ads over the internet to you, based on your previous use of our website."}
                    otherClass={"text-gray-500 my-4"} />
            </section>

            {/* Client Confidentiality */}
            <section className="px-36 pt-8 pb-16 max-sm:p-16 max-md:px-10 max-xl:px-20">
                <SubTitle subTitle={"3. CLIENT CONFIDENTIALITY"}
                    otherClass={"font-bold "} />
                <Description description={"The Company safeguards the confidentiality of your information in a number of ways. For example:"}
                    otherClass={"text-gray-500 my-4"} />
                <Description description={"In order to provide brokerage services and to comply with regulatory requirements, the Company collects certain personal, non-public information from you. This includes information:"}
                    otherClass={"text-gray-500 my-4"} />
                <div className="my-4">
                    <ul className="border p-5 rounded-xl w-full max-md:w-full max-lg:w-3/4 lg:w-1/2">
                        {clientConfidentialities.map((clientConfidentiality, index) => (
                            <li key={index} className="flex mb-4">
                                <span className="text-blue-500 text-2xl mr-4">
                                    <TbPointFilled />
                                </span>
                                <span className="text-gray-500">{clientConfidentiality}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Description description={"We do not disclose personal, non-public information to individuals or entities that are not affiliated with the Company, except as provided by law. For example, among other reasons, we may disclose or report such information: where necessary to authorise, effect, administer or enforce transactions that you request or authorise; to maintain and administer your account; to provide you with account confirmations, statements and records; to maintain appropriate archival records; where we believe that disclosure is required by applicable law, rules or regulations; to cooperate with law enforcement, regulatory or self-regulatory organisations; to enforce our customer and other agreements; to meet our obligations; or to protect our rights and property. As long as consistent with applicable securities laws and regulations, we may share anonymised account information or anonymised delayed order information with third parties (and/or share such information among our affiliates) for the purpose of analysis, research, market data compilation, product creation, establishing order routing and execution relationships, or for any other lawful purpose."}
                    otherClass={"text-gray-500 my-4"} />
                    <Description description={"Finally, if you choose to subscribe to any of the Company’s suite of third-party services that are provided through the Company’s website, we may disclose such information to the service providers as necessary for them to provide the services that you have requested. The Company requires these service providers to enter into confidentiality agreements that limit their use of the information that they receive. Such agreements prohibit the service provider from using the Company’s customer information that they receive other than to carry out the purposes for which the information was disclosed."}
                    otherClass={"text-gray-500 my-4"} />
            </section>
        </div>
    )
}