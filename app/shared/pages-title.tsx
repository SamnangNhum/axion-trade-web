export default function PageTitle({
  title,
  description,
  otherClass,
}: {
  title: string;
  description: string;
  otherClass?: string;
}) {
  return (
    <div
      className={`bg-[url('/assets/images/bg-axion-trade.png')] text-center bg-cover bg-center py-48 px-20 max-md:py-36 max-md:px-10 ${otherClass}`}
    >
      <section className="text-white text-5xl font-bold mb-3">{title}</section>
      <section className="text-white text-lg">{description}</section>
    </div>
  );
}
