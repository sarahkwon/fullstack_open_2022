const NameFilter = (props) => {
  const {filter, setFilter} = props

  const handleFilterChange = (event) => setFilter(event.target.value)

  return (
    <div>
      filter shown with: <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}

export default NameFilter