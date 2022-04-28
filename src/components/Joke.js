import React, {useState} from 'react'
import ReactDOM from 'react-dom'

export default function Joke(props) {
const [isShown, setIsShown] = useState(false)

function toggle() {
    setIsShown(prevShown => !prevShown)
}

    return (
        <div className='space'>
        {props.question && <h3>{props.question}</h3>}
        {isShown && <p>{props.answer}</p>}
        <button onClick={toggle}>{isShown ? 'Hide Punchline' : 'Show Punchline'}</button>
        <hr/>
        </div>
        
    )
}