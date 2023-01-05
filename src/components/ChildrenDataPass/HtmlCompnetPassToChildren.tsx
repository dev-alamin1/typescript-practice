import React from 'react';

type HtmlComponetTypes = {
    children : React.ReactNode
}

const HtmlCompnetPassToChildren = ({children} :HtmlComponetTypes) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default HtmlCompnetPassToChildren;