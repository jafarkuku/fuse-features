import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = (props) => {
  const { results } = props;
  const renderList = results.map(result => (
    <li key={result.id}>
      <h1>{result.term}</h1>
      <p id="descriptiom">{result.meaning}</p>
      <span id="tag-title">Commonly used in: </span>
      <span id="tag">{result.tag}</span>
    </li>
  ));

  return (
    <div id="result">
      <ul id="result-list">{renderList}</ul>
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchResults;
