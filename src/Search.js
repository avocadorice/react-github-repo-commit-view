import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      searchText: ''
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name] : value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSearch(this.state.searchText);
  }

  render() {
    const { searchText } = this.state;

    return (
      <form onSubmit={this.onFormSubmit} className="rowC">
        <input
            type="text"
            name="searchText"
            value={searchText}
            placeholder="Search repositories by organization, e.g. Netflix"
            onChange={this.handleChange} />
        <button type="submit">
            Search
        </button>
      </form>
    );
  }
}

export default Search;
