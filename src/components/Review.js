import React, {useState} from 'react'
import { FaChevronLeft, FaChevronRight, FaPeopleArrows, FaQuoteRight } from "react-icons/fa";
import reviews from './ourdata';

function Review() {
    const[index, setIndex] = useState(0)
    //console.log(reviews[0])
    console.log(reviews.length)
    const{id, name, job, image, text} = reviews[index]
    //console.log(index)

    const checkNumber = (number)=>{
        if(number > reviews.length - 1){
            return 0
        }
        if(number < 0){
            return reviews.length -1
        }
        return number
    }

    const randomPerson = ()=>{
        //console.log(Math.random())
        let randomNumber = Math.floor(Math.random() * reviews.length);
        setIndex(checkNumber(randomNumber))
        //console.log(randomNumber)

    }

    const nextPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index + 1
            return  checkNumber(newIndex);
        })
    }

    const prevPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index - 1
            return checkNumber(newIndex);
        })
    }

    return (
        <div>
            <h1>Our Review </h1>
            <img src ={image} alt = {name}/>
            <FaQuoteRight/>
            <h4>{name}</h4>
            <h5>{job}</h5>
            <p>{text}</p>
            <div>
                <button onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className='btnthree' onClick={randomPerson}>random me</button>
        </div>
    )
}

export default Review
