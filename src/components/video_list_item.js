import React from 'react'

export default class VideoItem extends React.Component {
  
  constructor (props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    this.props.onClickItem(this.props.item);
  }

  render () {
    return (
      <li 
        className="video-list-item"
        onClick={this.handleItemClick}
      >
        <div className="video-list-item-preview">
          <img src={this.props.item.snippet.thumbnails.default.url} />
        </div>

        <div className="video-list-item-title">
          <span> {this.props.item.snippet.title}</span>
        </div>
      </li>
    )
  }
}