//component whare you enter the link

import React, { useState } from 'react';

export const LinkBar = ({ setInput }) => {

    const [value, setValue] = useState("");

    const handleSubmit = () => {
        setInput(value);
        setValue("");
    }

    return (
        <div>
            <input placeholder="Enter a link to shorten here!"
                value={value} onChange={(e) => setValue(e.target.value)}
                type="text" />
            <button onClick={handleSubmit}>Shorten It!</button>
        </div>
    )
}

//component to show shortened link

export const ResultBar = (props) => {
    return (
        <p>{props.value}</p>
    )
}