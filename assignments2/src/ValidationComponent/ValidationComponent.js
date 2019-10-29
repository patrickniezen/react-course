import React from 'react';

function validationComponent(props) {

    let validationMessage = '';

    if(props.input.length < 5) {
        validationMessage = 'Text too short';
    } else {
        validationMessage = 'Text long enough';
    }

    return (
        <p>{validationMessage}</p>
    );
}

export default validationComponent;