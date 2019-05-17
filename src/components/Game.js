import React, { Component, Fragment } from "react";
import Card from "./Card";
import Modal from "react-awesome-modal";
import { ModalContent } from "./ModalContent";

import { selectRandomWithNoRepeats } from "../datautils/utils";
import { suits, values } from "../datautils/data";

import "../styles/circle.scss";
import "../styles/App.scss";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      value: "no value",
      suit: "no suit",
      cardsRemaining: 52
    };
    this.cards = [];
    suits.forEach(suit =>
      // prettier-ignore
      values.forEach(
        val => this.cards.push({value: val, suit: suit, idx: this.cards.length })
      )
    );
  }

  selectCard = (value, suit) => {
    this.setState({
      value: value,
      suit: suit,
      cardsRemaining: this.state.cardsRemaining - 1
    });
    this.openModal();
  };
  openModal() {
    this.setState({ modalVisible: true });
  }
  closeModal() {
    this.setState({ modalVisible: false });
  }

  drawCards = () => {
    let deck = [];
    var cardChooser = selectRandomWithNoRepeats(this.cards);
    for (let i = 0; i < 52; i++) {
      let card = cardChooser();
      deck.push(
        <li>
          <Card
            id={i}
            value={card.value}
            suit={card.suit}
            selectCard={this.selectCard}
          />
        </li>
      );
    }
    return deck;
  };

  render() {
    return (
      <Fragment>
        <h5 className="quicksand-text">
          {this.state.cardsRemaining} Cards Remaining
        </h5>
        <Modal
          visible={this.state.modalVisible}
          width="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <ModalContent
            title="test"
            value={this.state.value}
            suit={this.state.suit}
          />
        </Modal>
        {this.state.cardsRemaining !== 0 ? (
          <ul class="circle-container">
            {this.drawCards()}
            {/* Adds something in the middle */}
            {/* <li>
            <img src={beerCan} />
          </li> */}
          </ul>
        ) : (
          <h2
            onClick={() => window.location.reload()}
            className="pacifio-text gradient-text"
          >
            Play Again?
          </h2>
        )}
      </Fragment>
    );
  }
}

export default Game;
