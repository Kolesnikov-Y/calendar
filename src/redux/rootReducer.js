import {combineReducers} from 'redux';
import calendarData from './calendarData';
import loader from './loader';
import modal from './modal'; 

export const rootReducer = combineReducers({
    loader: loader, 
    modal: modal, 
    calendar: calendarData
})