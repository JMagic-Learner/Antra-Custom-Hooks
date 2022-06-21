import React from 'react'
import { useState, useEffect } from 'react';

export function useCounter(htmlValue, counterValue, alertState, increment) {

const [title, setTitle] = React.useState(htmlValue);
const [counter, setCounter] = React.useState(counterValue);
const [isAlert, setIsAlert] = React.useState(alertState);
const counterRef = React.useRef(counter)
counterRef.current = counter;

const handleAdd = () => {
    setCounter(counter + increment)
}
const handleSub = () => {
    setCounter(counter - increment)
}

const hanldeAlertWayTwo = () => {
    setTimeout(() => {
        setIsAlert(true)
    }, 2000)
}

useEffect(() => {
    if (isAlert) {
        alert(counter)
        setIsAlert(false)
    }
}, [isAlert])

return ()=><section>
<header>{title}:{counter}</header>
<button onClick={handleAdd} >+</button><button onClick={handleSub}>-</button>
{/* <button onClick={hanldeAlertWayTwo}>Alert after 5 s</button> */}
</section>;

}
