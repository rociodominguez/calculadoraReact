import React from 'react';

const Timer = ({ time }) => {
    return <div>{time.toLocaleTimeString()}</div>;
};

export default Timer;