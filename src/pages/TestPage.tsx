import React from "react";
import InputArea from "./InputArea";
import Button from "./Button";
import LoadingSleleton from "./LoadingSleleton";
import DownloadButton from "./DownloadButton";

const sampleURL = "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg";

const TestPage: React.FC = () => {
    return (<>
        <div className="flex flex-col items-center justify-center h-screen space-y-10">
            <InputArea question="What is your name?" onClick={(text) => console.log(text)}/>
            <Button name="Gennerate" onClick={() => console.log("Generate")}/>
            <LoadingSleleton isLoading={true}>
                <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                <img src={sampleURL} alt="random image" className="w-24 h-24 rounded-full"/>
                
                
            </LoadingSleleton>
            {/* <ImageViewer src="https://source.unsplash.com/random/800x600" alt="random image"/> */}
            <DownloadButton src="https://source.unsplash.com/random/800x600"/>



        </div>
    </>)
}

export default TestPage;