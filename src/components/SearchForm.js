import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                {/* <label htmlFor="search"></label> */}
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    id="search"
                />
                {/* <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button> */}
                {/* <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="search"
        /> */}
            </div>
        </form>
    );
}

export default SearchForm;
