import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { DropTarget } from 'react-drag-drop-container';
import * as Actions from '../../store/actions/Actions'
import '../../assets/style/App.scss'



class Queue extends Component {
    constructor(props) {
        super(props)
        this.dropped = this.dropped.bind(this)
    }

    dropped(e) {
        this.props.actions.updateBox(e)
    }
    
    render() {
        let html = []
        console.log(this.props.Dragged)
        if(this.props.Dragged && this.props.Dragged.length > 0) {
            console.log(this.props.Dragged)
            for(let i in this.props.Dragged) {
                html.push(<div key={this.props.Dragged[i].dragElem.innerText}>{this.props.Dragged[i].dragElem.innerText}</div>)
            }
        }
        return (
            <div className='queue-container'>
                <DropTarget 
                    targetKey='queue' 
                    onHit={this.dropped}
                >
                    <h1>Queue</h1>
                    {html}
                </DropTarget>
            </div>
          )
    }
}
export default connect(
    state => {
        return {
            Dragged: state.Dragged
        }
    },
    dispatch => ({
        actions: { ...bindActionCreators(Actions, dispatch) }
    })
)(Queue)