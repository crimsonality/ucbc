import ActionTypes from './actions/ActionTypes'

const initialState = {  
    Queue: {
      Game: []
    },
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
          let queueCard = [],
              name = action.payload.event.dragElem.innerText,
              key = action.payload.key
          state.OffCourt = state.OffCourt.filter((x) => x !== name)
          queueCard.push(name)
          newState = {
            ...state,
            Queue: {
              ...state.Queue,
              Game: [...state.Queue.Game, queueCard]
            },
            OffCourt: [...state.OffCourt]
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
          if (state.OffCourt.includes(state.AddPlayerModal.Input)) {
            alert('Player already exists')
          } else {
            newState = {
              ...state,
              OffCourt: [...state.OffCourt,state.AddPlayerModal.Input]
            }
          }
          break
        }

        default:
          break
    }
    return newState;
}

export default reducer