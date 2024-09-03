import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import './home.css'

export default function Home() {

    var [count, setCount] = useState(1);
    var [status, setStatus] = useState(1);

    const increment = () => {
        count++;
        setCount(count);

        if(count > 5){
            setStatus(0);
        }
    }

    const decrement = () => {
        if(count > 1){
            count--;
            setCount(count);
        }
    }


  return (
    <>
        { 
            (status) 
        ? 
            <Heading/> 
        : 
        <div>
            <img src={ viteLogo } />
        </div>
        }
        
        <p style={{ 'fontSize' : '24px', 'color' : 'blue' }}>Top Mentorship Programs in Tech, Marketing, & Data- Designed and Delivered by industry maestros.</p>
        
        <div>{ count }</div>
        <div>
            <button onClick={ increment }>Increment</button>
            <button onClick={ decrement }>Decrement</button>
        </div>
    </>
    
  )
}

function Heading(){
    return(
        <div className="color">
            <h1>Wscube Tech</h1>
        </div>
    )
}