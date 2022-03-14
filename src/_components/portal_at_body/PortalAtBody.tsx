import React from 'react';
import ReactDOM from 'react-dom';

//
function PortalAtBody({
    children
}: {
    children: React.ReactElement | React.ReactNode;
}) {
    return ReactDOM.createPortal(
        children,
        document.getElementsByTagName('body')[0]
    );
}

export default PortalAtBody;
