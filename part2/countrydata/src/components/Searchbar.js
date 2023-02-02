
const Searchbar = (props) => {
  const {text, searchInput, handleSearchInputChange} = props


  return (
    <div>
      {text} <input value={searchInput} onChange={handleSearchInputChange}/>
    </div>
  )
}

export default Searchbar