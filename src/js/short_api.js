import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* //in progress copy function
function copyToClipboard(copyLink) {
    navigator.clipboard.writeText(copyLink);
}*/

export default function ShortenLinks() {

    //const api_base_url = "https://api.shrtco.de/v2/shorten?url=";

    const [input, setInput] = useState(""); //link input
    const [links, setLinks] = useState([]); //local storage data, current links
    const [copy, setCopy] = useState(""); //for clipboard copy
    const [error, setError] = useState(""); //error message

    //link input
    const inputLink = (e) => {
        
        e.preventDefault();

        if (!link) {
            setError("Please input a link.");
            return;
        } else {
            setInput(link);
        }
    }

    //get link -> shorten link
    axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`)
        .then((response) => {
            console.log(response);
            setLinks(prev => [...prev, response.data.result]);
        })
        .catch((err) => {
            setError(err.response.data.error);
        })

}