
import { useState } from 'react'

function useStateHook(){
    const [count,setCount ] = useState(0)    

    return (
        <div>
            <p>{count} times</p>
            <button onClick={()=>setCount(count+1) }></button>
        </div>
    )
}

export default useStateHook