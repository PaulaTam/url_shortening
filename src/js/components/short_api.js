import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ResultBar } from './linkbar';

export const ShortenLinks = ({ input }) => {
    const [linkList, setLinkList] = useState([]); //local storage data, current links
    const [error, setError] = useState(""); //error message

    const fetch = async() => {
        try {
            const response = await axios(`https://tinyurl.com/api-create.php?url=${input}`);
            const originalLink = input;
            const shortenedLink = response.data;

            console.log(response);

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
        
        // eslint-disable-next-line
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