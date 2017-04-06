import React, { Component } from 'react';

class SearchBar extends Component {
  render() {    // To find a function on a class, every class must have a render(){};
      return <input onChange={this.onInputChange} />; // Create a new input and pass it a property on change.

  }

  onInputChange(event /*adding an argument, describes the context or information*/ ) {

  }

}

export default SearchBar;