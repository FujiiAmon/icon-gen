

import React, { useEffect, useState } from 'react';

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
    

    return (
        <h1 className="relative w-[max-content] font-mono
        before:absolute before:inset-0 before:bg-white
        before:animate-typewriter
        ">{text}</h1>);
};


export default TypewriterText;