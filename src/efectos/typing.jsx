import React from 'react'
import { useState, useEffect } from 'react'


const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[currentIndex]);
            currentIndex++;
            if (currentIndex === text.length - 1) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <h1 className='text-gray-400 font-serif text-xl'>{displayedText}</h1>;
};

export default TypingEffect
