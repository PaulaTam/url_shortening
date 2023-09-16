import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ResultBar } from './linkbar';

export const ShortenLinks = ({ input }) => {
    const [linkList, setLinkList] = useState([]); //local storage data, current links
    const [error, setError] = useState(""); //error message

    const fetch = async() => {
        try {
            const response = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`);
            const originalLink = response.data.result.original_link;
            const shortenedLink = response.data.result.full_short_link;

            let newLink = {
                index: linkList.length,
                originalLink: originalLink,
                shortenedLink: shortenedLink
            };
            
            setLinkList((prev) => [...prev, newLink]);
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
            {linkList.length > 0 ? linkList.map((data) => {
            return(
                <ResultBar index={data.index}
                originalLink={data.originalLink}
                shortenedLink={data.shortenedLink} />
            )
            }) : null}
        </>
    )
}