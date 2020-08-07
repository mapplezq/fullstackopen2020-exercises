import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const DisplayItem = ({text, count}) => {
  return (
    <div>
      <label>{text}</label> <label>{count}</label>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newGood => {
    setGood(newGood)
  }

  const setToNeutral= newNeutral => {
    setNeutral(newNeutral)
  }

  const setToBad = newBad => {
    setBad(newBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good"/>
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <DisplayItem text="good" count={good}/>
      <DisplayItem text="neutral" count={neutral}/>
      <DisplayItem text="bad" count={bad}/>
      <DisplayItem text="all" count={good+neutral+bad}/>
      <DisplayItem text="average" count={ (good+neutral+bad)===0?0:(good*1+neutral*0+bad*(-1))/(good+neutral+bad)}/>
      <DisplayItem text="positive" count={(good+neutral+bad)===0?0+' %':(good/(good+neutral+bad)*100) +' %'}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))

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
