import { Component } from "react";

import './card-list.styles.css';

import Card from '../card/card.component';

class CardList extends Component {
    
    render(){
      // destructuring monsterS/userS
      const { monsters } = this.props;

      return (

        <div className="card-list"> 
          { /* looping/mapping over monsters array */}       
          {monsters.map(monster => {
            return (
              // ..and creating a card component for each
              <Card monster={monster} />
            )
          })} 

        </div>
      );
    }
}

export default CardList;