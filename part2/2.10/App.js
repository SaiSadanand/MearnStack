import React,{useState} from 'react'

const App = () => {
  
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber,setNewNumber]=useState('')
  const[result,setResult]=useState(persons)
    

  const handleNameChange=(event)=>{
      setNewName(event.target.value)
  }
  const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)
  }

  const addName=(event)=>{
    event.preventDefault()
    
    if(persons.some((person)=>{return person.name===newName})===true)
      {alert(`${newName} is already added to phoneBook`)}
     else{ 
        const person={
          name:newName,
          number:newNumber
        }
        setPersons(persons.concat(person))
        setResult(result.concat(person))
        setNewName('')
        setNewNumber('')
      } 
  }
  const handleSearch=(event)=>{

    setResult(persons.filter((person)=>{return person.name.toLowerCase().includes(event.target.value.toLowerCase())}))
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={handleSearch}/>
      <h3>Add a new person</h3>
      <PersonForm add={addName} name1={newName} name2={handleNameChange} num1={newNumber} num2={handleNumberChange}/>
      <h2>Numbers </h2>
      <Persons people={result}/>
    </div>
  )
}
const Filter=({search})=>{
  return(
    <h4>filter shown with <input onChange={search}/></h4>
  )
}

const PersonForm=({add,name1,name2,num1,num2})=>{
  return(
    <form onSubmit={add}>
        <div>
          
          name: <input value={name1} onChange={name2}/><br/>
          number:<input value={num1} onChange={num2}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons=({people})=>{
  return(
    <div>
        
        { 
          people.map(p=>{return(
            <h3 key={p.name}>{p.name} {p.number}</h3>
              )
            }
          )
        }
      </div>
  )
}

export default App