import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {

  let [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count++);
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className="Counter">
        <span>Counter: {count}</span>
    </div>
  );
}

export default Counter;
