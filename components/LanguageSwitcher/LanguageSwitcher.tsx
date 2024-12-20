"use client";

import { languages } from "@/app/i18n/settings";
import React from "react";
import en from "@/assets/images/eng.svg";
import km from "@/assets/images/cambodia.png";
import zh from "@/assets/images/chinese.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

function LanguageSwitcher() {
  const router = useRouter();
  const currentRoute = usePathname().substring(3);
  const handleLanguageChange = (lang: string) => {
    const newRoute = `/${lang}${currentRoute}`;

    router.replace(newRoute);
  };

  return (
    <div className="flex gap-2 align-center justify-center mt-2 mr-2">
      {languages.map((lang, index) => {
        return (
          <span
            key={lang}
            className="w-8 cursor-pointer"
            onClick={() => handleLanguageChange(lang)}
          >
            <Image
              style={{ height: "16px", objectFit: "cover", width: "25px" }}
              width={100}
              height={50}
              src={index === 1 ? km : index === 0 ? en : zh}
              alt={index === 1 ? km : index === 0 ? en : zh}
            />
          </span>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
