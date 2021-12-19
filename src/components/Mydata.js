import React, {useState} from 'react'
import {data} from './data'

function Mydata() {
    const [people, setPeople] = useState(data)
    //console.log(people)
    const removeItem = (id) =>{
        let newPeople = people.filter((person2)=>person2.id !== id)
        setPeople(newPeople)
    }
    return (
        <div>
            <h2>My Data is good</h2>
            {people.map((person)=>{
            const{id, title, body} = person
            return (
                <div key = {id} className = "item">
                    <h4>{id}</h4>
                    <h4>{title}</h4>
                    <h4>{body}</h4>
                    <button onClick = {()=> removeItem(id)}>Remove</button>
                    <button onClick ={()=>{
                        return removeItem(id)
                    }}>
                        REMOVE MAN
                    </button>
                </div>
            )
            })}
            <button className = 'btn' onClick ={()=>setPeople([])}>CLEAR ITEMS</button>
            <button className = 'btn' onClick = {()=>{
                return setPeople([])
            }}>CLEAR MAN</button>
        </div>
    )
}

export default Mydata
