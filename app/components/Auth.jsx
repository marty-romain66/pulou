import React, { useContext, useState } from 'react';
import { MyContext } from './Mycontext';


export default function Auth() {
    const { data, setData } = useContext(MyContext);
    const [getValue , setGetValue] = useState("")
 

  return (
    <div className='mt-16 h-[100vw] w-[screen] '>
        <input className=' m-auto text-black' type="text" onChange={(e) => setGetValue(e.target.value)} />
        <button onClick={() => setData(getValue)}>Click</button>
    </div>
 
  )
}
