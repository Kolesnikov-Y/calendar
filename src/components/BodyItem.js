import React from 'react'
import { useState } from 'react';
import {  ChangeEvent } from './Event/ChangeEvent';

export const BodyItem = props => {
/* 
    1. повеить обработчик события на элемент 
    2. всплывающее окно на элемент 
    во всплывающем окне должно быть 2 кнопки -> Удалить и Изменить
    3. Добавить функционал кнопкам, застилизовать их.
    4. Устарнить баг с нажатием на див, что бы не появлялось окно Active event

*/
    // const [state, setState] = useState({isVisible: false})

    function clickHandler(e) {
        // setState({isVisible: !state.isVisible})
        console.log("say hello");
    }

    return (
        <div className="calendar-item__body-item" onClick={clickHandler}>
                  {props.title}
            {/* {state.isVisible ?  <ButtonGroup/> : null} */}
            <ChangeEvent text={props.title}/>
        </div>
    )
}