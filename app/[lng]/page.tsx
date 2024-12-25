import Image from "next/image";
import Home from "./home/page";
import { useTranslation } from "../i18n";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}
 

export default async function Homepage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  return (
    <div>
      <Home lng={lng} />
    </div>
  );
}
