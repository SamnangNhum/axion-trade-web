"use client";

import dynamic from "next/dynamic";

const TawkMessengerReact = dynamic(
  () => import("@tawk.to/tawk-messenger-react"),
  { ssr: false }
);

const TawkMessenger = () => {
  return (
    <div>
      <TawkMessengerReact
        propertyId="67691836af5bfec1dbe07c88"
        widgetId="1ifp8d5it"
      />
    </div>
  );
};

export default TawkMessenger;
