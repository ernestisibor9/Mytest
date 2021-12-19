import React, {useState} from 'react'

function Obj() {
    const [person, setPerson] = useState({
        name:'Bode Thomas',
        age: '70',
        message: 'Welcome to the Land'
    })
    const changeMessage = ()=>{
        setPerson({...person, message: 'Good girl gone bad'})
    }
    return (
        <div>
            <h5>{person.name}</h5>
            <h5>{person.age}</h5>
            <h5>{person.message}</h5>
            <button className = 'btn' onClick = {changeMessage}>Change Message</button>
        </div>
    )
}

export default Obj
