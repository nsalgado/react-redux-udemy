'use strict';

import React from "react"
import VideoItem from './video_list_item' 


export default class VideoList extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ul className="video-list">
        {this.props.videos.map((video) =>{
          return <VideoItem
            onClickItem={this.props.onClickItem} 
            key={video.id.videoId} 
            item={video}
          ></VideoItem>
        })}
      </ul>
    )
  }
}

