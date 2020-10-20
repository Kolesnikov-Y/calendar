import React from 'react'
import { useSelector } from 'react-redux'
import { CalendarItem } from './CalendarItem';

export const CalendarBody = () => {
     const items = useSelector(state => state.calendar.calendarTime);
    return(
        <div className="calendar-body">
          {items.map(i => <CalendarItem key={i.id} time={i.time} id={i.id} items={i.items}/>)}
        </div>
    )
}
