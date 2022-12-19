import React from "react";
import EmojiRow from "./EmojiRow";

const EmojiResults = ({emojis, filtered}) => {
  return (
    <>
      {filtered.slice(0,20).map(item => {
        return (
          <div key={item.title}>
            <EmojiRow
              emojiName={item.title}
              symbol={item.symbol}
            />
          </div>
        )
      })}
    </>
  )
}

export default EmojiResults;