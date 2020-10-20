import React from 'react'

export const BodyItem = props => {

    function clickHandler() {
        props.func(); 
        console.log(props.func);
    }

    return (
        <div className="calendar-item__body-item" onClick={clickHandler}>
                  {props.title}
            {/* <ChangeEvent text={props.title}/> */}
        </div>
    )
}