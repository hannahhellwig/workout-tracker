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
          <Link to="/"> Choose Team </Link>
          <Link to="/profile"> Profile page </Link>
          <Route path="/" exact="true" component={ChooseTeamPage} />
          <Route path="/profile" exact="true" component={ProfilePage} />
        </div>
      </Router>
    )
  }

}

export default App
