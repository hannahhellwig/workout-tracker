import React from "react"
import Calendar from "react-calendar"
import ExerciseForm from "./exerciseForm"

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      dateIsClicked: false,
      score: 0
    }
  }

  onChange = date => this.setState({ date, dateIsClicked: true })

  increaseScore = (amount) => {
    this.setState({ score: this.state.score + amount })
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        Points: {this.state.score}
        <Calendar
          onClickDay={this.onChange}
          value={this.state.date} />

        {this.state.dateIsClicked &&
          <ExerciseForm
            value={this.state.date}
            onScoreChange={this.increaseScore} />}
      </div>
    )
  }

}

export default ProfilePage
