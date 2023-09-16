import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import '../../css/linkbar.css';

export const LinkBar = ({ setInput }) => {

    const [value, setValue] = useState("");

    const handleSubmit = () => {
        setInput(value);
        setValue("");
    }

    return (
        <div className="container">
            <input placeholder="Enter a link to shorten here!"
                value={value} onChange={(e) => setValue(e.target.value)}
                type="text" className="input-field"/>
            <button className="submit-btn" onClick={handleSubmit}>Shorten It!</button>
        </div>
    )
}

//show results
export const ResultBar = (data) => {

    const [copy, setCopy] = useState(false); //for clipboard copy

    useEffect(() => {
        const timer = setTimeout(() => {
          setCopy(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [copy]);

    return (
        <div className="container">
            <CopyToClipboard text={data.shortenedLink}
                onCopy={() => setCopy(true)}>
                <button className="copy-btn" style={{ float: "right" }}>{copy ? "Copied" : "Copy"}</button>
            </CopyToClipboard>
            <div class="short_url_list" key={data.index} >
                <span style={{ float: "left" }}>{data.originalLink}</span>
                <span style={{ float: "right" }}>{data.shortenedLink}</span>
            </div>
        </div>
    )
}