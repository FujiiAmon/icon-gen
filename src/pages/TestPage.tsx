
import React , {useRef, useEffect, useState} from "react";


import InputArea2 from "./InputArea2";
import Button from "./Button";
import LoadingSkeleton from "./LoadingSkeleton";
import DownloadButton from "./DownloadButton";
import RankingPage from "./RankingPage";
import EditButton from "./EditButton";


const sampleImages: string[] = [
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
]
const API_URL = import.meta.env.VITE_API_URL;
const sampleURL =
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg";


const TestPage: React.FC = () => {
    const inputRef = useRef<HTMLDivElement>(null);
    const generateButtonRef = useRef<HTMLDivElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);


    const [isGenerated, setGenerated] = React.useState(false);
    const [isLoading, setLoading] = React.useState(true);
    const [inputText, setInputText] = React.useState<string>("");
    const [imageURL, setImageURL] = React.useState<string | undefined>(
        undefined
    );



    const [currentImage, setCurrentImage] = useState<string>(sampleImages[0])
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const [Images, setImages] = useState<string[]>(sampleImages);




    const GenerateImage = () => {

        // APIを叩き画像を受け取る処理
        setGenerated(true);
        setLoading(true);
        try {
            fetch(API_URL + "/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: inputText }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setImageURL(data);
                    setImages([data]);
                    setLoading(false);
                    console.log(data);
                });
        } catch (error) {
            console.error(error);
            setLoading(false);
        } finally {
            // setGenerated(true);
            // console.log(inputText);
            // setTimeout(() => {
            //     setLoading(false);
            // }, 1000);
        }

    }
    
    const handleScroll = (event:React.UIEvent<HTMLDivElement, UIEvent>) => {
        const container = event.currentTarget;
        const scrollLeft = container.scrollLeft;
        const width = container.scrollWidth / (Images.length);
        const newIndex = Math.round(scrollLeft / width) + 1;
        console.log("width", width)
        console.log("scrollleft", scrollLeft)
        console.log("scroll", width)
        console.log("newIndex", newIndex);

        setCurrentImageIndex(newIndex);
        if (scrollLeft + container.clientWidth >= container.scrollWidth) {
            // 最初の要素を追加
            setImages((prevImages) => [
              ...prevImages,
              Images[currentImageIndex - 2] ,
            ]);
        }
    }




    // 受け取ったrefの位置に自動スクロールする関数
    const scrollToNext = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // 画像のLoadingをシミュレートしています
    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
          if (scrollContainerRef.current) {
            event.preventDefault(); 
            console.log(Math.round(event.deltaY / 10));
            scrollContainerRef.current.scrollLeft += Math.round(event.deltaY / 10);//Math.round(event.deltaY / 3); // 縦スクロールを横スクロールに変換
          }
        };
    
        const container = scrollContainerRef.current;
        container?.addEventListener("wheel", handleWheel);
    
        return () => {
          container?.removeEventListener("wheel", handleWheel);
        };
      }, []);

    return (
 
        <>
            <div className="h-screen w-full bg-violet-50 overflow-y-auto bg-gradient-to-b from-gray-900 to-black text-white">
                <div className="w-full">
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
                    <main className="container mx-auto space-y-20 flex flex-col">
                        <div>
                            {/* description テキスト折り返し*/}
                            <p className="text-lg text-center font-small break-words">
                                This site is a tool that generates your images
                                and icons. Please answer the following questions
                                to generate your image.
                            </p>
                        </div>

                    <div className="border-2 border-violet-800 rounded-lg p-8 space-y-20 ">

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
                            <Button disabled={!inputText} name="Generate" onClick={GenerateImage} />
                        </div>

 


                {/* result */}    
                <div ref={resultRef} className="space-y-4 flex flex-col items-center justify-center">
                    <div ref={scrollContainerRef} className="flex item-center justify-center overflow-x-auto space-x-10 w-full snap-x snap-mandatory"  onScroll={handleScroll}>
                    
                        {/* <div className="snap-center snap-always">
                            <LoadingSleleton isLoading={isLoading}>
                            
                            {/* <div className="w-24 h-24 bg-gray-300 rounded-full"></div> */}
                                    {/* <img src={sampleURL} alt="random image" className="w-36 h-36 rounded-full"/> */}
                            {/* </LoadingSleleton> */}
                        {/* </div> */} 
                        {/* duplicate image */}

                        {/* {Images.map((item, index) => (
                            <div key={index} className={`snap-center shrink-0 ${currentImageIndex === index ? "scale-100" : "scale-75"}`}>
                            <LoadingSkeleton isLoading={isLoading}>
                            
                            <img src={item} alt="random image" className="w-36 h-36 rounded-full object-cover "/>
                            </LoadingSkeleton>
                            
                            </div>
                            ))} */}

                        <div  className={`snap-center shrink-0`}>
                            {isGenerated ? (
                                <LoadingSkeleton isLoading={isLoading}>
                    
                                <img src={Images[0]} alt="random image" className="w-36 h-36 rounded-full object-cover "/>
                            </LoadingSkeleton>
                            ):(
                                
                                <div className="w-36 h-36 bg-gray-900 rounded-full">
                                </div>
                            )}
                            
                                            
                        </div>
                       
                    </div>

                    <div className="flex gap-2">
                    
                    <DownloadButton src={Images[currentImageIndex]}/>
                    <EditButton src={Images[currentImageIndex]} onClick={()=>{}}/>
                    </div>
                </div>
                </div>
                
                {/* <ImageViewer src="https://source.unsplash.com/random/800x600" alt="random image"/> */}

                <div className="border-2 border-violet-800 rounded-lg p-8 space-y-20">
                    <div className="text-center text-2xl font-bold">Ranking</div>
                    <RankingPage/>

                </div>
             
            </main>


            </div>

        </div>
    </>)
}

export default TestPage;
