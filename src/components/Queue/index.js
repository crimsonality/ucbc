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
        this.props.actions.AddQueue(e)
    }
    
    render() {
        let html = []
        const Queue = this.props.Queue

        if(Queue && Queue.length > 0) {
            for(let i in Queue) {
                html.push(<div key={Queue[i].dragElem.innerText}>{Queue[i].dragElem.innerText}</div>)
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
            Queue: state.Queue
        }
    },
    dispatch => ({
        actions: { ...bindActionCreators(Actions, dispatch) }
    })
)(Queue)