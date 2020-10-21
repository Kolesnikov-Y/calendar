import React, { useState, useEffect, useRef} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../../redux/actions';
import { Button } from './Button';
import CloseBtn from './CloseBtn'
import { EventForm } from './EventForm';

export const ChangeEvent = ({closeFunc, id, time}) => {
    const [state, setState] = useState(false); 
    useEffect(() => {
        document.body.addEventListener('click', outsideClosePopup); 
    }); 
    const changeRef = useRef(); 
    const dispatch = useDispatch(); 

    const data = useSelector( state => {
        return state.calendar.calendarTime.find(item => item.id === id); 
    }); 
    const needID = useSelector(state => state.calendar.itemForChange); 
    const needItem = data.items.find(item => item.id === needID); 
    console.log(needItem);

    // props.closeChangeEvent
    const handleEdit = () => {
        console.log("edit");
        setState(!state); 
    }

    const handleDelete = () => {
        console.log("delete");
        dispatch(deleteTask(id, needID)); 
        closeFunc();
    }

    function outsideClosePopup(e) {
        const path = e.path || (e.composedPath && e.composedPath()) 
        if(!path.includes(changeRef.current)){
            closeFunc(); 
        }
        document.body.removeEventListener("click", outsideClosePopup); 
    }

    return (
        <div ref={changeRef} className="changeEvent">
                <div className="event-window-changeEvent">
                    <Button edit func={handleEdit} name={<i className="far fa-edit"></i>}/>
                    <Button del func={handleDelete} name={<i className="far fa-trash-alt"></i>}/>
                    <CloseBtn closePopup={closeFunc}/>
                </div>      

                <div className="changeEvent-defaultTxt">

                    <span className="changeEvent-defaultTxt__title">{needItem.title}</span>
                    <br/>
                    <span className="changeEvent-defaultTxt__time">{data.time}</span>
                </div>

              {state && <EventForm func={editTask} id={data.id} time={data.time} closePopup={closeFunc} itemID={needID}/>}
            
            </div>
    )
}