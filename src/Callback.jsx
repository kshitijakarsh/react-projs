import { useState } from "react";

function Callback(){
    const [number, setNumber] = useState(1)

    const getItem = ()=>{
        return [number, number+1, number+2]
    }

    return (
        <div>
            <input 
            type="number" 
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
            />
            <List getItems={getItem}/>
        </div>
    )
}

export default Callback