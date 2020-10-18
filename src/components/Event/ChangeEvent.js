import React from 'react'
import { Button } from './Button';
import CloseBtn from './CloseBtn'
import { EventForm } from './EventForm';

export const ChangeEvent = (props) => {
    return (
        <div className="changeEvent">
                <div className="event-window-changeEvent">
                    <Button edit name={<i class="far fa-edit"></i>}/>
                    <Button del name={<i class="far fa-trash-alt"></i>}/>
                    <CloseBtn/>
                </div>      

                <div className="changeEvent-defaultTxt">

                    <span className="changeEvent-defaultTxt__title">{props.text}</span>
                    <br/>
                    <span className="changeEvent-defaultTxt__time">time</span>
                </div>
               <EventForm />
            
            </div>
    )
}