import React, { Component } from 'react'
import './Coin.css'
export default class Coin extends Component {
    render() {
        return (
            <div>
                {!this.props.coinType ? <h3>Click Button Below</h3> : null}
                {this.props.coinType === 'heads' && <img src='https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg' alt='heads'></img> }
                {this.props.coinType === 'tails' && <img src='http://www.pcgscoinfacts.com/UserImages/71009269r.jpg' alt='tails'></img> }
            </div>
        )
    }
}
