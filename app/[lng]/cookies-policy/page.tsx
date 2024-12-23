import Description from "@/app/shared/description";
import PageTitle from "@/app/shared/pages-title";
import SubTitle from "@/app/shared/sub-title";
import { LuNotebookPen } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";

const policySections = [
    {
        subTitle: null,
        description: "When you use Axion Trade’s Website, we will use cookies to distinguish you from other users of our Website. This helps us to provide you with a more relevant and effective experience when you browse our Website, including presenting websites according to your needs or preferences and it allows us to improve the site generally.",
        otherClass: "This Cookie Policy provides you with comprehensive information about the cookies we use and the way in which we use them. You should also read our Privacy Policy in conjunction with this Policy.",
    },
    {
        subTitle: "What is a cookie?",
        description: "Cookies are small files of information that often include a unique identification number or value, which are stored on your computer’s hard drive as a result of you using our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies as soon as you visit our Website.",
        otherClass: "mt-2",
    },
    {
        subTitle: null,
        description: "Cookies are frequently used on many websites on the internet and you can choose if and how a cookie will be accepted by changing your preferences and options in your browser. Some of our business partners (e.g. advertisers) use cookies on our Website(s). We have no access to, or control over, these cookies.",
        otherClass: "my-3",
    },
    {
        subTitle: null,
        description: "The cookies do not contain personally identifying information nor are they used to identify you. You may choose to disable the cookies. However, you may not be able to access some parts of our Website if you choose to disable the cookie acceptance in your browser, particularly the secure parts of the Website.",
        otherClass: "",
    },
    {
        subTitle: "How to delete and block cookies",
        description: "You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website. For further information about disabling cookies, please refer to www.allaboutcookies.org",
        otherClass: "mt-2",
    },
    {
        subTitle: "Your consent",
        description: "By continuing to use our Website, you are agreeing to our placing cookies on your computer in order to analyse the way you use our Website. If you do not wish to accept cookies in connection with your use of this Website, you must stop using our Website",
        otherClass: "",
    },
];

const sessionCookies = [
    "To allow you to carry information across pages of our site and avoid having to re-enter information.",
    "Within registration to allow you to access stored information.",
    "Non personal data for tagging purposes only (by random number)",
];
const persistentCookies = [
    "To help us recognise you as a unique visitor (just a number) when you return to our website and to allow us to tailor content or advertisements to match your preferred interests or to avoid showing you the same adverts repeatedly.",
    "To compile anonymous, aggregated statistics that allow us to understand how users use our site and to help us improve the structure of our Website.",
    "To internally identify you by account name, name, email address, customer ID, currency and location (geographic and computer ID/IP address)",
    "To differentiate users who are on the same network to enable us to correctly allocate Transactions to the appropriate account.",
    "Within research surveys to ensure you are not invited to complete a questionnaire too often or after you have already done so.",
];
const thirdPartyCookies = [
    "To serve advertisements on our site and track whether these advertisements are clicked on by users.",
    "To control how often you are shown a particular advertisement..",
    "To tailor content to your preferences.",
    "To count the number of anonymous users of our site.",
    "For website usage analysis.",
];


export default function CookiesPolicy() {
    return (
        <div>
            {/* Page Title */}
            <PageTitle
                title="Cookies Policy"
                description="Please read the Cookies Policy before you use the services of Axion Trade.."
            />
            <section className="px-36 pt-8 max-sm:p-16 max-md:px-10 max-xl:px-20">
                {policySections.map((section, index) => (
                    <div
                        key={index}
                        className="pt-8"
                    >
                        {/* Render SubTitle only if available */}
                        {section.subTitle && (
                            <SubTitle subTitle={section.subTitle} otherClass="font-bold" />
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
                <SubTitle subTitle="The way in which we use cookies Session Cookies"
                    otherClass="font-bold" />
                <Description description={"We use persistent cookies for the following purposes:"}
                    otherClass={"text-gray-500 my-2 "} />
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
                <SubTitle subTitle="We use persistent cookies for the following purposes:"
                    otherClass="font-bold" />
                <Description description={"We use persistent cookies for the following purposes:"}
                    otherClass={"text-gray-500 my-2 "} />
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
                <SubTitle subTitle="Third parties serve cookies via this site. These are used for the following purposes:"
                    otherClass="font-bold" />
                <Description description={"We use persistent cookies for the following purposes:"}
                    otherClass={"text-gray-500 my-2 "} />
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
                    subTitle={"The AxionTrade white label partnership program "}
                    otherClass={"font-bold"}
                />
                <Description
                    description={
                        "Some of our Web pages may contain electronic images known as Web beacons (sometimes known as clear gifs) that allow us to count users who have visited these pages. Web beacons collect only limited information which including a cookie number, time and date of a page view, and a description of the page on which the Web beacon resides. We may also carry web beacons placed by third party advertisers. These beacons do not carry any personally identifiable information and are only used to track the effectiveness of a particular campaign."
                    }
                    otherClass={"text-gray-500 my-5"}
                />
                <p className="text-md text-gray-500">
                    If you wish to know more about cookies please consult the help menu on your web browser or visit independent information providers such as <a className="text-black" href="">www.allaboutcookies.org. </a> If you have any questions regarding our privacy or security measures, <a className="text-black" href="">please email accounts@axiontrade.com.kh</a>
                </p>
            </section>


        </div>
    )
}