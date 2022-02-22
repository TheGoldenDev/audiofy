import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../Util/Spotify.js';
import { H, Section } from 'react-headings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: [],
      term: '',
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.searchSpotify = this.searchSpotify.bind(this);
  }

  //Adds tracks to the playlist array.
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!this.state.playlistTracks.includes(track)) {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  //Removes tracks from the playlist array.
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.includes(track)) {
      tracks.splice(tracks.indexOf(track), 1);
      this.setState({ playlistTracks: tracks });
    }
  }

  //Sets new playlist names.
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  //Takes the tracks from tracklist and saves them to a playlist.
  savePlaylist() {
    const trackUris = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris);
    this.setState({
      playlistName: 'New AudIOfy Playlist',
      playlistTracks: [],
      searchResults: [],
    });
  }

  //Uses search results from spotify object to update the state of search results list
  searchSpotify(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }

  render() {
    return (
      <div className='root-div'>
        <H className='App-heading'>
          Aud<span className='highlight'>IO</span>fy
        </H>

        <Section>
          <div className='App'>
            <H className='hero-heading'>
              Create Custom Spotify Playlists with AudIOfy
            </H>
            <SearchBar onSearch={this.searchSpotify} />
            <div className='container'>
              <div className='col'>
                <SearchResults
                  onAdd={this.addTrack}
                  searchResults={this.state.searchResults}
                />
              </div>

              <div className='col'>
                <Playlist
                  onNameChange={this.updatePlaylistName}
                  onRemove={this.removeTrack}
                  playlistName={this.state.playlistName}
                  playlistTracks={this.state.playlistTracks}
                  onSave={this.savePlaylist}
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
