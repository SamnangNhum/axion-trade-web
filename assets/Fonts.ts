import { Hanuman, Noto_Sans_SC, Kumbh_Sans } from "next/font/google";

export const siemreap = Hanuman({
  subsets: ["khmer"],
  variable: "--font-hanuman",
  weight: "400",
  adjustFontFallback: false,
  fallback: ["Open_Sans", "sans-serif"],
  display: 'swap',

});

export const KumbhSans = Kumbh_Sans({
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
