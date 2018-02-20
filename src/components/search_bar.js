import React from 'react';


export default class SearchBar extends React.Component {
    
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      'searchText': ''
    }
  }

  handleInputChange (event) {
    let text = event.target.value;
    this.setState(() => { return { 'searchText': text }});
    this.props.searchMethod(this.state.searchText);
  }

  render () {
    return (
      <div className="seach-block">
        <input 
          className="seach-block--input" 
          type="text" 
          onChange={this.handleInputChange} 
          placeholder="Search"
        />
      </div>
    )
  }
}