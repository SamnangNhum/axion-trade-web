import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative  cursor-pointer overflow-hidden rounded-full border-0 bg-background text-center py-3 px-6 w-full bg-blue-700",
        className
      )}
      {...props}
    >
      <span className="flex translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white">
        {text} <RiArrowRightSLine className="text-2xl max-sm:text-lg" />
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-100 text-blue-800">
        {text}
        <RiArrowRightSLine className="text-2xl max-sm:text-lg" />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;