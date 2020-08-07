import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [mostVoteSelected, setMostVoteSelected] = useState(0)
  // const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [votes, setVotes] = useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat))



  const handleClick = () => {
    const random = Math.floor(Math.random() * Math.floor(anecdotes.length))
    setSelected(random)
    // maxVoteSelected()
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    console.log('before votes', copy)
    copy[selected] += 1
    console.log('after votes', copy)
    setVotes(copy)
    console.log('now votes', votes)
    // setTimeout(maxVoteSelected, 5000)
    // maxVoteSelected()
  }

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    maxVoteSelected()
  });

  const maxVoteSelected = () => {
    let max = -1
    let maxIndex = 0
    const copy = [...votes]
    console.log(votes)
    copy.forEach((element, index) => {
      if (element > max) {
        max = element
        maxIndex = index
      } 
    })
    setMostVoteSelected(maxIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br></br>
      <label>has {votes[selected]} votes</label><br></br>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <label>{props.anecdotes[mostVoteSelected]}</label><br></br>
      <label>has {votes[mostVoteSelected]} votes</label>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
