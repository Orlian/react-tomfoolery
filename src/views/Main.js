import {OpenAiPrompt, aiActive} from "../components/OpenAiPrompt";

const Main = () => {
    return (
        <>
            { aiActive && <OpenAiPrompt/>}
        </>
    );
}

export default Main;