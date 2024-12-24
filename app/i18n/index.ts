import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { defaultNS, getOptions } from "./settings";

const initI18next = async (lng: string, ns: any = defaultNS) => {
    const i18nInstance = createInstance();
    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                    import(`./locales/${language}/${namespace}.json`)
            )
        )
        .init(getOptions(lng, ns)); // Pass `ns` directly (it will now always be processed correctly)
    return i18nInstance;
};

export async function useTranslation(
    lng: string,
    ns?: string | string[],
    options: { keyPrefix?: string } = {}
) {
    const i18nInstance = await initI18next(lng, ns);
    return {
        t: i18nInstance.getFixedT(
            lng,
            Array.isArray(ns) ? ns[0] : ns || undefined, // Use default namespace if ns is not passed
            options.keyPrefix || ""
        ),
        i18n: i18nInstance,
    };
}
