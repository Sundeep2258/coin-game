import { Component } from "react";

import "./index.css";

const head_image = "https://assets.ccbp.in/frontend/react-js/heads-img.png";
const tail_image = "https://assets.ccbp.in/frontend/react-js/tails-img.png";

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    toss: head_image
  };

  onTossCoin = () => {
    const { headsCount, tailsCount } = this.state;
    const toss = Math.trunc(Math.random() * 2);
    let tossImage = "";
    let latestHeadsCount = headsCount;
    let latestTailsCount = tailsCount;

    if (toss === 0) {
      tossImage = head_image;
      latestHeadsCount += 1;
    } else {
      tossImage = tail_image;
      latestTailsCount += 1;
    }
    this.setState({
      toss: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount
    });
  };

  render() {
    const { headsCount, tailsCount, toss } = this.state;
    const total = headsCount + tailsCount;

    return (
      <div className="bg-gold">
        <div className="coin-bg">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="head-tail">Heads (or) Tails</p>

          <img src={toss} className="coin-image" alt="coinimg" />

          <button type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>

          <div className="scores">
            <p className="total">Total: {total}</p>
            <p className="total">Heads: {headsCount} </p>
            <p className="total">Tails: {tailsCount} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinToss;
