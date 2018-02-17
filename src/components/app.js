import React from "react";
import SearchBar from './search_bar'


export default class VideoApp extends React.Component {
  
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div> 
        <SearchBar></SearchBar>
      </div>
    )
  }
}