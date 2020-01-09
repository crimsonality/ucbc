import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../store/actions/Actions'
import '../assets/style/App.scss'
import '../assets/style/Modal.scss'

class AddPlayerModal extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.props.actions.UpdateInputValue(e.target.value)
    }
    
    handleSubmit(e) {
        e.preventDefault()  
        this.props.actions.AddNewPlayer()
        this.props.actions.HideModal()
        this.props.actions.UpdateInputValue('')
    }
    render() {
        const addPlayerModal = this.props.AddPlayerModal

        return (
            <div className={`modal-container ${addPlayerModal.Show ? '' : 'hide'}`} >
                <div className='modal-overlay' onClick={this.props.actions.HideModal}></div>
                <div className='modal-content'>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input 
                        type='button'
                        value='Close'
                        onClick={this.props.actions.HideModal}
                    />
                    <input 
                        type='text'
                        value={addPlayerModal.Input}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <button 
                        type='submit' 
                        value='Add' 
                    >
                        Add
                    </button>
                </form>
                    
                </div>
            </div>
          )
    }
}
export default connect(
    state => {
        return {
            ...state,
            AddPlayerModal: state.AddPlayerModal
        }
    },
    dispatch => ({
        actions: { ...bindActionCreators(Actions, dispatch) }
    })
)(AddPlayerModal)