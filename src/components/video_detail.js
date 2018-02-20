import React from 'react';

export default class VideoPlayer extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="video-player-container">
        { this.props.video &&
          <div className="video-player--video">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe 
                className="embed-responsive-item"
                src={this.props.video ? `https://www.youtube.com/embed/${this.props.video.id.videoId}` : null}
              ></iframe>
            </div>

            <div className="viedo-player-details">
              <span className="viedo-player-details--title">
                {this.props.video.snippet.title}
              </span>
              <span className="viedo-player-details--description">
                {this.props.video.snippet.description}
              </span>
            </div>
          </div>}
        {!this.props.video && <div><h3>Loading...</h3></div>}
      </div>
    )
  }
}