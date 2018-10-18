import React from "react"
import Calendar from "react-calendar"
import ExerciseForm from "./exerciseForm"

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      dateIsClicked: false,
      count: 0
    }
  }

  onChange = date => this.setState({ date, dateIsClicked: true })

  render() {
    return (
      <div>
        <Calendar
          onClickDay={this.onChange}
          value={this.state.date} />

        {this.state.dateIsClicked &&
          <ExerciseForm
            value={this.state.date} />}
      </div>
    )
  }

}

export default ProfilePage
