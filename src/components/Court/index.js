import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/Actions'
import '../../assets/style/App.scss'

class Court extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className='court-container'>
                <h1>Court</h1>
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
)(Court)