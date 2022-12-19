import React from "react";
import styles from "./EmojiRow.module.css"

const EmojiRow = ({emojiName, symbol}) => {
  const copyToClickBoard = () => {
    navigator.clipboard.writeText(symbol)
  }

  return (
  <div className={`${styles.onHover}`} onClick={copyToClickBoard}>
    {emojiName}
    <span style={{paddingLeft:'10px'}}>{symbol}</span>
  </div>
  )
}

export default EmojiRow;