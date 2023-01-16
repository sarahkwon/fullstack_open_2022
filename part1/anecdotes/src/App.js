import { useState } from 'react'

const Header = (props) => <h2>{props.text}</h2>


const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const TopAnecdote = (props) => {
  const {anecdotes, votes} = props
  const maxIndex = votes.indexOf(Math.max(...votes))
  console.log(maxIndex)

  if (votes[maxIndex] === 0) {
    return (
      <div>No votes yet</div>
    )
  }

  return (
    <div>
      <div>{anecdotes[maxIndex]}</div>
      <div>has {votes[maxIndex]} votes</div>
    </div>
  )


}

const Anecdote = (props) => {
  return <div>{props.anecdote}</div>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const displayNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteAnecdote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Anecdote anecdote={anecdotes[selected]}/>
      <Button handleClick={voteAnecdote} text="vote"/>
      <Button handleClick={displayNextAnecdote} text="next anecdote"/>

      <Header text="Anecdote with most votes"/>
      <TopAnecdote anecdotes={anecdotes} votes={votes}/>

      
      
    </div>
  )
}

export default App
