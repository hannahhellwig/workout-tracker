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
    // this.props.handleDateColor()
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

  // handleDateColor = () => {
  //   if (this.props.activityDate.situps == true) {
  //     console.log("hej")
  //     // button.style.backgroundColor = green
  //   } else {
  //     console.log("bye")
  //   }
  // }

  render() {
    return (
      <div>
        <form className="dailyExercises">
          <label>
            <img src="./images/situps.png" alt="strength" />
            <input type="checkbox" checked={this.props.activityDate.situps} value="2p" onChange={this.updateTwoPoints} />
            Situps 10 reps (2 p)
          </label>
          <label>
            <img src="./images/burpees.png" alt="burpees" />
            <input type="checkbox" checked={this.props.activityDate.burpees} value="3p" onChange={this.updateThreePoints} />
            Burpees 15 reps (3 p)
          </label>
          <label>
            <img src="./images/jogging.png" alt="jogging" />
            <input type="checkbox" checked={this.props.activityDate.jogging} value="5p" onChange={this.updateFivePoints} />
            Jogging 20 min (5 p)
          </label>
        </form>
      </div>
    )
  }

}

// checked={}
export default ExerciseForm
