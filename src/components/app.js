import _ from 'lodash'
import React from "react";
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoPlayer from './video_detail'

import API_KEY from '../../.env.local'
import YTSearch from 'youtube-api-search';

import '../styles/style.css'


export default class VideoApp extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      video: null
    }

    this.handleSeachTerm('snowboard');
    this.handleSeachTerm = this.handleSeachTerm.bind(this);
    this.handleVideoSelect = this.handleVideoSelect.bind(this);

  }

  handleSeachTerm (seachTerm) {
    YTSearch({ key: API_KEY, term: seachTerm }, (data) => {
      let selectedVideo = data[0] || null;
      console.log('selected: ' + selectedVideo)
      this.setState(() => { 
        return {
          'videos': data,
          'video': selectedVideo
        }});
    });
  }

  handleVideoSelect (video) {
    this.setState(() => {return {'video': video}});
  }

  render () {

    const videoSearchMethod = _.debounce((term) => {this.handleSeachTerm(term)}, 300);

    return (
      <div className="video-player-container"> 
        <SearchBar searchMethod={videoSearchMethod}></SearchBar>
        <section className="video-player-manager">
          <div className="mini-video-player">
            <VideoPlayer video={this.state.video}></VideoPlayer>
          </div>
          <div className="list-videos">
            <VideoList 
              onClickItem={this.handleVideoSelect}
              videos={this.state.videos}
            ></VideoList>
          </div>
        </section>
      </div>
    )
  }
}