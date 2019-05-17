import React from "react";
import { rules } from "../datautils/data";

function drawRuleList() {
  var ruleList = [];
  rules.forEach(rule =>
    ruleList.push(
      <tr>
        <td>
          <h3 className="pacifio-text">{rule.title}</h3>
        </td>
        <td>
          <p className="quicksand-text">{rule.rule}</p>
        </td>
      </tr>
    )
  );
  console.log("test");
  return ruleList;
}

const GameRules = () => (
  <div className="modal-content" style={{ height: 500, "overflow-y": "auto" }}>
    <h1 className="pacifio-text">How to play</h1>
    <hr />
    <table>{drawRuleList()}</table>
    <br />
  </div>
);

export default GameRules;
