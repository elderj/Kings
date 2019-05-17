import React, { Component, Fragment } from "react";

import CardBack from "../images/cards/redcardback.jpg";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { vis: true };
  }

  clickd = e => {
    this.props.selectCard(this.props.value, this.props.suit);
    this.setState({
      vis: false
    });
  };

  render() {
    return (
      <Fragment>
        <img
          id={this.props.id}
          src={CardBack}
          onClick={this.clickd}
          alt="Card back"
          style={{ display: this.state.vis ? "block" : "none" }}
        />
      </Fragment>
    );
  }
}

export default Card;
