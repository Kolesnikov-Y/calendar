import { CLOSE_MODAL, OPEN_MODAL } from "./types"

const initialState = {
    isOpen: false
}

export default function modal (state = initialState, action){
    switch(action.type){
        case OPEN_MODAL: 
            return state = {...state, isOpen: true}; 
        case CLOSE_MODAL: 
            return state = {...state, isOpen: false}; 
        default: 
            return state
    }
   
}