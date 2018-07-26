import React from 'react';

export default function FancyButton(props) {
    return (
        <button onClick={props.onClick} style={{ padding: '1em', backgroundColor: 'blue', color: 'white' }} >{props.label}</button>
    );
}