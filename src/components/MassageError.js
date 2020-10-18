import React from 'react'

export const MassageError = props => {
    return(
        <div className="massage-error">
            {/* <p className="massage-error__arrow">&#8593;</p> */}
            <p>{props.massage}</p>
        </div>
    )
}