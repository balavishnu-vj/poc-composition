import React from 'react';
import UploadLogic from '../Logic/Upload';
import UiButton from '../Library/Button';

export default function Upload(props) {
    return <UploadLogic {...props} label={'Upload'}>
    {props.renderUI(props)}
    </UploadLogic>
}

Upload.defaultProps = {
    renderUI: (props) => <UiButton {...props}/>
};