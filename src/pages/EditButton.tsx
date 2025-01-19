import React from "react";

// テスト用の画像URL
const sampleURL = "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg";
// FastAPIのサーバーから静的ファイルの提供を行うURL
const staticFileURL = "http://127.0.0.1:8000/static/uploads/sample.png";



type EditButtonProps = {
    src: string
    onClick?: () => void
}

// DownloadButton src={sampleURL}
const EditButton: React.FC<EditButtonProps> = ({src, onClick}) => {
  
    // const handleClick = () => {
    //     onclick();
    // }

    return (
      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-green-600 text-white rounded-full hover:bg-blue-600 active:scale-105 active:bg-blue-700 transition duration-100" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

        <span>Edit</span>
      </button>
    );
  };


export default EditButton;