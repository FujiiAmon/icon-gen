import React from "react";

// テスト用の画像URL
const sampleURL =
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg";
// FastAPIのサーバーから静的ファイルの提供を行うURL
const staticFileURL = "http://127.0.0.1:8000/static/uploads/sample.png";

type DownloadButtonProps = {
    src: string;
};

// DownloadButton src={sampleURL}
const DownloadButton: React.FC<DownloadButtonProps> = ({ src }) => {
    const downloadFile = (url: string) => {
      const link = document.createElement("a");
      link.href = url;
      link.download = "a.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    return (
        <button
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-full hover:bg-blue-600 active:scale-105 active:bg-blue-700 transition duration-100"
            onClick={() => downloadFile(src)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
            </svg>
            <span>Download</span>
        </button>
    );
};

export default DownloadButton;
