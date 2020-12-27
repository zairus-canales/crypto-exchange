import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 20000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 20000.00
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 600.00
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.00
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.22
        },
      ] 

    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="React logo" className="App-logo"/>
          <h1 className="App-title">
            Crypto Exchange
          </h1>
        </header>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </div>
    );
  }
  
}

export default App;
