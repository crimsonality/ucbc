import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Actions from '../store/actions/App'
import '../assets/style/App.scss'

class App extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="App">
              <header className="App-header">
                React redux set up base
              </header>
            </div>
          )
    }
}
export default connect(
    state => {
        return {
            ...state
        }
    },
    dispatch => ({
        actions: { ...bindActionCreators(Actions, dispatch) }
    })
)(App)