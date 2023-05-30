import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {
    count: 0,
  }

  onClickCounterment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onClickDecreasement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onClickCounterment}>
            Increase
          </button>
          <button className="button" onClick={this.onClickDecreasement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
