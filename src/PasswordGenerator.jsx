import { useState, useCallback } from "react";

function PasswordGenerator(){

    const [letters, setLetters] = useState(8)
    const [numbers, setNumbers] = useState(false)
    const [characters, setCharacters] = useState(false)
    const [pass, setPass] = useCallback(fn, [])

    return(
        <>
            <div className="w-max h-max">
                <input className="border-2 border-black" type="text"/> 
                <button className="bg-sky-500 hover:bg-sky-700 rounded-md w-20 h-8">Copy</button>
            </div>
        </>
    )
}

export default PasswordGenerator