import React , {useRef, useEffect} from "react";
import InputArea from "./InputArea";
import Button from "./Button";
import LoadingSleleton from "./LoadingSkeleton";
import DownloadButton from "./DownloadButton";

const sampleURL = "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg";

const TestPage: React.FC = () => {

    const inputRef = useRef<HTMLDivElement>(null);
    const generateButtonRef = useRef<HTMLDivElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);

    
    const [isLoading, setLoading] = React.useState(true);

    
    const GenerateImage = () => {
        // APIを叩き画像を受け取る処理
    }
    
    // 受け取ったrefの位置に自動スクロールする関数
    const scrollToNext = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      };

    // 画像のLoadingをシミュレートしています
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
        
    }, [])

    return (<>
        <div className="flex flex-col items-center justify-center space-y-10">
            {/*header*/}
            <header className="my-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-wide">Icon Generater</h1>
                </div>
                </header>
            {/*main content*/}
            <main className="container mx-auto space-y-20 relative mt-8 flex flex-col items-center justify-center">
                
                {/* input area */}
                <div ref={inputRef}>
                    <InputArea question="What is your name?" onClick={() => {}}/>
                </div> 

                <div ref={generateButtonRef}>
                    <Button name="Gennerate" onClick={() => {}}/>
                </div>

                {/* result */}    
                <div ref={resultRef}>
                    <LoadingSleleton isLoading={isLoading}>
                        {/* <div className="w-24 h-24 bg-gray-300 rounded-full"></div> */}
                        <img src={sampleURL} alt="random image" className="w-24 h-24 rounded-full"/>
                        
                    </LoadingSleleton>
                </div>
                
                {/* <ImageViewer src="https://source.unsplash.com/random/800x600" alt="random image"/> */}

                <DownloadButton src="https://source.unsplash.com/random/800x600"/>
             
            </main>



        </div>
    </>)
}

export default TestPage;