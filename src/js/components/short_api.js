import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ResultBar } from './linkbar';

/* //in progress copy function
function copyToClipboard(copyLink) {
    navigator.clipboard.writeText(copyLink);
}*/

export const ShortenLinks = ({ input }) => {
    const [shortLink, setShortLink] = useState(""); //shortened link
    const [linkList, setLinkList] = useState([]); //local storage data, current links
    //const [copy, setCopy] = useState(false); //for clipboard copy
    const [error, setError] = useState(""); //error message

    const fetch = async() => {
        try {
            const response = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`);
            const shortenedLink = response.data.result.full_short_link;
            setShortLink(shortenedLink);
            setLinkList((prev) => [...prev, shortenedLink]);
        } catch {
            setError(error);
        }
    };

    useEffect(() => {
        if (input.length) {
            fetch();
        }
    }, [input]);

    return (
        <>
            <ResultBar value={shortLink} />
            {linkList.length > 0 ? linkList.reverse().map((data) => {
            return(
                <li>{data}</li>
            )
        }) : null}
        </>
    )
}