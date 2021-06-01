import React from 'react'
//import Note from './components/Note'


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }

  ]
  return(
    <div>
      {
        courses.map((c)=>{
          return(
            <Course key={c.id} course={c}/>
          )
        })
      }
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
  const c=content.map((con)=>{return (con.exercises)})
  const sum=c.reduce((accumilator,currentvalue)=>{return accumilator+currentvalue})
  return(
    <strong><p>total of {sum} exercises</p></strong>
  )
}

export default App;
