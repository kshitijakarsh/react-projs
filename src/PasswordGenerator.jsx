import { useState, useCallback, useEffect } from "react";

function PasswordGenerator() {
  const [letters, setLetters] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [passw, setPassw] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      str += "0123456789";
    }
    if (characters) {
      str += "!@#$%^&*()";
    }
    for (let i = 1; i <= letters; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassw(pass);
  }, [letters, numbers, characters, setPassw]);

  useEffect(() => {
    generatePassword();
  }, [letters, numbers, characters, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={passw}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button
            // onClick={}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={letters}
              className="cursor-pointer"
              onChange={(e) => {
                setLetters(e.target.value);
              }}
            />
            <label>Length: {letters}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="numberInput"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characters}
              id="characterInput"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
