// ファイルダウンロード用のボタン

import React from "react";

const DownloadButton: React.FC = () => {
    const sampleURL2 =
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-jmuLTnCHURAEXVY1VByta3oE/user-l4chAGXPSMWW0R0qnGlk3lmI/img-rqMCkO9JxbqJjk0YqgVJRVof.png?st=2025-01-13T23%3A44%3A55Z&se=2025-01-14T01%3A44%3A55Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-14T00%3A24%3A57Z&ske=2025-01-15T00%3A24%3A57Z&sks=b&skv=2024-08-04&sig=aplfyib/xrrjmT2SoBxna%2B6yDE2h6f8tVcqwY3J8s3Y%3D";

    const downloadFile = () => {
        // const url = window.URL.createObjectURL(sampleURL2);
        const anchor = document.createElement("a");
        anchor.href = sampleURL2;
        anchor.setAttribute("download", "sample.png");
        // document.body.appendChild(anchor);;

        anchor.click();
        // document.body.removeChild(anchor);
    };

    return (
        <button
            className="m-5 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 active:scale-105 active:bg-blue-700 transition duration-100"
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
            <span>Download</span>
        </button>
    );
};

export default DownloadButton;
