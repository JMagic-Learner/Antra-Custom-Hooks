import React, { useEffect } from 'react';
import {useCounter} from '../../customHooks/useCounter';

//let counterRef;
const CounterFn = (props) => {
    const ImportedFunctions = useCounter("title", 0, false, 1)
    
    // console.log("render CounterFn")
    // const [title, setTitle] = React.useState("CounterFn");
    // const [counter, setCounter] = React.useState(0);
    // const [isAlert, setIsAlert] = React.useState(false)
    // const counterRef = React.useRef(counter)
    // counterRef.current = counter;

    // console.log(counterRef);
    // const handleAdd = () => {
    //     setCounter(counter + 1)
    // }
    // const handleSub = () => {
    //     setCounter(counter - 1)
    // }

    // const hanldeAlert = () => {
    //     console.log("counter alert", counter)
    //     setTimeout(() => {
    //         alert(counterRef.current)
    //     }, 5000)
    // }

    // const hanldeAlertWayTwo = () => {
    //     setTimeout(() => {
    //         setIsAlert(true)
    //     }, 2000)
    // }

    // useEffect(() => {
    //     if (isAlert) {
    //         alert(counter)
    //         setIsAlert(false)
    //     }
    // }, [isAlert])

    return <ImportedFunctions/>
}



export default CounterFn;