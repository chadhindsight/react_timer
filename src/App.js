import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import './styles/app.scss';

class App extends Component {
  constructor() {
    super()
    // Set title in header
    this.state = {
      title: 'React Timer'
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.title}/>
        <div className="mt-5">
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
