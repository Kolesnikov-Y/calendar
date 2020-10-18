import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react';
import { ActiveEvent } from './ActiveEvent';
import { BodyItem } from './BodyItem';

export const CalendarItem = (props) => {
    const [state, setState ] = useState({value: false})

    function handelOpen(e) {
        setState({...state, value: !state.value })
    }

    return(
        <div className="calendar-item">
            <div className="calendar-item__time">
                <span className="time">{props.time}</span>
            </div>
            { state.value ? <ActiveEvent time={props.time} id={props.id}/> : null}
            <div className="calendar-item__body" onClick={handelOpen}>
               {props.items.length ? props.items.map(i => <BodyItem key={i.id} title={i.title}/>): null} 
            </div>
        </div>
    )
}