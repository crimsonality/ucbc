import ActionTypes from './ActionTypes'

export const AddQueue = (event) => ({
    type: ActionTypes.ADD_QUEUE,
    payload: {
        event
    }
})

export const UpdateInputValue = (val) => ({
    type: ActionTypes.UPDATE_INPUT_VALUE,
    payload: {
        val
    }
})

export const ShowModal = () => ({
    type: ActionTypes.SHOW_MODAL
})

export const HideModal = () => ({
    type: ActionTypes.HIDE_MODAL
})

export const AddNewPlayer = () => ({
    type: ActionTypes.ADD_NEW_PLAYER
})