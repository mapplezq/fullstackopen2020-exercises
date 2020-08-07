import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearchName, setNewSearchName] = useState('')

  const handleSearchNameChange = (event) => {
    // event.preventDefault()

    setNewSearchName(event.target.value)
    // console.log(event.target.value);
    
    const copy = [...persons]
    const result = copy.filter(person => 
      person.name.includes(event.target.value)
    )
    console.log('result:', result);
    setPersons(result)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const copy = [...persons]
    const find = copy.filter(person => person.name === newName)
    if (find.length > 0) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = { name: newName, number: newNumber }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>   
      <div>
        filter shown with <input type="text" value={newSearchName} onChange={handleSearchNameChange} />
      </div>
      
      <h2>add a new</h2> 
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} 
          onChange={handleNameChange}/>
          <div>
            number: <input value={newNumber}
            onChange={handleNumberChange}/>
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </div>
  );
};

export default App;