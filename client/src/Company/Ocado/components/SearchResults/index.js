import React, {Component} from 'react';

export default class SearchResults extends Component{
  render(){
    const {results} = this.props;
    const renderList = results.map((result, i) =>
      <li key={i}>
        <h1>{result.term}</h1>
        <p id="descriptiom">{result.meaning}</p>
        <span id="tag-title">Commonly used in: </span>
        <span id="tag">{result.tag}</span>
      </li>
    )
    return (
      <div id="result">
        <ul id="result-list">{renderList}</ul>
      </div>
    )
  }
}
