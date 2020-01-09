import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Actions from '../../store/actions/Actions'
import '../../assets/style/App.scss'

class List extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>List</div>
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
)(List)