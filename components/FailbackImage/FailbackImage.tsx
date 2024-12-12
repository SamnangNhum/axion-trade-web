// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import fallBackImage from "@/assets/images/fallback-img.jpg";
// import fallBackImageAvatar from "@/assets/images/fallback-img-avatar.jpg";

// const FailbackImage = ({ ...props }) => {
//   const [src, setSrc] = useState(props.src ? props.src : fallBackImage);

//   const isAvatar = false;

//   return (
//     <div>
//       <Image
//         {...props}
//         src={src}
//         priority
//         alt={src}
//         onError={() => setSrc(isAvatar ? fallBackImageAvatar : fallBackImage)}
//         placeholder="blur"
//         blurDataURL={`${isAvatar ? fallBackImageAvatar : fallBackImage}`}
//       />
//     </div>
//   );
// };

// export default FailbackImage;
