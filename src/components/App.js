import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../store/actions/Actions'
import '../assets/style/App.scss'

import Court from './Court'
import Queue from './Queue'
import OffCourt from './OffCourt'
import AddPlayerModal from './AddPlayerModal'

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
              <div className="app-container">
                <Court />
                <Queue />
                <OffCourt />
              </div>
              <AddPlayerModal />
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