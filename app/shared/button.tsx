import { MdKeyboardArrowRight } from "react-icons/md";

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
        <MdKeyboardArrowRight className="text-2xl max-sm:text-xl" />
      </div>
    </div>
  );
}
