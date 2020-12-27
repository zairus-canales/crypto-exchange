import React from 'react';
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

export default function AccountBalance(props) {
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance'
    let content = null;
    if ( props.showBalance ) {
        content = <>Balance: ${props.amount}</>;
    }
    return (
        <Section>
            {content}
            <button onClick={props.handleBalanceVisibilityChange}>{buttonText}</button>  
        </Section>
    );
    
}






AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}