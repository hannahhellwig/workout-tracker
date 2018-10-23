import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class ChooseTeam extends React.Component {

  render() {
    return (
      <div className="teamInfo">
        <p>{this.props.name}</p>
        <p>{this.props.city}</p>
        <p>{this.props.subSection}</p>
        <Link to="/profile">
          <button>
            Select
          </button>
        </Link>
      </div>
    )
  }

}

export default ChooseTeam
