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
    this.props.updateActivity("situps", this.props.date, event.target.checked)
  }

  updateFivePoints = event => {
    if (event.target.checked) {
      this.props.onScoreChange(5)
    } else {
      this.props.onScoreChange(-5)
    }
    this.props.updateActivity("jogging", this.props.date, event.target.checked)
  }

  updateThreePoints = event => {
    if (event.target.checked) {
      this.props.onScoreChange(3)
    } else {
      this.props.onScoreChange(-3)
    }
    this.props.updateActivity("burpees", this.props.date, event.target.checked)
  }

  render() {
    // updateChecked = event => {
    //   {this.props.activityDate}
    // }

    return (
      <div>
        <form className="dailyExercises">
          <label>
            <input type="checkbox" checked={this.updateChecked} value="2p" onChange={this.updateTwoPoints} />
            Situps 10 reps (2 p)
          </label>
          <label>
            <input type="checkbox" value="3p" onChange={this.updateThreePoints} />
            Burpees 15 reps (3 p)
          </label>
          <label>
            <input type="checkbox" value="5p" onChange={this.updateFivePoints} />
            Jogging 20 min (5 p)
          </label>
        </form>
      </div>
    )
  }

}

// checked={}
export default ExerciseForm
