import React from 'react'
import CloseBtn from './CloseBtn'

export const ChangeEvent = (props) => {
    return (
        <div className="changeEvent">
                <div className="event-window-changeEvent">
                    <button className="changeEvent__item btn-edit">
                        <i class="far fa-edit"></i>
                    </button>
                    <button className="changeEvent__item btn-delete">
                        <i class="far fa-trash-alt"></i>
                    </button>
                    <CloseBtn/>
                </div>      

                <div className="changeEvent-defaultTxt">
                    <span className="changeEvent-defaultTxt__title">{props.text}</span>
                    <br/>
                    <span className="changeEvent-defaultTxt__time">time</span>

                </div>

            
            </div>
    )
}