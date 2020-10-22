import React from 'react'; 
import { useDispatch } from 'react-redux';
import { MassageError } from "../MassageError";

export const EventForm = props => {
    const dispatch = useDispatch(); 

    const [value, setValue] = React.useState({
        text: '', 
        start: 0, 
        duration: 0,
        isConfirm: false
    });  

    function handleSubmit(e) {
        e.preventDefault(); 
        if(!value.text || !value.start || value.start >= 30 || !value.duration){
            setValue({...value, isConfirm: true})
            return false
        }else{
            setValue({...value, isConfirm: false}); 

                const item = {
                    title: value.text,
                    start: value.start,
                    duration: value.duration, 
                    id: props.itemID || Date.now(), 
                }

                console.log("log from FORM: ", props.id, "itemID", props.itemID, "item id", item.id);
                dispatch(props.func(item, props.id, props.itemID)); 
                props.closePopup()
        }
    }   

    function changeHandler(e){
            setValue({...value, [e.target.name]: e.target.value});    
    }

    return (
        <form  className="event-window__form" onSubmit={handleSubmit} >
        <input className="event-window__input"
                    name="text"
                    id="text"
                    placeholder="TASK" 
                    onChange={changeHandler}/>
        {value.text || !value.isConfirm ? null : <MassageError massage="You need to type something in this input"/> }

        <input type="number" 
                name="start" 
                id="start" 
                placeholder="start in minutes"
                onChange={changeHandler} 
                className="event-window__input"/>
        {!value.start || value.start >= 30 || value.isConfirm ? <MassageError massage="max value need to be 30! pleace enter value < 30"/> : null}

        <input type="number" 
                name="duration" 
                id="duration" 
                placeholder="duration in minutes" 
                min='0'  
                onChange={changeHandler} 
                className="event-window__input"/>
        {value.duration || value.isConfirm ? <MassageError massage="this is duration of your event"/> : null }
        <button className="event-window__submit" type="submit">confirm</button>
    </form>
    )
}