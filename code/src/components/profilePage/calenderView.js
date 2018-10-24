import React from "react"
import Calendar from "react-calendar"

class CalenderView extends React.Component {

  render() {
    return (
      <div>
        <Calendar
          minDetail="month" />
      </div>
    )
  }

}

export default CalenderView
