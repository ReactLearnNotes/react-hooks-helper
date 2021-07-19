import React from 'react'
import {  Button } from "@material-ui/core";

function UserList(){

    const [users,setUsers] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const [error,setErr] = React.useState(null)
    const fetchUsers = async()=>{
        setLoading(true)
        try {
            const res = await fetch('https://reqres.in/api/users/')
            const json = await res.json()
            setUsers(json.data)
        } catch (error) {
            setErr(error)
        }
        setLoading(false)

    }

    return (
        <div>
            <Button onClick={fetchUsers}> { loading ? 'loading' :'fetch'} </Button>
            {
                error && <div> { String(error)} </div>
            }
            <ul>
                {
                    users && users.length >0 && users.map(it=>{
                        return <li key={it.id}>{it.first_name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default UserList