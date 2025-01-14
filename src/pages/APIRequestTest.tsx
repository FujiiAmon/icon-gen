
// Frontend for receive text and generate by that text
// Test Component  
import React, { useState, useEffect } from 'react';

const sampleURL = "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjYxOTB8MHwxfHNlYXJjaHwxfHxnaXJsfGVufDB8fHx8MTczMDUzODExMXww&ixlib=rb-4.0.3&q=80&w=1080";

type GeneratePageProps = {
    
}

const APIRequestTest: React.FC<GeneratePageProps> = () => {
    const [responseHome, setResponseHome] = useState<string>('loading')
    const [responseImage, setResponseImage] = useState<string>('loading')

    // ReadHome
    const fetchDataHome = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
               
            })
            const data = await response.json();
            console.log(data)
            setResponseHome("message: " + data.message);

        }catch(error){
            console.error(error);
            setResponseHome("Failed to fetch data");
        }
    }

    const fetchDataImage = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/Image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"text": "Hello"})
            })

            const data = await response.json();
            console.log(data)
            setResponseImage("message: " + data.message + "\n" + "url: " + data.src);
           

        }catch(error){
            console.error(error);
            setResponseImage("Failed to fetch data");
     
        }
    }

    useEffect(() => {
        fetchDataHome();
        fetchDataImage();
    }, [])

    return (
        <div>
            <h1>APIRequest Test</h1>
            <p>{responseHome}</p>
            <p>{responseImage}</p>
            
          
        </div>
    )
}

export default APIRequestTest