import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"
import "./index.scss"
import "./components/profilePage/profilePage.scss"
import ProfilePage from "./components/profilePage/profilePage"
import ChooseTeamPage from "./components/chooseTeamPage/chooseTeamPage"

ReactDOM.render(<ChooseTeamPage />, document.getElementById("root"))
