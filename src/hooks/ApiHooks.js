import { useState } from "react";

const apiKeys = {
    openAi: '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',
}

const doFetch = async (url, options = {}) => {
    try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
    } catch (err) {
        throw new Error('doFetch error');
    }
}

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const postLogin = async (inputs) => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: inputs
        }
        try {
            const response = await doFetch(); //TODO: Needs a hosting place for url
        } catch (err) {
            throw new Error('postLogin error:', err.message);
        }
    }
}

const useOpenAi = () => {
    const [loading, setLoading] = useState(false);
    const getOpenAiResponse = async (url, options) => {
        options.headers['Authorization'] = 'Bearer ' + apiKeys.openAi;
        try {
            setLoading(true);
            return await doFetch(url, options);
        } catch (err) {
            throw new Error('getOpenAiResponse error');
        } finally {
            setLoading(false);
        }
    }
    return {getOpenAiResponse, loading}
}

export { apiKeys, useOpenAi};