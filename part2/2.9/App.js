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
  const[result,setResult]=useState([])
    

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
      <h4>filter shown with<input onChange={handleSearch}/></h4>
      <form onSubmit={addName}>
        <div>
          <h2>add a new</h2>
          name: <input value={newName} onChange={handleNameChange}/><br/>
          number:<input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers </h2>
      <div>
        
        {
          result.map(p=>{return(
            <h3 key={p.name}>{p.name} {p.number}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App