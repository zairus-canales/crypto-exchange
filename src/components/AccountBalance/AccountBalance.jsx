import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    font-size: calc(10px + 2vmin);
    color: white;
    background-color: #3f3cdb;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
              ${this.props.amount}  
            </Section>
        );
    }
}






AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}