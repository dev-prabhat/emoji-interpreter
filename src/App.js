import React, { useState } from "react";
import "./styles.css";

var emoji = {
  "😕": "Confused Face",
  "😮": "Face with Open Mouth",
  "😨": "Fearful Face",
  "😢": "Crying Face",
  "😎": "Smiling Face with Sunglasses",
  "😴": "Sleeping Face"
};

var emojiArray = Object.keys(emoji);

export default function App() {
  const [meaning, setMeaning] = useState("");
  var inputData, Means;

  function emojiInterpreter(event) {
    inputData = event.target.value;
    Means = emoji[inputData];
    setMeaning(Means);
  }

  function handleClick(item) {
    inputData = item;
    Means = emoji[inputData];
    setMeaning(Means);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter </h1>
      <input onChange={emojiInterpreter}></input>
      <div className="meaning">{meaning}</div>
      <h2>emoji in the DB</h2>
      <ul>
        {emojiArray.map(function (item, index) {
          return (
            <li
              className="emoticon"
              key={index}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
