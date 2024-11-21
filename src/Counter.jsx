// useEffect understanding

import { useEffect, useState } from "react";


function Counter(){
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log(`User updated count ${counter}`);
        return ()=>{
            console.log(`Counter useEffect return ${counter}`);
        }
    })

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Increase Count</button>
        </div>
    )
}

export default Counter