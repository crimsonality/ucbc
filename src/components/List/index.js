import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { DragDropContainer} from 'react-drag-drop-container';
import * as Actions from '../../store/actions/Actions'
import '../../assets/style/App.scss'

class List extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className='name-container'>
                <h1>Names</h1>
                <DragDropContainer targetKey='queue' >
                    <div>Name1</div>
                </DragDropContainer>
                <DragDropContainer targetKey='queue' >
                    <div>Name2</div>
                </DragDropContainer>
                <DragDropContainer targetKey='queue' >
                    <div>Name3</div>
                </DragDropContainer>
                <DragDropContainer targetKey='queue' >
                    <div>Name4</div>
                </DragDropContainer>
                <DragDropContainer targetKey='queue' >
                    <div>Name5</div>
                </DragDropContainer>
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
)(List)