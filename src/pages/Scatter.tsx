import React from "react";

type IconData = {
    url: string;
    x: number; // range: 0-1
    y: number; // range: 0-1
};

const IconScatter: React.FC<{ icons: IconData[] }> = ({ icons }) => {
    return (
        <div
            className="relative w-full h-[500px] bg-gray-900 border"
            style={{ position: "relative", overflow: "hidden" }} // 全体の座標系
        >
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                        left: `${icon.x * 100}%`, // x座標 (0-1)
                        top: `${icon.y * 100}%`, // y座標 (0-1)
                        
                    }}
                >
                    <img
                        src={icon.url}
                        alt={`icon-${index}`}
                        className="w-8 h-8 object-cover rounded-full shadow-md hover:scale-150 transition"
                    />
                </div>
            ))}
        </div>
    );
};

export default IconScatter;
