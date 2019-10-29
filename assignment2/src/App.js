import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    paragraphContent: 'Lorem ipsum dollard secticum.'
  }

  inputChangeHandler = (event) => {
    this.setState({
      paragraphContent: event.target.value
    });
  }

  charComponentClickHandler = (index) => {
    let paragraphContent = this.state.paragraphContent.split('');
    paragraphContent.splice(index, 1);

    this.setState({
      paragraphContent: paragraphContent.join('')
    });
  }

  render() {
    let characters = null;
    if(this.state.paragraphContent != null) {
      characters = this.state.paragraphContent.split('').map((c, index) => {
        return <CharComponent character={c} key={index} onClick={() => this.charComponentClickHandler(index)} />
      });
    }
    
    return (
      <div className="App">
        <input onChange={this.inputChangeHandler} value={this.state.paragraphContent}></input>
        <p>{this.state.paragraphContent.length}</p>
        <ValidationComponent input={this.state.paragraphContent} />
        {characters}
      </div>
    );
  }
}

export default App;
