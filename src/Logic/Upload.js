import React from 'react';
export default function Upload(props) {
    const onUpload = () => {
        console.log('Hey I am Uploading stuff!!!');
    }
    const {children, ...otherProps} = props;
    const renderUpload = React.cloneElement(children, {...otherProps, onClick: onUpload})
    return renderUpload;
}