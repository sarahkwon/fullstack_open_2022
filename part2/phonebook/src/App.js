import { useState } from 'react'
import NewPersonForm from './components/NewPersonForm.js'
import FilteredList from './components/FilteredList.js'
import NameFilter from './components/NameFilter.js'

const Header = (props) => {
  const {title} = props;

  return <h2>{title}</h2>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '(123) 456-7890' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const filteredPeople = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <Header title="Phonebook"/>
      <NameFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      <Header title="add a new"/>
      <NewPersonForm 
        persons={persons} 
        setPersons={setPersons} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber}
      />
      <Header title="Numbers"/>
      <FilteredList filteredPeople={filteredPeople}/>
        
    </div>
  )
}

export default App