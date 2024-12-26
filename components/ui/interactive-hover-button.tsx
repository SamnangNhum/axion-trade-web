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
        "group relative cursor-pointer overflow-hidden rounded-full bg-background text-center py-3 px-6 border-blue-700 bg-blue-700 hover:bg-white border-2 hover:border-2 hover:border-blue-700",
        className
      )}
      {...props}
    >
      <span className="flex items-center translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white">
        {text} <RiArrowRightSLine className="text-2xl max-sm:text-lg" />
      </span>
      {/* Hover */}
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-100  hover:text-blue-700">
        {text}
        <section className="flex items-center">
          <RiArrowRightSLine className="text-2xl max-sm:text-lg" />
        </section>
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
