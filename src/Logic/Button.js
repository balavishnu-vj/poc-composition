import React from 'react';

export default function Button(props) {
    const {children, ...otherProps} = props;
    const renderButton = React.cloneElement(children, {...otherProps})
    return renderButton;
}