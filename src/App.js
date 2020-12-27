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
      <Div className="App">
        <CoinHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }
  
}

export default App;
