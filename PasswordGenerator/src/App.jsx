import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [character, setCharacter] = useState(false);
  const [numbers, setNumbers] = useState(false);

  const passwordReference = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbers) str += "0123456789";
    if(character) str += "!@#$%^&*()_+";
    for(let i = 1 ; i <= length ; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);

  }, [length, setPassword, character, numbers])


  const copyPassword = useCallback(()=>{
    passwordReference.current?.select();
    passwordReference.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=>{passwordGenerator()}, [length,character,numbers,passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-700 bg-gray-800"> 
      <h1 className="text-white text-center my-3"> Password Generator</h1>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordReference} />
        <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0" onClick={copyPassword}> Copy </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
          <label> Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {numbers} id='numberInput' onChange={()=>{setNumbers((prev) => !prev)}} />
           <label> Numbers </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {character} id='characterInput' onChange={()=>{setCharacter((prev) => !prev)}} />
           <label> Character </label>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
