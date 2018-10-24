import React from "react"
import Calendar from "react-calendar"
import ExerciseForm from "./exerciseForm"

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      score: localStorage.getItem("userScore") ? JSON.parse(localStorage.getItem("userScore")) : 0,
      dateIsClicked: false,
      dates: localStorage.getItem("userDates") ? JSON.parse(localStorage.getItem("userDates")) : {}
    // if (localStorage.getItem("userScore")) {
    //   this.state = {
    //     date: new Date(),
    //     score: JSON.parse(localStorage.getItem("userScore")),
    //     dateIsClicked: false,
    //     dates: {}
    //   }
    // } else {
    //   this.state = {
    //     date: new Date(),
    //     dateIsClicked: false,
    //     score: 0,
    //     dates: {}
    //   }
    }
  }

  onChange = date => {
    const { dates } = this.state
    const timestamp = date.getTime()
    const currentScore = this.state.score
    const currentDates = this.state.dates
    if (!dates[timestamp]) {
      dates[timestamp] = { situps: false, burpees: false, jogging: false }
      localStorage.setItem("userScore", JSON.stringify(currentScore))
      this.setState({
        date: date.getTime(),
        dateIsClicked: true,
        dates
      })
    } else {
      this.setState({
        date: date.getTime(),
        dateIsClicked: true
      })
    }
    localStorage.setItem("userDates", JSON.stringify(currentDates))
  }

  increaseScore = amount => {
    const currentScore = this.state.score
    localStorage.setItem("userScore", JSON.stringify(currentScore + amount))
    this.setState({ score: this.state.score + amount })
    this.setState({ show: !this.state.show })
  }

  updateActivity = (activity, date, value) => {
    const currentDates = this.state.dates
    const { dates } = this.state
    dates[date][activity] = value
    this.setState({ dates })
    localStorage.setItem("userDates", JSON.stringify(currentDates))
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
          onClickDay={date => this.onChange(date)} />

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
