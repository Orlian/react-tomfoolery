import { useState } from "react";

const CatOrDogBtn = () => {
    const [cat, setCat] = useState(true);
    return (
        <button className="cat-or-dog-btn" onClick={() => {setCat(!cat)}}>
            {cat ? 'I like cats' : 'I like dogs'}
        </button>
    )
}

export default CatOrDogBtn;