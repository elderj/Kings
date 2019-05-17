import React, { Fragment } from "react";
import { rules } from "../datautils/data";
import "../styles/App.scss";

const IMAGES = {
  AClubs: require("../images/cards/Ac.jpg"),
  ADiamonds: require("../images/cards/Ad.jpg"),
  AHearts: require("../images/cards/Ah.jpg"),
  ASpades: require("../images/cards/As.jpg"),

  twoClubs: require("../images/cards/2c.jpg"),
  twoDiamonds: require("../images/cards/2d.jpg"),
  twoHearts: require("../images/cards/2h.jpg"),
  twoSpades: require("../images/cards/2s.jpg"),

  threeClubs: require("../images/cards/3c.jpg"),
  threeDiamonds: require("../images/cards/3d.jpg"),
  threeHearts: require("../images/cards/3h.jpg"),
  threeSpades: require("../images/cards/3s.jpg"),

  fourClubs: require("../images/cards/4c.jpg"),
  fourDiamonds: require("../images/cards/4d.jpg"),
  fourHearts: require("../images/cards/4h.jpg"),
  fourSpades: require("../images/cards/4s.jpg"),

  fiveClubs: require("../images/cards/5c.jpg"),
  fiveDiamonds: require("../images/cards/5d.jpg"),
  fiveHearts: require("../images/cards/5h.jpg"),
  fiveSpades: require("../images/cards/5s.jpg"),

  sixClubs: require("../images/cards/6c.jpg"),
  sixDiamonds: require("../images/cards/6d.jpg"),
  sixHearts: require("../images/cards/6h.jpg"),
  sixSpades: require("../images/cards/6s.jpg"),

  sevenClubs: require("../images/cards/7c.jpg"),
  sevenDiamonds: require("../images/cards/7d.jpg"),
  sevenHearts: require("../images/cards/7h.jpg"),
  sevenSpades: require("../images/cards/7s.jpg"),

  eightClubs: require("../images/cards/8c.jpg"),
  eightDiamonds: require("../images/cards/8d.jpg"),
  eightHearts: require("../images/cards/8h.jpg"),
  eightSpades: require("../images/cards/8s.jpg"),

  nineClubs: require("../images/cards/9c.jpg"),
  nineDiamonds: require("../images/cards/9d.jpg"),
  nineHearts: require("../images/cards/9h.jpg"),
  nineSpades: require("../images/cards/9s.jpg"),

  tenClubs: require("../images/cards/10c.jpg"),
  tenDiamonds: require("../images/cards/10d.jpg"),
  tenHearts: require("../images/cards/10h.jpg"),
  tenSpades: require("../images/cards/10s.jpg"),

  jackClubs: require("../images/cards/Jc.jpg"),
  jackDiamonds: require("../images/cards/Jd.jpg"),
  jackHearts: require("../images/cards/Jh.jpg"),
  jackSpades: require("../images/cards/Js.jpg"),

  queenClubs: require("../images/cards/Qc.jpg"),
  queenDiamonds: require("../images/cards/Qd.jpg"),
  queenHearts: require("../images/cards/Qh.jpg"),
  queenSpades: require("../images/cards/Qs.jpg"),

  kingClubs: require("../images/cards/Kc.jpg"),
  kingDiamonds: require("../images/cards/Kd.jpg"),
  kingHearts: require("../images/cards/Kh.jpg"),
  kingSpades: require("../images/cards/Ks.jpg")
};
function getImage(value, suit) {
  let valueText;

  //Maybe generify this into a util if it needs to be used somewhere else
  switch (value) {
    case "2":
      valueText = "two";
      break;
    case "3":
      valueText = "three";
      break;
    case "4":
      valueText = "four";
      break;
    case "5":
      valueText = "five";
      break;
    case "6":
      valueText = "six";
      break;
    case "7":
      valueText = "seven";
      break;
    case "8":
      valueText = "eight";
      break;
    case "9":
      valueText = "nine";
      break;
    case "10":
      valueText = "ten";
      break;
    case "J":
      valueText = "jack";
      break;
    case "Q":
      valueText = "queen";
      break;
    case "K":
      valueText = "king";
      break;
    case "A":
      valueText = "A";
      break;
    default:
      valueText = "king";
  }

  return IMAGES[valueText + suit];
}

export const ModalContent = ({ title, value, suit }) => (
  <div
    className="modal-content"
    // style={{ height: 500 }
  >
    <h1 className="pacifio-text">
      {rules.find(rule => rule.id === value) &&
        rules.find(rule => rule.id === value).title}
    </h1>
    <img
      src={getImage(value, suit)}
      alt={`${value} of ${suit}`}
      style={{
        "border-radius": "2%",
        width: 100
      }}
    />
    <p className="quicksand-text">
      {rules.find(rule => rule.id === value) &&
        rules.find(rule => rule.id === value).rule}
    </p>
    <br />
  </div>
);
