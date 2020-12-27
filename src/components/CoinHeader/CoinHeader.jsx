import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Header = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Img = styled.img`
    height: 20vmin;
    pointer-events: none;
`;

const H1 = styled.h1`
    font-size: 4rem;
`;

export default class CoinHeader extends Component {
    render() {
        return (
        <Header>
          <Img src={logo} alt="React logo"/>
          <H1>
            Crypto Exchange
          </H1>
        </Header>
        )
    }
}
