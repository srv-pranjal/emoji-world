import "./App.css";
import { useState } from "react";
import emojiDictionary from "./emoji.js";
import EmojiList from "./emojiList";
const emojisWeKnow = Object.keys(emojiDictionary).slice(0, 12);


export default function App() {
  const defaultMessage = "Emoji Meaning will appear Here";
  const [meaning, setMeaning] = useState(defaultMessage);
  function getMeaning(inputValue) {
    if (inputValue === "") return defaultMessage;
    else if (inputValue in emojiDictionary) return emojiDictionary[inputValue];
    else return "Sorry! This emoticon is not present in our DATABASE";
  }

  function inputHandler(event) {
    setMeaning(getMeaning(event.target.value));
  }

  function emojiClickHandler(inputValue) {
    setMeaning(getMeaning(inputValue));

  }
  return (
    <div className="App">
      <h1>Know Your Emoticons</h1>
      <input onChange={inputHandler} placeholder="Paste your emoji here"/>
      <div>
        <h3>{meaning}</h3>
      </div>
      <EmojiList emojisWeKnow={emojisWeKnow} emojiClickHandler={emojiClickHandler} />
      <p>You can also TAP on the emojis above to see the meaning</p>
    </div>
  );
}
