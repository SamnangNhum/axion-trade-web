import Image from "next/image";

export default function Homepage() {
  return (
    <div>
      <Image
        className="max-xl:w-48 max-md:w-full"
        src="assets/images/logo-axion-trade.png" // Image path from public folder
        width={500} // Specify image width
        height={500} // Specify image height
        alt="Logo of Axion Trade" // Descriptive alt text
        priority // Preloads this image for performance
      />
    </div>
  );
}
