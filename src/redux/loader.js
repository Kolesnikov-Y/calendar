import { END_LOADING, START_LOADING } from "./types"

const initialState = {
    isLoad: false
}

export default function loader (state = initialState, action) {
    switch(action.type){
        case START_LOADING: 
            return state = {...state, isLoad: true}; 
        case END_LOADING: 
            return state = {...state, isLoad: false}
        default: 
        return state
    }
}