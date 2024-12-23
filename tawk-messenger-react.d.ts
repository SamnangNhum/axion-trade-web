declare module '@tawk.to/tawk-messenger-react' {
    import React from 'react';

    interface TawkMessengerReactProps {
        propertyId: string;
        widgetId: string;
    }

    export class TawkMessengerReact extends React.Component<TawkMessengerReactProps> { }
}
