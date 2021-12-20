import React, {useState} from 'react'
import Love from './Love';

function Form() {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name, email)
    }
    if(name && email){
        console.log('they are true')
    }
    else{
        console.log('They are falsy')
    }
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <form onSubmit={handleSubmit}>
                <input type= 'text' name='name' value={name} placeholder='NAME' onChange={(e)=>setName(e.target.value)}/><br></br>
                <input type= 'email' name='name' value={email}  placeholder='EMAIL' onChange={(e)=>setEmail(e.target.value)}/><br></br>
                <button type='submit' className='btntwo'>SUBMIT</button>
            </form>
            <Love/>
        </div>
    )
}

export default Form
