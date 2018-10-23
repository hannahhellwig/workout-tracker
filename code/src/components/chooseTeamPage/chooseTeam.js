import React from "react"

class ChooseTeam extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.city}</p>
        <p>{this.props.subSection}</p>
        <button> Select </button>
      </div>
    )
  }

}

export default ChooseTeam
