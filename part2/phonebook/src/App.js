import { useState, useEffect } from 'react'
import axios from 'axios'
import NewPersonForm from './components/NewPersonForm.js'
import FilteredList from './components/FilteredList.js'
import NameFilter from './components/NameFilter.js'
import personService from './services/persons.js'

const Header = (props) => {
  const {title} = props;
  return <h2>{title}</h2>
}

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(persons.concat(response.data))
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const filteredPeople = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()

    const uniqueNames = new Set(persons.map(p => p.name))

    if (uniqueNames.has(newName)) { //name already exists in phonebook
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.filter(person => person.name === newName)
        const personToUpdate = person[0]
        const updatedPerson = {...personToUpdate, number: newNumber}
        personService
          .update(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== updatedPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
      }
    } else { //new name to add 
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
    
  }

  const deletePerson = (id) => {
    personService
      .removePerson(id)
    setPersons(persons.filter(person => person.id !== id))
  }

  return (
    <div>
      <Header title="Phonebook"/>
      <NameFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      <Header title="add a new"/>
      <NewPersonForm 
        newName={newName} 
        newNumber={newNumber} 
        addPerson={addPerson} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
      />
      <Header title="Numbers"/>
      <FilteredList filteredPeople={filteredPeople} deletePerson={deletePerson}/>
        
    </div>
  )
}

export default App