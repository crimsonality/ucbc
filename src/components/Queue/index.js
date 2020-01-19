import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
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
        console.log(e)
        this.props.actions.AddQueue(e, 0)
    }

    render() {
        let queueBuilder = [],
            html = []
        const Queue = this.props.Queue

        if (Queue.Game) {

            for (let card in Queue.Game) {
                let game = Queue.Game[card]

                for (let player in game) {
                    queueBuilder.push(<div className='name-card' key={game[player]}>{game[player]}</div>)
                }

                html.push(
                    <DropTarget
                        key={card}
                        targetKey='queue'
                        onHit={this.dropped}
                        className={card}
                    >
                        {queueBuilder}
                    </DropTarget>
                )
            }

            html.push(
                <DropTarget
                    key={'new'}
                    targetKey='queue'
                    onHit={this.dropped}
                    className={'new'}
                > <div>New Queue</div>
                </DropTarget>
            )
        }
        return (
            <div className='queue-container'>
                <h1>Queue</h1>
                {html}
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