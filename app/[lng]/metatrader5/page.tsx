import { useTranslation } from "@/app/i18n";
import PageTitle from "../../shared/pages-title";

const MetaTrader = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return (
    <div>
      {/* PageTitle */}
      <PageTitle
        title={t("coming-soon")}
        description={t("in-the-meantime-start-your-trading")}
        otherClass="mb-20"
      />
    </div>
  );
};
export default MetaTrader;
