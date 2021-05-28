import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Good=()=>{setGood(good+1)}
  const Neutral=()=>{setNeutral(neutral+1)}
  const Bad=()=>{setBad(bad+1)}
  

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button fun={Good}val='good'/>&nbsp;<Button fun={Neutral}val='neutral'/>&nbsp;<Button fun={Bad} val='bad'/>
      </p>
      <h2>Staistics</h2>

      
        <Statistics g={good} n={neutral} b={bad}/>
     
    </div>
  )
}

const Button=(props)=>{return(
  <button onClick={props.fun}>{props.val}</button>)
}

const Statistics=(props)=>{
  if(props.g===0 && props.n===0 && props.b===0)
      return(<h3>No feedback given</h3>);
  
  return(<div>
    <Statistic c={props.g} text='good'/>
    <Statistic c={props.n} text='neutral'/>
    <Statistic c={props.b} text='bad'/>
    <Statistic c={props.g+props.b+props.n} text='all'/>
    <Statistic c={(props.g-props.b)/(props.g+props.b+props.n)} text='average'/>
    <Statistic c={(props.g)*100/(props.g+props.b+props.n)} text='positive'/>
    </div>
  )
}

const Statistic=(props)=>{
    return(
      <p>{props.text}:{props.c}</p>
    )
}

export default App