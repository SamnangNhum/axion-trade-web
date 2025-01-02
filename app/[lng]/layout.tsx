import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { dir } from "i18next";
import { siemreap, notoSans, KumbhSans } from "@/assets/Fonts";

import TawkMessenger from "@/components/TawkMessenger/TawkMessenger";

export const metadata = {
  title: "Axion Trade",
  description: "Simple. Reliable. Innovative.",
  openGraph: {
    title: "Axion Trade",
    description: "Simple. Reliable. Innovative.",
    url: "https://www.axiontrade.net",
    images: [
      {
        url: "/assets/images/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "Axion Trade - Simple. Reliable. Innovative.",
      },
    ],
  },
};
interface RootLayoutProp {
  children: React.ReactNode;
  params: Promise<{ lng: string }>; // Define the dynamic route parameter
}
export default async function RootLayout({ children, params }: RootLayoutProp) {
  const { lng } = await params;

  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={
          lng === "km"
            ? notoSans.className
            : lng === "en"
            ? KumbhSans.className
            : notoSans.className
        }
        style={lng === "km" ? { fontSize: "16px" } : { fontSize: "16px" }}
      >
        <Header lng={lng} />
        {children}
        <Footer lng={lng} />
        <TawkMessenger />
      </body>
    </html>
  );
}
