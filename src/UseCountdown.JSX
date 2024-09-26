
import { useState, useEffect, useRef } from 'react';

const UseCountdown = (initialCount) => {
    const [count, setCount] = useState(initialCount);
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isActive && count > 0) {
            timerRef.current = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
        } else if (count === 0) {
            clearInterval(timerRef.current);
            setIsActive(false);
        }

        return () => clearInterval(timerRef.current); 
    }, [isActive, count]);

    const start = () => setIsActive(true);
    const pause = () => setIsActive(false);
    const reset = () => {
        setCount(initialCount);
        setIsActive(false);
    };

    return { count, start, pause, reset, isActive };
};

export default UseCountdown;
