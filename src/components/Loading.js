import React, {useState, useEffect} from 'react'

const url = 'https://api.github.com/users'

function Loading() {
    const[loading, setLoading] = useState(true)
    const [user, setUser] = useState('default user')

    const getUsers = ()=>{

        fetch(url)
            .then((res)=>res.json())
            .then((user)=>{
                //console.log(user)
               const {login} = user[9];
               // console.log(login)
                setUser(login)
                setLoading(false)
            })
            .catch((error)=>console.log(error))


        //const response = await fetch (url);
        //const user = await response.json();
        //const {login} = user;
        //setUser(login)
        //console.log(login)
        //setLoading(false)
        //console.log(user)
    }


useEffect(()=>{
    getUsers()
}, [])

    if(loading){
        return <h2>Loading...</h2>
    }
  
        return <h2>{user}</h2>

}

export default Loading
