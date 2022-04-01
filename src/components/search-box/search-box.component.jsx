import { Component } from "react";

import './search-box.styles.css';

class SearchBox extends Component {
  render(){
    // const {searchField, onSearchChange} = this.props;
    // console.log(this.props);

    return (
      <input 
          type="search" 
          className={`search-box ${this.props.className}`}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
    )
  }
}

export default SearchBox;