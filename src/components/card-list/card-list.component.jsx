import { Component } from "react";
import "./card-list.style.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log("render from CardList");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;

          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
