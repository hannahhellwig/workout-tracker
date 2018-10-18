import React from "react"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// const SvenskaSpelApi ="https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=stockholm&numResponses=20"

class Form extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: []
  //   }
  // }
  //
  // componentDidMount()

  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <form>
          <label>
            Strenght
            <input type="checkbox" value="Strenght" />
          </label>
          <label>
            Fitness
            <input type="checkbox" value="Fitness" />
          </label>
          <label>
            Flexability
            <input type="checkbox" value="Flexability" />
          </label>
        </form>
      </div>
    )
  }

}

export default Form
