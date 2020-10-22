import React from 'react'; 
import { useDispatch } from 'react-redux';
import { getID } from '../redux/actions';
import { ChangeEvent } from './Event/ChangeEvent';

export const BodyItem = ({title, openFunc, id, item}) => {
    const dispatch = useDispatch(); 
 
    const clickHandler = () => {
        openFunc();
        dispatch(getID(id))
    } 

    console.log(item.duration, "item duration");

    return (
        <div className="calendar-item__body-item"
         onClick={clickHandler}
         style={{height: item.duration, 
                 marginTop: item.start }  
                }
         >
                  {title}
        </div>
    )
}