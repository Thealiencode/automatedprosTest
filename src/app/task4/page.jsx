"use client"
import { useState } from "react"
import "./page.css"

export default function page(){

    const [value, setValue ] = useState('');

    const findKeysWithHighestValue = (obj) => {
        const entries = Object.entries(obj);
        if (entries.length === 0) return [];
      
        const highestValue = Math.max(...entries.map(([key, value]) => value));

        if(highestValue > 1){
            const result  = entries
            .filter(([key, value]) => value === highestValue)
            .map(([key, value]) => key);

            if(result.length > 1){
                return `${result.join(',')}: ${highestValue}`
            } else {
                return result[0]
            }
        } else{
            return null
        }
       
      }
    
    const handleInputChange = (event) => {
        const input = event.target.value;
        const lettersCount = {};
        
        for(let i = 0;  i < input.length; i++ ){
            lettersCount[input[i]] = (lettersCount[input[i]] ?? 0) + 1;

        }
        console.log(findKeysWithHighestValue(lettersCount))
    }
    
    return (
        <div className="container">
            <input className="input" onChange={handleInputChange} placeholder="Enter text"  />
        </div>
        )
    }

