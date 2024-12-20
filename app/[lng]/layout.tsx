import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { dir } from "i18next";
import { siemreap, openSans, notoSans } from "@/assets/Fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={
          lng == "km"
            ? siemreap.className
            : lng == "en"
            ? openSans.className
            : notoSans.className
        }
        style={lng == "km" ? { fontSize: "16px" } : { fontSize: "16px" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
