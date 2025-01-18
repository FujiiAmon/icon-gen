import React, { useRef, useEffect } from "react";
import InputArea2 from "./InputArea2";
import Button from "./Button";
import LoadingSleleton from "./LoadingSkeleton";
import DownloadButton from "./DownloadButton";

const API_URL = import.meta.env.VITE_API_URL;
const sampleURL =
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg";

const TestPage: React.FC = () => {
    const inputRef = useRef<HTMLDivElement>(null);
    const generateButtonRef = useRef<HTMLDivElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);

    const [isGenerated, setGenerated] = React.useState(false);
    const [isLoading, setLoading] = React.useState(true);
    const [inputText, setInputText] = React.useState<string>("");

    const GenerateImage = async () => {
        // APIを叩き画像を受け取る処理
        setGenerated(true);
        setLoading(true);
        try {
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: inputText }),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        } catch (error) {
            console.error(error);
        } finally {
            // setGenerated(true);
            console.log(inputText);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    // 受け取ったrefの位置に自動スクロールする関数
    const scrollToNext = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // 画像のLoadingをシミュレートしています
    useEffect(() => {}, []);

    return (
        <>
            <div className="h-screen w-full bg-violet-50 overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
                <div className="w-full ">
                    {/*header*/}
                    <div className="relative z-10">
                        <header className="mb-20 bg-gradient-to-r from-indigo-900 to-purple-900 py-6 shadow-lg">
                            <div className="container mx-auto text-center ">
                                <h1 className="text-4xl font-bold tracking-wide">
                                    Icon Generater
                                </h1>
                            </div>
                        </header>
                    </div>
                    {/*main content*/}
                    <main className="container mx-auto space-y-20 flex flex-col max-w-lg">
                        <div>
                            {/* description テキスト折り返し*/}
                            <p className="text-lg text-center font-small break-words">
                                This site is a tool that generates your images
                                and icons. Please answer the following questions
                                to generate your image.
                            </p>
                        </div>

                        {/* input area */}
                        <div ref={inputRef}>
                            <InputArea2
                                question="What is your favorite animal?"
                                onChange={setInputText}
                            />
                        </div>

                        {/* generate button */}
                        <div
                            ref={generateButtonRef}
                            className="flex flex-col items-center">
                            <Button name="Generate" onClick={GenerateImage} />
                        </div>

                        {/* result */}
                        <div
                            ref={resultRef}
                            className="space-y-4 flex flex-col items-center justify-center">
                            <LoadingSleleton isLoading={isLoading}>
                                {/* <div className="w-24 h-24 bg-gray-300 rounded-full"></div> */}
                                <img
                                    src={sampleURL}
                                    alt="random image"
                                    className="w-36 h-36 rounded-full"
                                />
                            </LoadingSleleton>

                            <DownloadButton src="https://source.unsplash.com/random/800x600" />
                        </div>

                        {/* <ImageViewer src="https://source.unsplash.com/random/800x600" alt="random image"/> */}
                    </main>
                </div>
            </div>
        </>
    );
};

export default TestPage;
