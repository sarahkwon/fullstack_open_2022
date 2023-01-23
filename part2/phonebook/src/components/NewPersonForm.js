
const NewPersonForm = (props) => {
	const {persons, setPersons, newName, setNewName, newNumber, setNewNumber} = props
	const addPerson = (event) => {
		event.preventDefault()
		const personObject = {
				name: newName,
				number: newNumber
		}

		const uniqueNames = new Set(persons.map(p => p.name))

		if (uniqueNames.has(newName)) {
			alert(`${newName} is already added to phonebook`)
		} else {
			setPersons(persons.concat(personObject))
			setNewName('')
			setNewNumber('')
		}
	}

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <form onSubmit={addPerson}>
        <div>
            name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
  )
}

export default NewPersonForm