import React from 'react'
import ReactDOM from 'react-dom'

export default function Joke(props) {
    return (
        <div className='space'>
        <p>{props.question}</p>
        <p>{props.answer}</p>
        <hr/>
        </div>
    )
}