import React from 'react'; 
import { useDispatch } from 'react-redux';
import { getID } from '../redux/actions';
import { ChangeEvent } from './Event/ChangeEvent';

export const BodyItem = ({title, openFunc, id}) => {

    const dispatch = useDispatch(); 
 
    const clickHandler = () => {
        openFunc();
        dispatch(getID(id))
    } 
    return (
        <div className="calendar-item__body-item" onClick={clickHandler}>
                  <div>{title}</div>
        </div>
    )
}