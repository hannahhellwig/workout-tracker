import React from "react"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// const SvenskaSpelApi ="https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=stockholm&numResponses=20"

class ExerciseForm extends React.Component {

  state = {
    count: 0
  }

  addTwoPoints = () => {
    this.setState({
      count: this.state.count + 2
    })
  }

  addFivePoints = () => {
    this.setState({
      count: this.state.count + 5
    })
  }

  addThreePoints = () => {
    this.setState({
      count: this.state.count + 3
    })
  }

  // Varför uppdateras inte statet: count? Vi testade att göra knapp
  // nedan, men detta fungerade inte heller.

  render() {
    return (
      <div>
        <button onClick={this.addTwoPoints} >Count number</button>
        <form>
          <label>
            10 Situps (2 p)
            <input type="checkbox" value="2p" onChange={this.addTwoPoints} />
          </label>
          <label>
            15 Burpees (3 p)
            <input type="checkbox" value="3p" onChange={this.addThreePoints} />
          </label>
          <label>
            20 min jogging (5 p)
            <input type="checkbox" value="5p" onChange={this.addFivePoints} />
          </label>
        </form>
      </div>
    )
  }

}

export default ExerciseForm
