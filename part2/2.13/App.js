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
  const show=(c_name)=>{
    //console.log(c_name)
    setCountries(countries.filter(c=>(c.name.toLowerCase()===c_name.toLowerCase())))
    
  }
  return(
    <div>
      <div><input onChange={handleSearch}/></div>
      
        
        {
          countries.length>10?
          'Too Many Matches,specify another filter'
          : countries.length===1?
                                  <Country key={countries[0].name}country={countries[0]}/>
                                  :<ul>{countries.map(p=>{return (<li key={p.name}>{p.name}<Button con={p} fun={show}/></li>)})}</ul>
        }

      </div>

  )
}
const Button=({con,fun,key})=>{
  
  return(
    <button onClick={()=>{fun(con.name)}}>show</button>
  )
}

const Country=({country})=>{
  
  //const c=country
  
  
  //console.log(country)
  return(
      <div>
      <h2>{country.name}</h2>
      <div>
        capital:{country.capital}<br/>
        population:{country.population}
      </div>
      <img src={country.flag} width="96" height="65"/>
      <h3>Languages</h3>
      <ul>
        {
          country.languages.map(l=>{return(
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