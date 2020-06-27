import React, { Component } from 'react'
import Coin from './Coin'

export default class Flip extends Component {
    state = {
        coinType: undefined,
        totalFlips: 0,
        headsCount: 0,
        tailsCount: 0
    }

    flipTheCoin() {
        let coinStateArray = ['heads','tails']
        let newCoinType = coinStateArray[Math.floor(Math.random() * coinStateArray.length)]
        this.setState( st => ({
            coinType: newCoinType,
            totalFlips: st.totalFlips + 1,
            headsCount: newCoinType === 'heads' ? st.headsCount + 1 : st.headsCount,
            tailsCount: newCoinType === 'tails' ? st.tailsCount + 1 : st.tailsCount
        }))
    }
    render() {
        return (
            <div>
                <h1>Let's Flip a Coin</h1>
                <Coin coinType={this.state.coinType}></Coin>
                <button onClick={this.flipTheCoin.bind(this)}>Flip The Coin!</button>
                <h3>Out of {this.state.totalFlips} flips, there have been {this.state.headsCount} heads and {this.state.tailsCount} tails</h3>
            </div>
        )
    }
}
