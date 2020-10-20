import React from 'react'

export default function CloseBtn({closePopup}) {
    return (
            <div className="closeBtn-wrapper" onClick={closePopup}>
                <div className="closeBtn"></div>
                <div className="closeBtn-info">close</div>
            </div>
    )
}