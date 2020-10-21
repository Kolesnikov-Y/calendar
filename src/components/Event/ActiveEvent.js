import React, { useEffect, useRef } from 'react'; 
import {addTask} from '../../redux/actions'; 
import CloseBtn from './CloseBtn';
import { EventForm } from './EventForm';

export const ActiveEvent = ({id, time, closePopup}) => {
    const windowRef = useRef(); 
    
    useEffect(() => {
        document.body.addEventListener('click', outsideClosePopup); 
    })

    function outsideClosePopup(e) {
       const path = e.path || (e.composedPath && e.composedPath()) 
        if(!path.includes(windowRef.current)){
            closePopup(); 
            console.log(e.target);
        }
        document.body.removeEventListener("click", outsideClosePopup)
    }

    return(
        <div ref={windowRef} className="event-window">
            <div className="event-window-container">
                <div className="event-window__closeBtn">
                    <CloseBtn closePopup={closePopup}/>
                </div>
                <EventForm closePopup={closePopup} func={addTask} id={id} time={time}/>
            </div>
        </div>
    )
}
