import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const l=parts.map(p=>{
    return(<p>{p.name} {p.exercises}</p>)
  })
  let c=0
  for(const i of parts){
      c+=i.exercises
  }

  return (
    <div>
      <h1>{course}</h1>
      {l}
      <p>No:Of:Exercises:{c}</p>
    </div>
  )
}

export default App