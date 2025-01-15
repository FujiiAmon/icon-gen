import React, {useState} from "react";
import Button from "./Button";

type InputAreaProps = {
    question: string;
    onClick: (text: string) => void;
}

const InputArea: React.FC<InputAreaProps> = ({question, onClick}) => {

    const [inputText, setInputText] = useState<string>("");

    const handleClick = () => {
        onClick(inputText);
    }

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 ">{question}</h2>
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Describe answer"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <Button name="Next" onClick={handleClick}/>
        </div>
    );
}

export default InputArea;