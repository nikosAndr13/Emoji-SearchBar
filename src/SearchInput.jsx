import React from "react";
import styles from "./EmojiRow.module.css";

const SearchInput = ({value, trackState, name, filterResults}) => {

const handleChange = ({target: {name,value}}) => {
  trackState(name, value)
}

  return (
      <>
        <input 
          type='text' 
          value={value} 
          name={name} 
          onChange={handleChange} 
          onKeyUp={filterResults}
          className={`${styles.SearchInput}`}
          />
      </>
  )
}

export default SearchInput;