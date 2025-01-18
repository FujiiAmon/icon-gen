import React, { useState } from "react";


type EditPageProps = {
    src: string,

}


const EditPage: React.FC<EditPageProps> = ({src}) => {
    
    const [imageUrl, setImageUrl] = useState<string>(src)

    const [currentImageUrl, setCurrentImageUrl] = useState<string>(src)
   
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
            <h2 className="text-xl font-semibold">Edit Image</h2>
            
            {/* Image Upload */}
            <div>
                <label htmlFor="imageUpload" className="block text-sm text-gray-700">Upload Image</label>
                <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={ () => {}}
                className="mt-2 p-2 border rounded-md"
                />
            </div>
    
            {/* Example Edit Controls */}
            <div className="space-y-4">
                {/* Brightness Control */}
                <div>
                <label htmlFor="brightness" className="block text-sm text-gray-700">Brightness</label>
                <input
                    type="range"
                    id="brightness"
                    min="0"
                    max="2"
                    step="0.1"
                    className="mt-2 w-full"
                />
                </div>
    
                {/* Contrast Control */}
                <div>
                <label htmlFor="contrast" className="block text-sm text-gray-700">Contrast</label>
                <input
                    type="range"
                    id="contrast"
                    min="0"
                    max="2"
                    step="0.1"
                    className="mt-2 w-full"
                />
                </div>
    
                {/* Rotate Control */}
                <div>
                <label htmlFor="rotate" className="block text-sm text-gray-700">Rotate</label>
                <input
                    type="range"
                    id="rotate"
                    min="-180"
                    max="180"
                    step="1"
                    className="mt-2 w-full"
                />
                </div>
    
                {/* Save Button */}
                <div>
                <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
                    Save Changes
                </button>
                </div>
            </div>
            </div>
        </div>
        );
    
}


export default EditPage;