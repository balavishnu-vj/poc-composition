import React from 'react';
import LogicButton from '../Logic/Button';
import UiButton from '../Library/Button';

const onClick = () => {
    console.log('Button Clicked');
}
export default function Button(props) {

    return (<LogicButton {...props} onClick={onClick} >
        <UiButton />
    </LogicButton>)
}