import React from "react";

// テスト用の画像URL

type DownloadButtonProps = {
    src: string;
};

// DownloadButton src={sampleURL}
const DownloadButton: React.FC<DownloadButtonProps> = ({ src }) => {
    const downloadFile = async (src: string) => {
        console.log("download file url", src);
        try {
            const response = await fetch(src, {
                method: "GET", // リクエストのHTTPメソッド（省略時は'GET'）
                headers: {
                    "Content-Type": "application/json", // 必要に応じて設定
                    // 他のヘッダーを追加する場合はここに記述
                },
                mode: "cors", // 必要に応じてCORSモードを指定（通常は自動）
            });
            if (!response.ok) {
                throw new Error("Failed to fetch the file");
            }

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            console.log("downloadurl", downloadUrl);

            // aタグを使ってダウンロードする
            const anchor = document.createElement("a");
            anchor.href = downloadUrl;
            anchor.download = "icon.png";
            anchor.click();
        } catch (error) {
            console.log("Failed to downlaod file", error);
        }
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
