"use client";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function TawkMessenger() {
  const handleBeforeLoad = () => {};

  const handleStatusChange = (status: any) => {};

  const handleLoad = () => {};
  const handleChatMaximized = () => {};
  const handleChatMinimized = () => {};
  const handleUnreadCountChanged = (unreadCount: any) => {};

  const handleChatMessageVisitor = (message: any) => {};

  const handleChatStarted = () => {};
  const handleChatSystem = () => {};
  return (
    <div className="App">
      <TawkMessengerReact
        propertyId="676b8431af5bfec1dbe18a61"
        widgetId="1iftvoojk"
        onBeforeLoad={handleBeforeLoad}
        onStatusChange={handleStatusChange}
        onLoad={handleLoad}
        onChatMaximized={handleChatMaximized} // Pass a valid function
        onChatMinimized={handleChatMinimized}
        onUnreadCountChanged={handleUnreadCountChanged}
        onChatMessageVisitor={handleChatMessageVisitor}
        onChatStarted={handleChatStarted}
        onChatMessageSystem={handleChatSystem}
      />
    </div>
  );
}
