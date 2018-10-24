import React from "react"
import Calendar from "react-calendar"
import ExerciseForm from "./exerciseForm"

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    if (localStorage.getItem("userScore", "userDates")) {
      this.state = {
        date: new Date(),
        score: JSON.parse(localStorage.getItem("userScore")),
        dateIsClicked: false,
        dates: {}
      }
    } else {
      this.state = {
        date: new Date(),
        dateIsClicked: false,
        score: 0,
        dates: {}
      }
    }
  }

  onChange = date => {
    const { dates } = this.state
    const timestamp = date.getTime()
    const currentScore = this.state.score
    if (!dates[timestamp]) {
      dates[timestamp] = { situps: false, burpees: false, jogging: false }
      localStorage.setItem("userDates", JSON.stringify(currentScore))
      this.setState({
        date: date.getTime(),
        dateIsClicked: true,
        dates
      })
    }
  }

  increaseScore = amount => {
    const currentScore = this.state.score
    localStorage.setItem("userScore", JSON.stringify(currentScore))
    this.setState({ score: this.state.score + amount })
    this.setState({ show: !this.state.show })
  }

  updateActivity = (activity, date, value) => {
    const currentScore = this.state.score
    const { dates } = this.state
    dates[date][activity] = value
    localStorage.setItem("userScore", JSON.stringify(currentScore))
    this.setState({ dates })
  }

  render() {
    return (
      <div>
        <div className="profileInfoHeader underline">
          <h1>Your profile</h1>
          <img src="./images/user-image.jpeg" alt="user" />
        </div>
        <div className="profileInfo">
          <h2> Name: Namn Namnson</h2>
          <h2>Team name: team</h2>
          <h2 className="points">Points: {this.state.score}</h2>
        </div>
        <Calendar
          onClickDay={this.onChange} />

        {this.state.dateIsClicked &&
          <ExerciseForm
            activityDate={this.state.dates[this.state.date]}
            date={this.state.date}
            updateActivity={this.updateActivity}
            onScoreChange={this.increaseScore} />}
      </div>
    )
  }

}

export default ProfilePage
