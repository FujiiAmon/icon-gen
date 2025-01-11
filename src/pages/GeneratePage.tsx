// Frontend for receive text and generate by that text
// Test Component  
import React, { useState, useEffect } from 'react';

const sampleURL = "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjYxOTB8MHwxfHNlYXJjaHwxfHxnaXJsfGVufDB8fHx8MTczMDUzODExMXww&ixlib=rb-4.0.3&q=80&w=1080";

type GeneratePageProps = {

}

const GeneratePages: React.FC<GeneratePageProps> = () => {
    const [text, setText] = useState<string>('')
    const [src, setSrc] = useState<string>(sampleURL)

    useEffect(() => {

    }, [])

    return (
        <div>
            <h1>Generate Page</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => {
                fetch('/api/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ text })
                })
                    .then(res => res.json())
                    .then(data => setSrc(data.src))
            }}>Generate</button>
            <img src={src} alt="Generated" />
        </div>
    )
}

export default GeneratePages