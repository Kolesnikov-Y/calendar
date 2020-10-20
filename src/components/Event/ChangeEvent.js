import React, { useState } from 'react'
import { Button } from './Button';
import CloseBtn from './CloseBtn'
import { EventForm } from './EventForm';

export const ChangeEvent = (props) => {
    const [state, setState] = useState(false)

    const handleEdit = () => {
        console.log("edit");
        setState(true)
    }

    const handleDelete =() => {
        console.log("delete");
    }

    return (
        <div className="changeEvent">
                <div className="event-window-changeEvent">
                    <Button edit func={handleEdit} name={<i className="far fa-edit"></i>}/>
                    <Button del func={handleDelete} name={<i className="far fa-trash-alt"></i>}/>
                    <CloseBtn/>
                </div>      

                <div className="changeEvent-defaultTxt">

                    <span className="changeEvent-defaultTxt__title">{props.text}</span>
                    <br/>
                    <span className="changeEvent-defaultTxt__time">time</span>
                </div>

              {state && <EventForm />}
            
            </div>
    )
}