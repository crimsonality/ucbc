import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Actions from '../store/actions/App'
import logo from '../assets/images/logo.svg'
import '../assets/style/App.scss'

class App extends Component {
	constructor(props) {
		super(props)
    }
    
    render() {
        return (
            <div className="App">
              <header className="App-header">
                Jiwoo Kim
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
)
(App)