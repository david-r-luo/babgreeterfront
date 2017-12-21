import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {greeterContract, acct, balance, blockNum, hashrate, gasPrice} from './EthereumSetup'; 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting : "",
      address : acct,
      balance : balance,
      blocknum : blockNum,
      blockrate : hashrate
    }
  }

  componentWillMount() {
    var data = greeterContract.greet()
    this.setState({
      greeting: String(data)
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The Greeting is: {this.state.greeting}
        </p>
        <p>
          Your account is: {this.state.address}
        </p>
        <p>
          Your balance is: {this.state.balance}
        </p>
        <p>
          Latest block number: {this.state.blocknum}
        </p>
        <p>
          Block hashrate: {this.state.hashrate}
        </p>
        <p>
          Current gas price: {this.state.greeting}
        </p>

      </div>
    );
  }
}

export default App;
