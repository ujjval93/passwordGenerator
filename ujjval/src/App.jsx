import { useState, useCallback, useEffect, useRef } from 'react'

const Navbar = () => {
    const [length, setLength] = useState(8)
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);
    const [password, setPassword] = useState("")
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
        copyToClipboard();
    };

    const generatePassword = useCallback(() => {
        let pass = "";
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(number) chars += "0123456789";
        if(character) chars += "!@#$%^&*()_+";
        for(let i = 1; i <= length; i++) {
            let randomIndex = Math.floor(Math.random() * chars.length + 1);
            pass += chars.charAt(randomIndex);
        }
        setPassword(pass);

    }, [length, number, character, setPassword])
    //setPassword is added in dependency array because it is a state setter function which is used inside the 
    // callback function and it is recommended to add all the dependencies in the dependency array of useCallback
    // hook to avoid any unexpected behavior.


    const passwordRef = useRef(null); 

    const copyToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 101); 
        window.navigator.clipboard.writeText(password);
    }, [password]);


    useEffect(() => {
        generatePassword();
    }, [length, number, character, generatePassword])

  return (
    <div className='text-[#fffff0] bg-[#1a1a1a] flex items-center justify-center w-full min-h-screen p-6'>
      <div className='w-[40%] bg-[#6c6262] rounded-2xl p-10'>
        <h1 className='text-3xl w-full mb-4'>Password Generator</h1>

        <div className='flex items-center overflow-hidden rounded-lg mt-4'>
          <input
            type='text'
            value={password}
            className='w-full px-4 h-14 text-black bg-white outline-none'
            ref={passwordRef}
          />
          <button 
          onClick={handleButtonClick}
          className={`text-black px-6 h-14 ${buttonClicked ? "bg-blue-400" : "bg-green-500"}`}>Copy</button>
        </div>
        <input type='range' min={8} max={15} value={length} onChange={(e) => {setLength(e.target.value)}}
          className='mt-4 accent-green-500 cursor-pointer'
        />
        <label htmlFor='length' className='ml-2 text-sm'> Password Length: {length} </label>
        <input
          type='checkbox'
          defaultChecked={number}
          id='numberInput'
          onChange={()=>{
            setNumber((prev)=> !prev);
          }}
          className='accent-green-500 mt-4 ml-3'
        />
        <label htmlFor='numberInput' className='ml-1 text-sm'> Number </label>
        <input
          type='checkbox'
          defaultChecked={character}
          id='characterInput'
          onChange={()=>{
            setCharacter((prev)=> !prev);
          }}
          className='accent-green-500 mt-4 ml-3'
        />
        <label htmlFor='characterInput' className='ml-2 text-sm'>
          Character
        </label>
      </div>
    </div>
  )
}

export default Navbar