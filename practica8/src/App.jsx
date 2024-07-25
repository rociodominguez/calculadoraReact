import './App.css'
import React from 'react';
import useTimer from './customHooks/Hook';
import Timer from './components/Timer/Timer';
import Calculator from './components/Calculator/Calculator';

const App = () => {
    const currentTime = useTimer();

    return (
        <div>
            <h1>Práctica 8</h1>
            <p>Para Rock the Code 🚀</p>
            <Timer time={currentTime} />
            <Calculator />
        </div>
    );
};

export default App;
