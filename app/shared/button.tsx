import { RiArrowRightSLine } from "react-icons/ri";

export default function Button({
  button,
  otherClass,
}: {
  button: string;
  otherClass?: string;
}) {
  return (
    <div className="flex items-center">
      <div
        className={`flex bg-blue-700 text-white py-3 px-6 rounded-full cursor-pointer ${otherClass}`}
      >
        {button}
        <section className="flex items-center max-md:flex max-md:items-center ml-1">
        <RiArrowRightSLine className="text-2xl max-sm:text-lg" />
        </section>
        
      </div>
    </div>
  );
}
