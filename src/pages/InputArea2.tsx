import React, {useState} from "react";
import Button from "./Button";

type InputAreaProps = {
    question: string;
    onChange: (text: string) => void;
}

const InputArea2: React.FC<InputAreaProps> = ({question, onChange}) => {

    const [inputText, setInputText] = useState<string>("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const changedText = e.target.value;
        setInputText(changedText)
        onChange(changedText);
    }

    return (
        <div className="space-y-4 w-full">
            <h2 className="text-xl font-bold text-white ">{question}</h2>
            <input
                type="text"
                className="w-full p-3 bg-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Describe answer"
                value={inputText}
                onChange={(e) => handleChange(e)}
            />
            
        </div>
    );
}

export default InputArea2;