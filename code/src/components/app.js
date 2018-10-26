import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import ProfilePage from "./profilePage/profilePage"
import ChooseTeamPage from "./chooseTeamPage/chooseTeamPage"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact="true" component={ChooseTeamPage} />
          <Route path="/chooseTeam" exact="true" component={ChooseTeamPage} />
          <Route path="/profile" exact="true" component={ProfilePage} />
        </div>
      </Router>
    )
  }

}

export default App
