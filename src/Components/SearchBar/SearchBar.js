import React from 'react';
import './SearchBar.css';
import { H, Section } from 'react-headings';

//Creates a searchbar component that display
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.state.term !== null) {
      this.props.onSearch(this.state.term);
    }
    console.log(this.state.term);
  }

  //Searches the term when the user presses Enter key
  handleKeyPress(event) {
    if ((event.key === 'Enter') & (this.state.term !== null)) {
      this.props.onSearch(this.state.term);
    }
  }

  //Displays the term the user enters into the search field.
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <Section>
        <div className='SearchBar'>
          <H className='heading'>1. Search for Music</H>
          <input
            onKeyPress={this.handleKeyPress}
            onChange={this.handleTermChange}
            placeholder='Enter a Song, Album, or Artist'
          />
          <a onClick={this.handleSearch}>SEARCH</a>
        </div>
      </Section>
    );
  }
}

export default SearchBar;
