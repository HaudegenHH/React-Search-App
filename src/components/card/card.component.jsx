import { Component } from "react";

import './card.styles.css';

class Card extends Component {

  render(){
    // destructuring each monster/user
    // ..and returning a card-container jsx for each
    const { id, name, email } = this.props.monster;

    return (  
      <div className="card-container" key={id}>
        <img 
          src={`https://robohash.org/${id}?set=set2&size=180x180`} 
          alt={`monster ${name}`} 
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card;