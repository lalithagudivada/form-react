import React, { useState } from 'react';

const Incre = () => {
    const[count,setCount]=useState(0);
    const increment =()=>{
        setCount(prevcount=>prevcount+1)
    }
    const decrement =()=>{
        setCount(prevcount=>prevcount-1)
    }
    const increment5=()=>{
        for(let i=0;i<5;i++)
        {
            setCount(prevcount=>prevcount+1)
        }
    }
    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={increment5}>+5</button>
        </div>
    );
};

export default Incre;