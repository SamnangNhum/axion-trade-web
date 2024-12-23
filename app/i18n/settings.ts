export const fallbackLng = "en"; // Default fallback language
export const languages = [fallbackLng, "km", "zh"]; // Supported languages
export const defaultNS = "translation"; // Default namespace

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    defaultNS,
    ns: Array.isArray(ns) ? ns : [ns], // Ensure `ns` is always an array
    fallbackNS: defaultNS,
  };
}
