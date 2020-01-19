import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DragDropContainer } from 'react-drag-drop-container';
import * as Actions from '../../store/actions/Actions'
import '../../assets/style/App.scss'

class OffCourt extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const players = this.props.OffCourt
        let playerContainer = []

        if (players && players.length > 0) {
            for (let player of players) {
                playerContainer.push(
                    <DragDropContainer key={player} targetKey='queue' >
                        <div className='name-card'>{player}</div>
                    </DragDropContainer>
                )
            }
        }
        return (
            <div className='name-container'>
                <h1>Names</h1>
                {playerContainer}
                <div className='input-container'>
                    <input type='button' value='Add New Player' onClick={this.props.actions.ShowModal} />
                </div>
            </div>
        )
    }
}
export default connect(
    state => {
        return {
            ...state,
            OffCourt: state.OffCourt
        }
    },
    dispatch => ({
        actions: { ...bindActionCreators(Actions, dispatch) }
    })
)(OffCourt)