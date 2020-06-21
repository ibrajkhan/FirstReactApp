import React from 'react'
import './App.css'

function Tweet({name, message, like}){
    return (
        <div className = 'tweet'>
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{like}</h3>
        </div>
    );
}
export default Tweet
