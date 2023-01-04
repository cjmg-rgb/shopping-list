const SearchItem = ({ search, setSearch }) => {
  return (  
    <form className="search-item">
      <input type="search"
        placeholder="Search Item"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
}
 
export default SearchItem;