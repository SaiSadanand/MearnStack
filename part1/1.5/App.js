import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  
  

  return (
    <div>
     <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
const Header=c=>{
  return(
    <h1>{c.course}</h1>
  )
}
const Content=(props)=>{
  const l=props.parts
  const L=l.map((p)=>{
    return(<p>{p.name} {p.exercises}</p>)
      }
    )
    return(<div>{L}</div>)
}
const Total=(props)=>{
  const l=props.parts
  let c=0
  for(const i of l){
    c+=i.exercises
  }
  return(
    <p>No:Of:Exercises:{c}</p>
  )
}

export default App


