import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';
import { H, Section } from 'react-headings';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <Section>
        <H className='heading'>3. Name your playlist and save to Spotify</H>
        <div className='Playlist-container'>
          <div className='Playlist'>
            <div className='Playlist-start'>
              <input
                onChange={this.handleNameChange}
                placeholder='New Playlist'
              />
              <a onClick={this.props.onSave} className='Playlist-save'>
                SAVE TO SPOTIFY
              </a>
            </div>
            <TrackList
              tracks={this.props.playlistTracks}
              onRemove={this.props.onRemove}
              isRemoval={true}
            />
          </div>
        </div>
      </Section>
    );
  }
}

export default Playlist;
