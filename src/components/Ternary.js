import React, {useState} from 'react'

function Ternary() {
    const[text, setText] = useState(false)

    //const firstValue = text || 'Hello world';
    //const secondValue = text && 'Good Girl';
    return (
        <div>
            <h1>{text}</h1>
            <button className='btn' onClick={(()=>setText(true))}>Toggle Text</button>
            {text ? <h2>I LOVE YOU</h2> : <h2>I HATE YOU</h2>}
        </div> 
    )
}

export default Ternary
