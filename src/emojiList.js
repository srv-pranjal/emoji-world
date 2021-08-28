import React from "react";
import "./App.css";

export default function EmojiList({ emojisWeKnow, emojiClickHandler }) {
  return (
    <div className="emoji-container">
      {emojisWeKnow.map((item, index) => {
        return (
          <span key={index} onClick={() => emojiClickHandler(item)}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
