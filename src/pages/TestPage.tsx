import React , {useRef} from "react";
import InputArea from "./InputArea";
import Button from "./Button";
import LoadingSleleton from "./LoadingSkeleton";
import DownloadButton from "./DownloadButton";

const sampleURL = "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg";

const TestPage: React.FC = () => {

    const inputRef = useRef<HTMLDivElement>(null);
    const generateButtonRef = useRef<HTMLDivElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);

    

    const scrollToNext = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (<>
        <div className="flex flex-col items-center justify-center space-y-80">
            <div ref={inputRef}>
                <InputArea question="What is your name?" onClick={(url:string)=> scrollToNext(generateButtonRef)}/>
            </div> 

            <div ref={generateButtonRef}>
                <Button name="Gennerate" onClick={() => scrollToNext(resultRef)}/>
            </div>

            <div>

            </div>

            <div ref={resultRef}>
                <LoadingSleleton isLoading={true}>
                    <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                    <img src={sampleURL} alt="random image" className="w-24 h-24 rounded-full"/>
                </LoadingSleleton>
            </div>
            
            {/* <ImageViewer src="https://source.unsplash.com/random/800x600" alt="random image"/> */}
            <DownloadButton src="https://source.unsplash.com/random/800x600"/>
             



        </div>
    </>)
}

export default TestPage;