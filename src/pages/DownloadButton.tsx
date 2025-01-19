import React from "react";

// テスト用の画像URL
const sampleURL =
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg";
const sampleURL2 =
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-jmuLTnCHURAEXVY1VByta3oE/user-l4chAGXPSMWW0R0qnGlk3lmI/img-EoUFd7T6bI0AmtWgiEiNSDSg.png?st=2025-01-19T02%3A20%3A33Z&se=2025-01-19T04%3A20%3A33Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-18T12%3A28%3A52Z&ske=2025-01-19T12%3A28%3A52Z&sks=b&skv=2024-08-04&sig=A2wj93%2BvYS2ziE/yrFELLiff%2Bza4sf9wLweSw/98wJI%3D";
// FastAPIのサーバーから静的ファイルの提供を行うURL
const staticFileURL = "http://127.0.0.1:8000/static/uploads/sample.png";

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

    // gptで生成した署名付きurlを使ってダウンロードする
    // 動きません
    const downloadFile2 = async (src: string) => {
        const link = document.createElement("a");
        link.href = sampleURL2; //
        link.download = "downloaded-image.png"; // 保存時のファイル名
        link.click();
    };

    return (
        <button
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-full hover:bg-blue-600 active:scale-105 active:bg-blue-700 transition duration-100"
            onClick={() => downloadFile2(src)}>
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
