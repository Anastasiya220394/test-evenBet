import React, { useEffect, useState } from 'react';

import './BtnStart.css';

type Props = {
    RightBlockRef: React.RefObject<HTMLElement>;
    circleRef: React.RefObject<HTMLElement>;
}

export const BtnStart: React.FC<Props> = ({ RightBlockRef, circleRef }) => {
    const [seconds, setSeconds] = useState(5);
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        if (seconds > 0 && timerActive) {
            setTimeout(setSeconds, 1000, seconds - 1);
        } else {
            setSeconds(5);
            setTimerActive(false);
        }
    }, [seconds, timerActive])

    const startAnimation = () => {
        if(circleRef && circleRef.current && RightBlockRef.current) {
            circleRef.current.style.visibility = 'visible';
            const circleRect = circleRef.current.getBoundingClientRect();
            const blockRightRect = RightBlockRef.current.getBoundingClientRect();
            const translateY = blockRightRect?.y - circleRect?.y;
            const translateX = blockRightRect?.x - circleRect?.x;
            circleRef.current.style.transform = `translateX(${translateX - 15}px) translateY(${translateY}px)`;
        }
    }

    useEffect(() => {
        if(circleRef && circleRef.current) {
            if(timerActive) {
                startAnimation();
                circleRef.current.style.transition = 'transform 2s ease-out';
            }
            else {
                circleRef.current.style.visibility = 'hidden';
                circleRef.current.style.transform = 'none';
                circleRef.current.style.transition = 'none';
            }
        } 
    }, [timerActive])

    return(
        <button 
        className="start-button" 
        onClick={() => setTimerActive(true)}
        disabled={timerActive}
        >
            {timerActive ? seconds : 'START'}
        </button>
    )
}
