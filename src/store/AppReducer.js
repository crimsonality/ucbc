import ActionTypes from './actions/ActionTypes'

const initialState = {  
    Queue: [],
    OffCourt: [],
    Court: [],
    AddPlayerModal: {
      Show: false,
      Input: ''
    }
}

const reducer = (state = initialState, action) => {
    let newState = state
    switch (action.type) {

        case ActionTypes.ADD_QUEUE: {
          newState = {
            ...state,
            Queue: [...state.Queue, action.payload.event]
          }
          break
        }

        case ActionTypes.UPDATE_INPUT_VALUE: {
          newState = {
            ...state,
            AddPlayerModal: {
              ...state.AddPlayerModal,
              Input: action.payload.val
            }
          }
          break
        }

        case ActionTypes.SHOW_MODAL: {
          newState = {
            ...state,
            AddPlayerModal: {
              ...state.AddPlayerModal,
              Show: true
            }
          }
          break
        }

        case ActionTypes.HIDE_MODAL: {
          newState = {
            ...state,
            AddPlayerModal: {
              ...state.AddPlayerModal,
              Show: false
            }
          }
          break
        }

        case ActionTypes.ADD_NEW_PLAYER: {
          newState = {
            ...state,
            OffCourt: [...state.OffCourt, state.AddPlayerModal.Input]
          }
          break
        }

        default:
          break
    }
    return newState;
}

export default reducer