import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3} />
      <Total E={exercises1+exercises2+exercises3}/>
    </div>  )
}

const Header=course=>{
  return(
    <div>
      <h1>{course.course}</h1>
    </div>
  );
}
const Content=details=>{
  return(
    <div>
      
        <Part P={details.p1} E={details.e1}/>
     
      
        <Part P={details.p2} E={details.e2}/>
      
     
        <Part P={details.p3} E={details.e3}/>
      
    </div>
  )
}
const Part=prop=>{
  return(
    <p>{prop.P} {prop.E}</p>
  )
}

const Total=total=>{
  return(
    <div>
      <p>No:Of:Exercises:{total.E}</p>
    </div>
  )
}

export default App