import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
const SvenskaSpelApi ="https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=stockholm&numResponses=20"

class ChooseTeamPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount()

  render() {
    return (

    )
  }

}

export default ChooseTeamPage
