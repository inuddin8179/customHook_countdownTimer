
import React from 'react';
import UseCountdown from './UseCountdown';

const CountdownTimer = () => {
    const { count, start, pause, reset, isActive } = UseCountdown(20);
    return (
        <div>
            <h1>Countdown: {count} seconds</h1>
            <br />
            <button onClick={start} disabled={isActive}>Start</button>
            <button onClick={pause} disabled={!isActive}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CountdownTimer;
