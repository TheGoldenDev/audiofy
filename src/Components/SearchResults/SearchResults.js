import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js';
import { H, Section } from 'react-headings';

class SearchResults extends React.Component {
  render() {
    return (
      <Section>
        <H className='heading'>
          2. Use + or - to add or remove songs from your playlist
        </H>
        <Section>
          <div className='SearchResults-container'>
            <div className='SearchResults'>
              <H className='heading'>Results</H>
              <TrackList
                tracks={this.props.searchResults}
                onAdd={this.props.onAdd}
              />
            </div>
          </div>
        </Section>
      </Section>
    );
  }
}

export default SearchResults;
