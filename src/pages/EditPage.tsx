import React, { useState } from "react";
import DownloadButton from "./DownloadButton";
import Button from "./Button";
import IconWorld from "./Scatter";


type EditPageProps = {
    src: string,

}

// 型定義したほうがいいかも
const sizes = ["256", "512", "1024"]
const shapeTypes = ["circle", "rectangle"]

type IconData = {
    url: string,
    x: number,
    y: number
}

const generateRandomIcons = (numIcons: number): IconData[] => {
    const icons: IconData[] = [];
    for (let i = 0; i < numIcons; i++) {
        const x = Math.random(); // 0から1のランダムな値
        const y = Math.random(); // 0から1のランダムな値
        icons.push({
            url: "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg", // ダミーの画像URL
            x,
            y,
        });
    }
    return icons;
};
const sampleIconsData = generateRandomIcons(100)

const EditPage: React.FC<EditPageProps> = ({src}) => {
    // 何も編集していない状態の画像
    const [imageUrl, setImageUrl] = useState<string>(src)
    // currentImageUrlを更新することで、編集した画像をプレビューする
    const [currentImageUrl, setCurrentImageUrl] = useState<string>(src)
    const [saturation, SetSaturation] = useState<number>(100);
    const [selectedShapeType, setSelectedShapeType] = useState<string>("circle");
    const [selectedSize, setSelectedSize] = useState<string>("1024×1024")
    const [idDot, setIsDot] = useState<boolean>(false);

    const handleSaturationChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
        const newSaturation = Number(e.target.value);
        SetSaturation(newSaturation);

        // api request
    }

    const handleGrayScaleEffect = async () => {
        // api request
    }

    const handleDotEffect = async () => {
        // api request
    }

    const handleSizeChange = async (size: string) => {
        setSelectedSize(size);

        // api request
    }

    const handleCropChange = async () => {
        // api request
    }

    const handleResetButtonClick = async () => {
        setCurrentImageUrl(imageUrl);
    }
   
    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {/* Left Side: Image Preview */}
            <div className="flex justify-center items-center bg-gray-200 rounded-lg">
            {imageUrl ? (
                <img src={imageUrl} alt="Selected" className="max-w-full max-h-full" />
            ) : (
                <div className="text-gray-500">No image selected</div>
            )}
            </div>
    
            {/* Right Side: Edit UI */}
            <div className="flex flex-col space-y-4">
        
            <Button name="reset" onClick={handleResetButtonClick}></Button>
            
            
    
            {/* Example Edit Controls */}
            <div className="space-y-6">

                <div className="relative mb-6">
                    <label className="inline-flex items-center cursor-pointer space-x-10">Dot</label>
                    {/* <span className="ms-3 text-sm text-gray-700">Dot</span> */}
                        <input type="checkbox" value="" className="sr-only peer" onChange={() =>setIsDot(isDot => !isDot)}/>
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        
                </div>

                {/* Brightness Control */}
                <div className="relative mb-6">
                <label htmlFor="saturation" className="block text-sm text-gray-700">Saturation</label>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">0</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">255</span>
                <input
                    type="range"
                    id="saturation"
                    min="0"
                    max="255"
                    step="1"
                    value={saturation}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-70"
                    onChange={handleSaturationChange}
                />
                </div>
                
                {/* size*/}
                <div className="relative mb-6">
                    <label htmlFor="size" className="block text-sm text-gray-700">Size</label>
                    <div className="flex space-x-0">
                        {sizes.map((size) => (
                            <button
                            key={size}
                            className={`px-4 py-2 border ${
                                selectedSize === size
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700"
                            } transition-colors duration-200`}
                            onClick={() => handleSizeChange(size)}
                            >
                                {size} 
                            </button>
                        ))}
                    </div>
    
                </div>
                {/* Contrast Control */}
                <div>
                    <label htmlFor="shapeType" className="block text-sm text-gray-700">ShapeType</label>
                    <div className="flex space-x-0">
                        {shapeTypes.map((item) => (
                            <button
                            key={item}
                            className={`px-4 py-2 border ${
                                selectedSize === item
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700"
                            } transition-colors duration-200`}
                            onClick={() => handleSizeChange(item)}
                            >
                                {item} 
                            </button>
                        ))}
                    </div>
                </div>
    
                
                {/* DownLoad */}
                <div>
                    <DownloadButton src={currentImageUrl}></DownloadButton>
                </div>
            </div>
            </div>

            <IconWorld icons={sampleIconsData}/>
        </div>
        );
    
}


export default EditPage;