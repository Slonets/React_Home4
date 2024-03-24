import {useEffect, useState} from "react";
import "./style.css";
const Time=()=>
{

    const [currentTime,setcurrentTime]=useState(
        //теперішній час
        new Date().toLocaleTimeString()
    );

    const timerChange=()=>{
        //змінює дані кожну секунду
        setcurrentTime(new Date().toLocaleTimeString());
    }

    useEffect(()=>{

        //змінює час через кожну секунду
        setInterval(timerChange, 1000);
    })

    return(
        <>
            <div>
                <h2>Час, який змінюється - {currentTime}</h2>
            </div>
        </>
    )
}

export default Time;