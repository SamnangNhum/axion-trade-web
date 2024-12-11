import { Hanuman, Noto_Sans_SC, Open_Sans } from "next/font/google";

export const siemreap = Hanuman({
  subsets: ["khmer"],
  variable: "--font-hanuman",
  weight: "400",
  adjustFontFallback: false,
  fallback: ["Open_Sans", "sans-serif"],
  display: 'swap',

});

export const openSans = Open_Sans({
  subsets: ["latin"],
  adjustFontFallback: false,
  variable: "--font-open-sans",
  fallback: ["sans-serif"],
  display: 'swap',
});

export const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: "400",
});
