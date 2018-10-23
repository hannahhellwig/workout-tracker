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
    fetch(`https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=${this.state.search}&numResponses=20"`).then(response => response.json()).then(json => {
      this.setState({
        data: json.data
      })
    })
  }

  // const filteredList = this.state.data
  //   filteredList = filteredList.filter(function(item) {
  //     return item.search(
  //       event.target.value) !== -1
  //   })
  // this.setState({data: filteredList})

  handleSearch = event => {
    this.setState({
      search: event.target.value,
    }, () => this.componentDidMount())
  }

  render() {
    return (
      <div>
        <div className="searchFieldContainer">
          <input type="search" id="searchField" placeholder="Search Sport Club" onChange={this.handleSearch} value={this.state.search} />
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
