import React from 'react'
//import Note from './components/Note'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id:1,
    parts: [
      {
        id:1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id:2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id:3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id:4,
        name: 'redux',
        exercises: 11
      }
    ]
  }
  
  

  return (
    <div>
     <Course course={course}/>
    </div>
  )
}

const Course=({course})=>{
  return(
    <div>
      <Header name={course.name}/>
      <Content content={course.parts}/>
      <Total content={course.parts}/>
    </div>
  )
}

const Header=({name})=>{
  return(
    <h2>{name}</h2>
  )
}

const Content=({content})=>{
  return(
    <div>
      {
        content.map(con=>{return(
            <Part key={con.id} c_name={con.name} exe={con.exercises}/>)
          }
        )
      }
    </div>
  )
}

const Part=({c_name,exe})=>{
  return(
    <p>{c_name}  {exe}</p>
  )
}

const Total=({content})=>{
  let c=0
  for(const i of  content){
    c+=i.exercises
  }
  return(
    <strong><p>total of {c} exercises</p></strong>
  )
}

export default App;
