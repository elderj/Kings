import React, { Component } from "react";
import logo from "../images/logo.png";
import Game from "./Game";
import GameRules from "./GameRules";
import Modal from "react-awesome-modal";

import "../styles/App.scss";
import "../styles/circle.scss";

const freshBeer = require("../images/crackOpenAColdOne.png");
const crackedBeer = require("../images/crackedOpenAColdOne.png");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      img1: freshBeer,
      img2: freshBeer
    };
  }

  openModal() {
    this.setState({ modalVisible: true });
  }
  closeModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <div className="App">
        <img src={logo} alt="Kings Logo" />
        <br />
        <Game />
        <div id="parent" className="quicksand-text">
          <div id="child">
            <div id="first" onClick={() => this.openModal()}>
              <img
                alt="Beer Can button"
                className="beerCanImage"
                src={this.state.img1}
                onMouseEnter={() => {
                  this.setState({
                    img1: crackedBeer
                  });
                }}
                onMouseOut={() => {
                  this.setState({
                    img1: freshBeer
                  });
                }}
              />
              <br />
              Rules
            </div>
          </div>
          <div id="child">
            <div id="first" onClick={() => window.location.reload()}>
              <img
                alt="Beer Can button"
                className="beerCanImage"
                src={this.state.img2}
                onMouseEnter={() => {
                  this.setState({
                    img2: crackedBeer
                  });
                }}
                onMouseOut={() => {
                  this.setState({
                    img2: freshBeer
                  });
                }}
              />
              <br />
              Reset
            </div>
          </div>
          <Modal
            visible={this.state.modalVisible}
            width="500"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <GameRules />
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
