import React, { useState } from 'react'
import { ActiveEvent } from './Event/ActiveEvent';
import { BodyItem } from './BodyItem';
import { ChangeEvent } from './Event/ChangeEvent';

export const CalendarItem = props => {
    const [state, setState ] = useState({isActiveEventOpen: false, 
                                         isChangeEventOpen: false 
                                        }); 
    function handelOpen() {
        setState({...state, isActiveEventOpen: true})
        console.log();
    }; 

    function handleClosePopup() {
        setState({...state, isActiveEventOpen: false})
        console.log(state);
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
            { state.isActiveEventOpen ?
                <ActiveEvent time={props.time} id={props.id} closePopup={handleClosePopup}/> : null 
            }

            {state.isChangeEventOpen ?
                <ChangeEvent time={props.time} id={props.id} closeFunc={handleCloseChangePopup} /> : null 
            }
            
            <div className="calendar-item__body" onClickCapture={handelOpen}>
               {props.items.length ? props.items.map(i => <BodyItem key={i.id} time={props.time} openFunc={handleOpenChangePopup} title={i.title} id={i.id} item={i}/>) : null} 
            </div>
        </div>
    )
}