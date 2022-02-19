import React from 'react';
import './Track.css';
import { H, Section } from 'react-headings';

//Creates the track component and sets state.
class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  //Provides a + and - symbol for removing or adding tracks to the tracklist.
  renderAction() {
    if (this.props.isRemoval) {
      return (
        <a className='Track-action' onClick={this.removeTrack}>
          {' '}
          -{' '}
        </a>
      );
    } else {
      return (
        <a className='Track-action' onClick={this.addTrack}>
          {' '}
          +{' '}
        </a>
      );
    }
  }

  //Adds a track to the tracklist.
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  //Removes a track from the tracklist.
  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  //Renders the track component to the tracklist.
  render() {
    return (
      <Section>
        <div className='Track'>
          <div className='Track-information'>
            <H className='Track-heading'>{this.props.track.name}</H>
            <p>
              {this.props.track.artist} | {this.props.track.album}
            </p>
          </div>
          {this.renderAction()}
        </div>
      </Section>
    );
  }
}

export default Track;
