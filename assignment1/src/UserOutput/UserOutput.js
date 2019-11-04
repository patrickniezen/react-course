import React, {Component} from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>My name is:</p>
            <p>{props.username}</p>
        </div>
    );
}

export default userOutput;