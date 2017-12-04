import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '1550',
      result: [],
    };
  }

  componentDidMount() {
    axios.get('https://fusion-universal-assets-production.s3.amazonaws.com/file-host/92cd3e3f-dcc1-48d0-bca6-eefb1b6d01f0--3672403217049507807-732/597/ocadosaurus.json')
      .then((res) => {
        this.setState({
          result: res.data,
        });
        // eslint-disable-next-line no-console
        console.log(this.state);
      });
  }

  handleOnChange = (e) => {
    const query = e.target.value;
    this.setState({
      query,
    });
    this.termSearch(query);
  }

  termSearch(term) {
    axios.get('https://fusion-universal-assets-production.s3.amazonaws.com/file-host/92cd3e3f-dcc1-48d0-bca6-eefb1b6d01f0--3672403217049507807-732/597/ocadosaurus.json')
      .then((res) => {
        const result = res.data.filter(el =>
          el.term.toLowerCase().indexOf(term.toLowerCase()) >= 0);
        // eslint-disable-next-line no-console
        console.log(result);
        this.setState({ result });
      });
  }

  render() {
    return (
      this.state.result.length < 1 ?
        <div id="search-container">
          <SearchBar handleOnChange={e => this.handleOnChange(e)} />
          <div id="result">
            <p id="error-msg">Sorry we couldn&apos;t find any terms matching
              <span id="error-query"> {this.state.query} </span>
            </p>
          </div>
        </div> :
        <div id="search-container">
          <SearchBar handleOnChange={e => this.handleOnChange(e)} />
          <SearchResults results={this.state.result} />
        </div>
    );
  }
}
