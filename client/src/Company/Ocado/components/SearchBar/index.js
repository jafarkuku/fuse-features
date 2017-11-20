import React, {Component} from 'react';

export default class SearchBar extends Component{
  render(){
    const {term, handleOnChange} = this.props;
    return (
      <div id="searchbar">
        <p id="searchbar-title">Ocadosaurus</p>
        <input id="searchbar-input" type="text" placeholder={"Enter term here"} onChange={handleOnChange} />
      </div>
    )
  }
}
