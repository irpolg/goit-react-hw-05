

export const SearchForm = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const value = event.target.elements.search.value.trim();
        console.log("value >>", value);
        onSubmit(value);
    }
    return (
      
        <form onSubmit={handleSubmit}>
          <input name="search" type="text" placeholder='search movie' />
          <button type="submit" >Submit</button>
        </form>
  )
}
