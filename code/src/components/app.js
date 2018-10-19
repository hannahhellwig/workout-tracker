import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import ProfilePage from "./profilePage/profilePage"
import ChooseTeamPage from "./chooseTeamPage/chooseTeamPage"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "ProfilePage"
    }
  }

  goToProfile = () => {
    this.setState({ page: "ProfilePage"})
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/profile" exact="true" component={ProfilePage} />
          <Route path="/" exact="true" component={ChooseTeamPage} />
        </div>
      </Router>
    )
  }

}

export default App
