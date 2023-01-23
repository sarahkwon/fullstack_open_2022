const Person = (props) => {
  const {personObject} = props
  return <div>{personObject.name} {personObject.number}</div>
}

const FilteredList = (props) => {
  const {filteredPeople} = props
  return (
    <div>
      {filteredPeople.map(person =>
        <Person key={person.name} personObject={person}/>
      )}
    </div>
  )
}

export default FilteredList