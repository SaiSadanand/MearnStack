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
        <button onClick={Good}>good</button>&nbsp;<button onClick={Neutral}>neutral</button>&nbsp;<button onClick={Bad}>bad</button>
      </p>
      <h2>Staistics</h2>

      
        <Statistics g={good} n={neutral} b={bad}/>
     
    </div>
  )
}

const Statistics=(props)=>{
  if(props.g===0 && props.n===0 && props.b===0)
      return(<h3>No feedback given</h3>);
  
  return(<div>
    <p>good:{props.g}<br/>
    neutral:{props.n}<br/>
    bad:{props.b}<br/>
    all:{props.g+props.b+props.n}<br/>
    average:{(props.g-props.b)/(props.g+props.b+props.n)}<br/>
    positive:{(props.g)*100/(props.g+props.b+props.n)}</p>
    </div>
  )
}

export default App