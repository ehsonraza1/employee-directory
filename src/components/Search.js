function Search(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search for Employee:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary mt-3"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Search;
