import React,{useState,useEffect} from 'react'
import axios from 'axios'

const App=()=>{
  const [countries,setCountries]=useState([])
  useEffect(()=>{
      axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response=>{setCountries(response.data)})
  },[])
  const handleSearch=(event)=>{
    setCountries(countries.filter(c=>{return(c.name.toLowerCase().includes(event.target.value.toLowerCase()))}))
    
    
  }
  return(
    <div>
      <div><input onChange={handleSearch}/></div>
      
        
        {
          countries.length>10?'Too Many Matches,specify another filter':countries.length===1?<Country key={countries[0].name}country={countries}/>:<ul>{countries.map(p=>{return (<li key={p.name}>{p.name}</li>)})}</ul>
        }

      </div>

  )
}

const Country=({country})=>{
  
  const c=country[0]
  
  
  console.log(country)
  return(
      <div>
      <h2>{c.name}</h2>
      <div>
        capital:{c.capital}<br/>
        population:{c.population}
      </div>
      <img src={c.flag} width="96" height="65"/>
      <h3>Languages</h3>
      <ul>
        {
          c.languages.map(l=>{return(
            <li key={l.name}>{l.name}</li>
          )
          })
        }
      </ul>
      <div>

      </div>
      </div>
    
  )
}

export default App;