import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => 
        this.setState(()=>{
          return {monsters: users}  
        })
      );
      /*,
      () => {
        // additional/optional callback that runs after setState finishes
        //console.log(this.state);  
      }))
      */
  }
  /* arrow fn here because .setState is a method of Component class (consider the this ctx!)
   
  plus: an Arrow function is bound to its surrounding lexical context by default (where it physically sits in the code)

  and: its considered best practices to use arrow functions for anonymous functions

  -> use of arrow functions as class method.. 
  -> arrow functions in classes are used when that fn is intended to be used as a callback (e.g. for an event listener)
  apart from the usage in frameworks like react:
  -> in terms of "Vanilla JS" it is considered bad practice
  -> because a method exists (ideally) on the prototype object of all the object instances
  */
  onSearchChange = (e) => {    
    let searchField = e.target.value.toLocaleLowerCase()                        
    this.setState(()=>{
      return {searchField};
    })    
  }

  render() {    
    // destructuring this.state & this (to get ref to state props and the method onSearchChange)
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <h1 className='app-title'>Search App</h1>
        <h2 className='app-subtitle'>(using the "jsonplaceholder" and "robohash" API)</h2>
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='Search user list..' 
          className='monsters-search-box'
        />
        { filteredMonsters.length && <CardList monsters={filteredMonsters} /> }
      </div>
    );
  }
}

export default App;
