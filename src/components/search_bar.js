import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props /*an argument*/) {
        super(props);   //
        this.state = {term:''}; //  Creating a new object and setting it to state
}

  render() {    // To find a function on a class, every class must have a render(){};\
      return (
          <div className="search-bar">
          <input
              value={this.state.term}
              onChange={event /*an argument*/ => this.onInputChange(event.target.value)}/>
              <br/>
              Value of the input: {this.state.term}
          </div>
      );
  }

  //    New Method
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;