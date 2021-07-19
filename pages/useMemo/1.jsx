import React ,{ useState,useEffect} from 'react'

export default function Index() {
    const [users,setUsers] = useState(null)
    const [searchKey,setSearchKey] = useState('')

    useEffect(()=>{
        const doFetch = async ()=>{
            const res = await fetch('https://reqres.in/api/users/')
            setUsers(await res.json())
        }
        doFetch()
    },[])
    let usersShow = null
    if(users){
        usersShow = users.data.filter((user)=>{
            user.first_name.includes(searchKey)
        })
    }
    return (
        <div>
            
        </div>
    )
}
