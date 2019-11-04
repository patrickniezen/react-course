import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input onChange={(event) => props.onChange(event.target.value)} value={props.username} />
        </div>
    );
}

export default userInput;