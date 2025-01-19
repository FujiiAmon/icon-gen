import React from "react";

// テスト用の画像URL
const sampleURL =
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg";
// ファストAPIのサーバーから静的ファイルの提供を行うURL

const DownloadButton: React.FC = () => {
    const downloadFile = async () => {
        // const fileUrl = `http://127.0.0.1:8000/files/${filename}`;
        // const fileUrl = staticFileURL;
        const fileUrl = sampleURL;
        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch the file");
        }
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        console.log("downloadurl", downloadUrl);
        const anchor = document.createElement("a");
        anchor.href = downloadUrl;
        anchor.download = "sample.png";
        anchor.click();
    };

    return (
        <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 active:scale-105 active:bg-blue-700 transition duration-100"
            onClick={downloadFile}>
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
            {/* <span>Download</span> */}
        </button>
    );
};

export default DownloadButton;
