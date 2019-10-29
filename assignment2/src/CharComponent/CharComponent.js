import React from 'react';

function charComponent(props) {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        cursor: 'pointer'
    }
    return (
        <div style={style} onClick={props.onClick}>{props.character}</div>
    );
}

export default charComponent;