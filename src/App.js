import React from 'react'
import Joke from './components/Joke'
import jokesData from './jokesData'

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke question={joke.question} answer={joke.answer}
        />
    })
    return (
        <div>
        {jokeElements}
        </div>
    )
}

/*
  <Joke 
            question="Why did the carrot cross the street?"
            answer="Because he was orange!"
           />
            <Joke 
            question="What do you call a fish without eyes?"
            answer="Fsh"
            />
            <Joke 
            question="Why did the scarecrow win an award?"
            answer="Because he was outstanding in his field."
            />
            <Joke 
             question="What lights up a soccer stadium?"
             answer="A soccer match."
            />
            <Joke
             question="Why shouldn’t you write with a broken pencil?"
             answer="Because it’s pointless."
            />
*/