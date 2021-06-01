import React from 'react'

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

  
export default Course;