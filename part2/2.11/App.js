import React,{useState,useEffect} from 'react'
import axios from 'axios'

const App=()=>{
  const [persons,setPerons]=useState([])
  useEffect(()=>{
      axios
      .get('http://localhost:3001/persons')
      .then(response=>{setPerons(response.data)})
  },[])
  return(
    <div>

      <ul>
        <li><h2>{'name'}    {'number'}</h2></li>
        {
          persons.map(p=>{return (<li key={p.id}>{p.name}:{p.number}</li>)})
        }
      </ul>
      </div>

  )
}

export default App;