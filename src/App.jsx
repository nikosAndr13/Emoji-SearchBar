import './App.css'
import emojis from "../src/emojis.json";
import EmojiResults from './EmojiResults';
import SearchInput from './SearchInput';
import React from 'react';

class App extends React.Component {
  state = {
    searchValue: '',
    filtered: emojis,
  }

  trackState = (name, value) => {
    this.setState({[name]: value})
  }

  filterEmoji = () => {
    const {searchValue} = this.state;
    const filtered = emojis.filter(emoji => {
      return emoji.title.includes(searchValue)
    })
    this.setState(prevState => ({emojis: prevState.emojis, filtered}))
  }


  render() {
    const {searchValue, emojis, filtered} = this.state;
  return (
    <div className="App" style={{display: 'flex', flexDirection:'column', gap:'14px'}}>
      <header style={{textAlign: 'center'}}>Emoji Search</header>
      <SearchInput
        trackState={this.trackState}
        filterResults={this.filterEmoji}
        value={searchValue}
        name={'searchValue'}
      />
      <EmojiResults
        emojis={emojis}
        filtered={filtered}
      />
    </div>
  )
 }
}

export default App;
