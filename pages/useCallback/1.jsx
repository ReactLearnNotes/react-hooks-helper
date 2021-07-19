import React , {useState,useCallback} from 'react'
import Button from '@material-ui/core/Button';
export default function Index() {
    const [count,setCount] = useState(0)
    // const add = ()=>setCount(count+1)
    const add = useCallback(
        () => {
            setCount(count+1)
        },
        [count],
    )
    return (
        <div>
            <Button onClick={add}>{count}</Button>
        </div>
    )
}
