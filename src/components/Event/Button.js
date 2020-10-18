import React from 'react'; 
import classNames from 'classnames'

export const Button = props => {
    
    // console.log(props.edit);

   
    return (
        <button className={classNames("changeEvent__item", {
            "btn-edit": props.edit, 
            'btn-delete': props.del
        })}>
          {props.name}
        </button>
    )
}