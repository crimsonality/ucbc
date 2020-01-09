import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Actions from '../store/actions/Actions'
import '../assets/style/App.scss'

import Court from './Court'
import Queue from './Queue'
import List from './List'

class App extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="App">
              <header className="App-header">
                UCBC (Underground Church Badminton Club) test
              </header>
              <Court />
              <Queue />
              <List />
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