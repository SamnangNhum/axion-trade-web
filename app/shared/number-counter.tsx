import NumberTicker from "@/components/ui/number-ticker";

export default function NumberCounter({
  number,
  otherClass,
}: {
  number: number;
  otherClass?: string;
}) {
  return (
    <div className={`text-4xl font-bold text-black ${otherClass}`}>
      <NumberTicker value={number} /> <span className="-ml-1 text-4xl font-bold text-black">+</span> 
    </div>
  );
}
