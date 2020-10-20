import React, { useState } from 'react'
import { ActiveEvent } from './Event/ActiveEvent';
import { BodyItem } from './BodyItem';

export const CalendarItem = (props) => {
    const [state, setState ] = useState(false)
    function handelOpen(e) {
        // e.stopPropagation()
        setState(!state)
    }

    function handleClosePopup() {
        setState(false)
    } 

    return(
        <div className="calendar-item">
            <div className="calendar-item__time">
                <span className="time">{props.time}</span>
            </div>
            { state && 
                <ActiveEvent time={props.time} id={props.id} closePopup={handleClosePopup}/>
            }
            
            <div className="calendar-item__body" onClick={handelOpen}>
               {props.items.length ? props.items.map(i => <BodyItem key={i.id} title={i.title}/>): null} 
            </div>
        </div>
    )
}