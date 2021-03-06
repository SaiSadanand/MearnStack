import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
    

  const handleNameChange=(event)=>{
      setNewName(event.target.value)
  }

  const addName=(event)=>{
    event.preventDefault()
    const person={
      name:newName
    }
    setPersons(persons.concat(person))
    setNewName('')
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(p=>{return(
            <h3 key={p.name}>{p.name}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App