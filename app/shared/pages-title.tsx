import BlurIn from "@/components/ui/blur-in";

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
      {/* <section className="text-white text-5xl font-bold mb-3">{title}</section> */}
      <BlurIn
          word={title}
          className="text-white  max-md:mt-20 font-display text-center text-4xl font-bold tracking-normal  dark:text-white md:text-5xl md:leading-[4rem]"
        />
        <BlurIn
          word={description}
          className="-mt-1 p-3 text-lg text-white "
        />
      {/* <section className="text-white text-lg">{description}</section> */}
    </div>
  );
}
