import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ChooseTeam from "./chooseTeam"

const svenskaSpelApi = "https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=stockholm&numResponses=20"

class ChooseTeamPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(svenskaSpelApi).then(response => response.json()).then(json => {
      this.setState({
        data: json
      })
    })
  }
// fetch is working
// map function not working
  render() {
    return (
      <div>
        {this.state.data.map(team => {
          return <ChooseTeam
            name={team.name}
            id={team.id}
            city={team.city}
            subSection={team.subSection} />})}
      </div>
    )
  }
}

export default ChooseTeamPage
