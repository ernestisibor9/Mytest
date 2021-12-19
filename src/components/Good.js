import React, {useState} from 'react'
import '../styles/testing.css'

function Good() {
    const[text, setText] = useState('Random Title')
    const handleClick = ()=>{
        setText('NIGERIA')
        console.log(text)
    }
    return (
        <div  className = 'olu'>
            <div>
                <h1>{text}</h1>
                <button onClick = {handleClick}>CHANGE TEXT</button>
            </div>
            
        </div>
    )
}

export default Good
