
const Person = (props) => {
  const {personObject, deletePerson} = props
  return (
    <div>
      {personObject.name} {personObject.number}
      <Button handleClick={() => deletePerson(personObject.id)} label='delete'/>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.label}</button>
  )
}

const FilteredList = (props) => {
  const {filteredPeople, deletePerson} = props

  return (
    <div>
      {filteredPeople.map(person =>
        <Person key={person.name} personObject={person} deletePerson={deletePerson}/>
      )}
    </div>
  )
}

export default FilteredList