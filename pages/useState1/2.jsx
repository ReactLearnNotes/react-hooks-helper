
import { useState } from 'react'

function useStateHook(){
    const [count,setCount ] = useState(0)    
    const [name,setName] = useState('')
    const [info,setInfo] = useState({name:'' })
    return (
        <div>
            <p>{count} times</p>
            <button onClick={()=>setCount(count+1) }></button>
        </div>
    )
}

export default useStateHook