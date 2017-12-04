import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { handleOnChange } = props;
  return (
    <div id="searchbar">
      <p id="searchbar-title">Ocadosaurus</p>
      <input id="searchbar-input" type="text" placeholder="Enter term here" onChange={handleOnChange} />
    </div>
  );
};

SearchBar.propTypes = {
  handleOnChange: PropTypes.function.isRequired,
};

export default SearchBar;
