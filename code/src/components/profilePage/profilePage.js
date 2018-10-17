import React from "react"

import Calendar from 'react-calendar'

class ProfilePage extends React.Component {

  state = {
    date: new Date()
  }

  onChange = date => this.setState({ date })
  onClickDay = value => alert('Clicked day: ', value)

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date} />
      </div>
    )
  }

}

export default ProfilePage