import React, {useState} from 'react';
import IconScatter from './Scatter';

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

const ExplorePage: React.FC = () => {

    return (
        <div>
            {/* <Ranking /> */}
            <div>
            </div>

            {/* Scatter */} 
            <div>
                <IconScatter icons={sampleIconsData}/>
            </div>            
        </div>
    )

}

export default ExplorePage;