import React, { Component } from "react";
import Smurfs from './Smurfs'
import { connect } from 'react-redux'

import { addSmurf } from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.addSmurf()
  }

  render() {
    return (
      <div className="App">
        <Smurfs />
      </div>
    )
  }
}

export default connect(null, { addSmurf })(App);
