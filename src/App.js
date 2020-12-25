import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo"/>
        <h1>
          Crypto Exchange
        </h1>
      </header>
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={20000.00}/>
          <Coin name="Ethereum" ticker="ETH" price={600.00}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
