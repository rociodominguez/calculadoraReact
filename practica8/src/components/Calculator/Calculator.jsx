import React, { useRef } from 'react';

const Calculator = () => {
    const inputRef = useRef(null);
    const [history, setHistory] = React.useState([]);
    const [currentOperation, setCurrentOperation] = React.useState(null);
    const [lastResult, setLastResult] = React.useState(null);

    const handleOperation = (operation) => {
        if (inputRef.current.value) {
            setCurrentOperation({ 
                operation: operation, 
                operand1: parseFloat(inputRef.current.value) 
            });
            inputRef.current.value = '';
        }
    };

    const calculateResult = () => {
        if (currentOperation && inputRef.current.value) {
            const operand2 = parseFloat(inputRef.current.value);
            let result;

            switch (currentOperation.operation) {
                case '+':
                    result = currentOperation.operand1 + operand2;
                    break;
                case '-':
                    result = currentOperation.operand1 - operand2;
                    break;
                case '*':
                    result = currentOperation.operand1 * operand2;
                    break;
                case '/':
                    result = currentOperation.operand1 / operand2;
                    break;
                default:
                    return;
            }

            inputRef.current.value = '';
            setLastResult(result);

            setHistory([...history, result].sort((a, b) => a - b));
            setCurrentOperation(null);
        }
    };

    return (
        <div>
            <input ref={inputRef} type="number" />
            <button onClick={() => handleOperation('+')}>+</button>
            <button onClick={() => handleOperation('-')}>-</button>
            <button onClick={() => handleOperation('*')}>*</button>
            <button onClick={() => handleOperation('/')}>/</button>
            <button onClick={calculateResult}>=</button>

            <div>
                <h3>Último Resultado: {lastResult}</h3>
                <h3>Historial:</h3>
                <ul>
                    {history.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Calculator;