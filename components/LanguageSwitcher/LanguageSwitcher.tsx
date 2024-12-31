"use client";

import React, { useState } from "react";
import { languages } from "@/app/i18n/settings";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { GrLanguage } from "react-icons/gr";
import { ScrollArea } from "../ui/scroll-area";

const flags: any = {
  en: "/assets/images/en.png",
  km: "/assets/images/km.png",
  zh: "/assets/images/zh.png",
  tw: "/assets/images/tw.png",
  ja: "/assets/images/ja.png",
  ko: "/assets/images/ko.png",
  ms: "/assets/images/ms.png",
  id: "/assets/images/id.png",
  tl: "/assets/images/tl.png",
  th: "/assets/images/th.png",
  vi: "/assets/images/vi.png",
  hi: "/assets/images/hi.png",
  fr: "/assets/images/fr.png",
  de: "/assets/images/de.png",
  it: "/assets/images/it.png",
  pt: "/assets/images/pt.png",
  es: "/assets/images/es.png",
  tr: "/assets/images/tr.png",
  ru: "/assets/images/ru.png",
  // Add more flags here
};

const languageNames: any = {
  en: "English",
  km: "ខ្មែរ",
  zh: "简体中文",
  tw: "Taiwan",
  ja: "Japan",
  ko: "Korean",
  ms: "Malaysian",
  id: "Indonesian",
  tl: "Tagalog",
  th: "Thai",
  vi: "Vietnamese",
  hi: "Indian",
  fr: "French",
  de: "German",
  it: "Italian",
  pt: "Portuguese",
  es: "Spanish",
  tr: "Turkish",
  ru: "Russian",
  // Add more language names here
};

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.substring(1, 3); // Extract current language from URL
  const currentRoute = pathname.substring(3); // Extract the rest of the route
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    const newRoute = `/${lang}${currentRoute}`;
    router.replace(newRoute);
    setIsOpen(false); // Close dropdown after selecting a language
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Dropdown */}
      <div
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer"
      >
        <GrLanguage size={25} color="white" className="cursor-pointer" />
        <span className="ml-2 text-white">
          {languageNames[currentLang] || "Language"}
        </span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="py-1 bg-white">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className="flex items-center px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Image
                    src={flags[lang]}
                    alt={`${lang} flag`}
                    width={20}
                    height={15}
                    className="mr-2"
                  />
                  {languageNames[lang] || lang}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
