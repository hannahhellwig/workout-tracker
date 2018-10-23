import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ChooseTeam from "./chooseTeam"

// const svenskaSpelApi = (`https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=${this.state.search}&numResponses=20"`)

class ChooseTeamPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(`https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=${this.state.search}&numResponses=30"`).then(response => response.json()).then(json => {
      this.setState({
        data: json.data
      })
    })
  }
  
  handleSearch = event => {
    this.setState({
      search: event.target.value,
    }, () => this.componentDidMount())
  }

  render() {
    return (
      <div>
        <div className="searchFieldContainer">
          <h3>I want to collect points to my team based in<input type="search" id="searchField" placeholder=" city" onChange={this.handleSearch} value={this.state.search} />!</h3>
        </div>
        <div className="teamList">
          {this.state.data.map(team => <ChooseTeam
            name={team.name}
            id={team.id}
            city={team.city}
            subSection={team.subSection} />)}
        </div>
      </div>
    )
  }

}

export default ChooseTeamPage
