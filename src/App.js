import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import styled from 'styled-components';
import CoinHeader from './components/CoinHeader/CoinHeader';

const Div = styled.div`
    text-align: center;
    background-color: rgb(20 56 97);
    color: #cccccc;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 20000,
      showBalance: true,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          balance: 0,
          price: 20000.00
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          balance: 0,
          price: 600.00
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          balance: 0,
          price: 1.00
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          balance: 0,
          price: 0.22
        },
      ] 

    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleBalanceVisibilityChange = this.handleBalanceVisibilityChange.bind(this);  
  }
  handleBalanceVisibilityChange() {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }

    });
  }

  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( function( {ticker, name, price, balance} ) {
      let newPrice = price;
      if ( valueChangeTicker === ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        balance,
        price: newPrice
      }
    }); 

    this.setState({ coinData: newCoinData });
  }

  render () {
    return (
      <Div className="App">
        <CoinHeader />
        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance} 
          handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}  />
        <CoinList 
          coinData={this.state.coinData} 
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
  
}

export default App;
