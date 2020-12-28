import React from 'react'
import logo from './cryptoExchangeLogo.png';
import styled from 'styled-components';

const Img = styled.img`
    height: 7.5rem;
    pointer-events: none;
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center center;
    justify-content: flex-start;
`;
  
const H1 = styled.h1`
    font-size: 4rem;
    line-height: 7.5rem;
    font-weight: bold;
    min-width: 100px;
    color: white;
`;

export default function CoinHeader() {
    return (
    <Header>
      <Img src={logo} alt="CryptoExchange logo" /> 
      <H1> 
        Crypto Exchange
      </H1>
    </Header>
    ) 
}
