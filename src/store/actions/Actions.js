import ActionTypes from './ActionTypes'

export const updateBox = (event) => ({
    type: ActionTypes.UPDATE_DRAGGED,
    payload: {
        event
    }
})
