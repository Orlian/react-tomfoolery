import { useState } from "react"
import { useOpenAi } from "../hooks/ApiHooks"
import { openAiBaseUrl } from "../utils/variables"
import { Rings } from 'react-loader-spinner'

const aiActive = false;

const OpenAiPrompt = (props) => {
    const [responded, setResponded] = useState('');
    const { getOpenAiResponse, loading } = useOpenAi();
    const sendForm = async () => {
        const input = document.getElementById('openAi-input').value;
        const openAiUrl = openAiBaseUrl + 'completions';
        const requestBody = JSON.stringify({
            "model": "text-davinci-002",
            "prompt": input,
            "max_tokens": 40
        });
        const formOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: requestBody, // TODO: Normally would be JSON.stringify(inputs),
        }
        try {
            const response = await getOpenAiResponse(openAiUrl, formOptions);
            setResponded(response?.choices[0]?.text);
        } catch (err) {
            console.error('sendForm error:', err.message);
        }
    }

    return (
        <div className="openAi openAi-wrapper">
            <div className="openAi-form-wrapper">
                <label htmlFor="openAi-input">Ask the mysterious AI a question:</label>
                <input id="openAi-input" className="openAi-input" name="prompt"></input>
                <button className="send-btn" onClick={sendForm}>Ask away</button>
            </div>
            <div className="openAi-answer-wrapper">
            {loading ? <Rings /> : <div className="openAi-answer">{responded}</div>}
            </div>
        </div>
    )
}

export {OpenAiPrompt, aiActive};
