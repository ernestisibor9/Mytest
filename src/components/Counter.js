import React, {useState} from 'react'

function Counter() {
    const [value, setValue] = useState(0)
    return (
        <div className = 'count'>
           <h1>{value}</h1>
            <button className = 'btn' onClick = {()=>setValue(value + 1)}>INCREASE</button>
            <button className = 'btntwo' onClick = {()=>setValue(value - 1)}>DECREASE</button>
            <button className = 'btnthree' onClick = {()=>setValue(0)}>RESET</button>
        </div>
    )
}

export default Counter
