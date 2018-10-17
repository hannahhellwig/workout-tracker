import React from "react"
import Calendar from 'react-calendar'

class ProfilePage extends React.Component {

  state = {
    date: new Date()
  }

  onChange = date => this.setState({ date })

  onClickDay = exercise => alert('Clicked day: ', exercise)

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.onClickDay} />
        <div className="popup">
            hej
        </div>
      </div>
    )
  }

}

export default ProfilePage
