import React, { Component } from "react";

import Smurfs from './Smurfs'
import Form from './Form'

import { connect } from 'react-redux'
import { getSmurfs } from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <Form />
        <Smurfs />
      </div>
    )
  }
}

export default connect(null, { getSmurfs })(App);
