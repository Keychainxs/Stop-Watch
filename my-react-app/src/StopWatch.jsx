import React, {useState, useRef} from 'react'    
import './index.css'
function StopWatch() {

        const [presentState,setPresentState] = useState("Stopped");
        const [presentTimer,setPresentTimer] = useState(0);
        const intervalRef = useRef(null);



        function handleStart() {
            if (presentTimer === "Running")return; 
            setPresentState("Running");
            intervalRef.current = setInterval(()=>{
                setPresentTimer((presentTimer2)=>presentTimer2 + 50);
            }
            , 50);
        }
        function handleReset() {
            if (presentState === "Stoppped")return; 
            setPresentState("Stopped")
            setPresentTimer(0);
            clearInterval(intervalRef.current)
        }
        function handleStop() {
            if (presentState === "Stop")return; 
            setPresentState("Stop");
            clearInterval(intervalRef.current);
        }



        const sec = Math.floor(presentTimer / 1e3);
        const min = Math.floor(sec / 60);
        const hour = Math.floor(min / 60);
        const millis = (presentTimer % 1e3).toString().padStart(3, "0");
        const seconds = (sec % 60).toString().padStart(2, "0");
        const minutes = (min % 60).toString().padStart(2, "0");
        const hours = (hour % 24).toString().padStart(2, "0");


        return (
            <div>
                <h1 className='Stop-Watch'>Stop Watch</h1>
                    <div className = "timer-elements">
                        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>:<span>{millis}</span>:
                    </div>
                        <div className='button-elements'>
                            <button onClick = {handleStart}>Start</button>
                            <button onClick ={handleStop}>Stop</button>
                            <button onClick = {handleReset}>Reset</button>
                        </div>
            </div>
        )

 }

 export default StopWatch