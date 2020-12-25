import React, { Component } from 'react'

export default class Coin extends Component {
    render() {
        return (
            <tr className="coin">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>{this.props.price}</td>
          </tr>
        )
    }
}
