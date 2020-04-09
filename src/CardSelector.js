import React from "react";

class CardSelector extends React.Component {
  cardOptions() {
    const cards = this.props.cards || [];
    return cards.map(card => {
      return (
        <option value={card.number} key={card.number}>
          {card.name}
        </option>
      );
    });
  }

  render() {
    return (
      <select
        onChange={event =>
          this.props.onCardChange(
            this.props.cards.find(card => card.number === event.target.value)
          )
        }
      >
        {this.cardOptions()}
      </select>
    );
  }
}

export default CardSelector;
