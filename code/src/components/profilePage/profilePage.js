import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Calendar from "react-calendar"
import ExerciseForm from "./exerciseForm"
import BackNagivationButton from "./backNagivationButton"

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
    // const dates = this.state.dates
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

  handleDateActivity = ({ date }) => {
    const timestamp = date.getTime()
    let active = false
    const day = this.state.dates[timestamp]
    if (day) {
      active = (day.situps || day.burpees || day.jogging)
    }

    return active ? "exerciseDone" : null
  }

  render() {
    return (
      <div className="pageContainer">
        <div className="pageContent">
          <Link to="/"><BackNagivationButton /></Link>
          <header className="profileHeader">
            <h1>
            My
              <br />
            progress
            </h1>
            <img src="./images/user-image.jpeg" alt="user" />
          </header>
          <div className="profileInfo">
            <h2> Name: Hannah Nyberg</h2>
            <h2>Team name: Södermalms IK</h2>
            <h2 className="points">Points: {this.state.score}</h2>
          </div>
          <Calendar
            tileClassName={this.handleDateActivity}
            onClickDay={date => this.onChange(date)} />
          {this.state.dateIsClicked &&
          <ExerciseForm
            activityDate={this.state.dates[this.state.date]}
            date={this.state.date}
            updateActivity={this.updateActivity}
            onScoreChange={this.increaseScore} />}
        </div>
      </div>
    )
  }

}

export default ProfilePage
