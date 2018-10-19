import React from "react"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// const SvenskaSpelApi ="https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=stockholm&numResponses=20"

class ExerciseForm extends React.Component {

  updateTwoPoints = event => {
    if (event.target.checked) {
      this.props.onScoreChange(2)
    } else {
      this.props.onScoreChange(-2)
    }
  }

  updateFivePoints = event => {
    if (event.target.checked) {
      this.props.onScoreChange(5)
    } else {
      this.props.onScoreChange(-5)
    }
  }

  updateThreePoints = event => {
    if (event.target.checked) {
      this.props.onScoreChange(3)
    } else {
      this.props.onScoreChange(-3)
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>
            10 Situps (2 p)
            <input type="checkbox" value="2p" onChange={this.updateTwoPoints} />
          </label>
          <label>
            15 Burpees (3 p)
            <input type="checkbox" value="3p" onChange={this.updateThreePoints} />
          </label>
          <label>
            20 min jogging (5 p)
            <input type="checkbox" value="5p" onChange={this.updateFivePoints} />
          </label>
        </form>
      </div>
    )
  }

}

export default ExerciseForm
