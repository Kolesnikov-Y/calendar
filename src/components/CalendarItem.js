import React, { useState } from 'react'
import { ActiveEvent } from './Event/ActiveEvent';
import { BodyItem } from './BodyItem';
import { ChangeEvent } from './Event/ChangeEvent';

export const CalendarItem = (props) => {
    const [state, setState ] = useState({isActiveEventOpen: false, 
                                         isChangeEventOpen: false 
                                        }); 
    function handelOpen() {
        setState({...state, isActiveEventOpen: true})
    }; 

    function handleClosePopup() {
        setState({...state, isActiveEventOpen: false})
    }; 

    function handleCloseChangePopup() {
        setState({...state, isChangeEventOpen: false})
    }; 

    function handleOpenChangePopup() {
        setState({...state, isChangeEventOpen: true})
    }; 

    return(
        <div className="calendar-item">
            <div className="calendar-item__time">
                <span className="time">{props.time}</span>
            </div>
            { state.isActiveEventOpen &&
                <ActiveEvent time={props.time} id={props.id} closePopup={handleClosePopup}/> 
            }

            {state.isChangeEventOpen &&
                <ChangeEvent time={props.time} id={props.id} closeChangeEvent={handleCloseChangePopup}/> 
            }
            
            <div className="calendar-item__body" onClick={handelOpen}>
               {props.items.length ? props.items.map(i => <BodyItem key={i.id} func={handleOpenChangePopup} title={i.title}/>) : null} 
            </div>
        </div>
    )
}