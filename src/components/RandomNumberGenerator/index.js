import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onButton = () => {
    const number = Math.random() * 100
    const rand = Math.ceil(number)
    this.setState({num: rand})
  }

  render() {
    const {num} = this.state
    return (
      <div className="cont">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onButton} className="button">
            Generate
          </button>
          <p className="para2">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
