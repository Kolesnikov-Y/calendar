import { ADD_TASK, CLOSE_MODAL, END_LOADING, IS_MODAL_CLOSE, IS_MODAL_OPEN, OPEN_MODAL, RENDER_DATA, START_LOADING } from "./types";

export function startLoading() {
    return({
        type: START_LOADING
    })
}

export function endLoading() {
    return({
        type: END_LOADING
    })
}

//  ========= modal ==========

export function openModal(){
    return({
        type: OPEN_MODAL
    })
}

export function closeModal(){
    return({
        type: CLOSE_MODAL
    })
}

export function isModalOpen(id) {
    return({
        type: IS_MODAL_OPEN, 
        id
    })
}
export function isModalClose(id) {
    return({
        type: IS_MODAL_CLOSE, 
        id
    })
}


// ================= TASKS =========

export function addTask(payload, id) {
    return ({
        type: ADD_TASK, 
        payload, 
        id
    })
}

export function renderData( ){
    return({
        type: RENDER_DATA
    })
}