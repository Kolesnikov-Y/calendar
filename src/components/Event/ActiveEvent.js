import React, { useState } from 'react'; 
import {useDispatch} from 'react-redux'
import {addTask} from '../../redux/actions'; 
import { MassageError } from '../MassageError';
import CloseBtn from './CloseBtn';
import { EventForm } from './EventForm';

export const ActiveEvent = props => {
  
    
    return(
        <div className="event-window">
            <div className="event-window-container">
                <div className="event-window__closeBtn">
                    <CloseBtn/>
                </div>
                <EventForm func={addTask}/>
            </div>
        </div>
    )
}
