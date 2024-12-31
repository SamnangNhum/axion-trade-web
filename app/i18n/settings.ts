export const fallbackLng = "en";
export const languages = [fallbackLng, "km", "zh","tw","ja","ko","ms","id","tl","th","vi","hi","fr","de","it","pt","es","tr","ru"];
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
