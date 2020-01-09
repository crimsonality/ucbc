import ActionTypes from './actions/ActionTypes'

const initialState = {
    Dragged: [],
    Stuff: ""
}

const reducer = (state = initialState, action) => {
    let newState = state

    switch (action.type) {
        case ActionTypes.UPDATE_DRAGGED: {
          newState = {
            ...state,
            Dragged: [...state.Dragged, action.payload.event]
          }
          break
        }
        default:
          break
    }
    return newState;
}

export default reducer