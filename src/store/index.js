import { configureStore } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    data: [

        'Estudar React.js'
            
    ]
}

// REDUCER
function todo(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            }
            
        case 'REMOVE_TASK':
            const newState = state.tasks.filter(task => task !== action.payload)
            return {
                tasks: newState
            }
            

        default: 
            return state
    }
}


const store = configureStore({ reducer: todo })

export default store