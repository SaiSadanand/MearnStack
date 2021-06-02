import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber,setNewNumber]=useState('')
    

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/><br/>
          number:<input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(p=>{return(
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