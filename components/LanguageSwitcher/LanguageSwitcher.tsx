"use client";

import React from "react";
import { languages } from "@/app/i18n/settings";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const flags: any = {
  en: "/assets/images/en.png",
  km: "/assets/images/km.png",
  zh: "/assets/images/zh.png",
  // Add more flags here
};

const LanguageSwitcher = () => {
  const router = useRouter();
  const currentRoute = usePathname().substring(3);

  const handleLanguageChange = (lang: string) => {
    const newRoute = `/${lang}${currentRoute}`;
    router.replace(newRoute);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center cursor-pointer">
        <span className="text-blue-500">Khmer</span>
        <svg
          className="ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
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
              {lang === "en" && "English"}
              {lang === "km" && "Khmer"}
              {lang === "zh" && "简体中文"}
              {/* Add more language labels here */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
